'use client';

import React, { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { showToast, LoadingSpinner } from '@/components/ui';
import type { Invoice } from '@/lib/types';

export default function SubmitPaymentPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState('');
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('BANK_TRANSFER');
  const [reference, setReference] = useState('');
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    api.getMyInvoices().then((data) => {
      setInvoices(data.filter((i) => i.status !== 'PAID'));
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const selectedInv = invoices.find((i) => i.id === parseInt(selectedInvoice));
  const maxAmount = selectedInv ? selectedInv.amount - selectedInv.paidAmount : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedInvoice || !amount || parseFloat(amount) <= 0) {
      showToast('error', 'Please fill in all required fields');
      return;
    }
    if (parseFloat(amount) > maxAmount) {
      showToast('error', `Amount cannot exceed balance of $${maxAmount}`);
      return;
    }

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('invoiceId', selectedInvoice);
      formData.append('amount', amount);
      formData.append('method', method);
      if (reference) formData.append('reference', reference);
      if (file) formData.append('proof', file);

      await api.submitPayment(formData);
      showToast('success', 'Payment submitted for verification!');
      setSelectedInvoice('');
      setAmount('');
      setReference('');
      setFile(null);

      // Reload invoices
      const data = await api.getMyInvoices();
      setInvoices(data.filter((i) => i.status !== 'PAID'));
    } catch (err: any) {
      showToast('error', err?.response?.data?.message || 'Failed to submit payment');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-light text-slate-800 mb-2">Submit Payment</h1>
        <div className="w-16 h-1 bg-[#A31F24] mx-auto opacity-80" />
      </div>

      <div className="bg-[#FFF9E6] border border-yellow-200 rounded-lg p-6 mb-8 shadow-sm">
        <h2 className="text-[#A31F24] font-semibold text-lg mb-4 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          Bank Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-sm text-slate-800">
          <div>
            <p className="text-slate-500 mb-0.5">Bank</p>
            <p className="font-medium">Bank of Maldives</p>
          </div>
          <div>
            <p className="text-slate-500 mb-0.5">Account Name</p>
            <p className="font-medium">Eupheus LLP</p>
          </div>
          <div>
            <p className="text-slate-500 mb-0.5">Account No</p>
            <p className="font-medium font-mono text-base">773 0000 205513</p>
          </div>
          <div>
            <p className="text-slate-500 mb-0.5">Currency</p>
            <p className="font-medium">MVR</p>
          </div>
        </div>
      </div>

      {invoices.length === 0 ? (
        <div className="bg-white border rounded-lg p-12 text-center text-slate-500 shadow-sm">
          No outstanding invoices. All payments are up to date!
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Select Invoice <span className="text-[#A31F24]">*</span>
              </label>
              <select 
                className="w-full h-11 px-4 bg-white border border-[#cccccc] rounded outline-none focus:border-[#A31F24] focus:ring-1 focus:ring-[#A31F24] transition-all" 
                value={selectedInvoice} 
                onChange={(e) => { setSelectedInvoice(e.target.value); setAmount(''); }}
              >
                <option value="">Choose an invoice...</option>
                {invoices.map((inv) => (
                  <option key={inv.id} value={inv.id}>
                    {inv.invoiceNumber} — {inv.feeStructure?.name} (Balance: MVR {(inv.amount - inv.paidAmount).toLocaleString()})
                  </option>
                ))}
              </select>
            </div>

            {selectedInv && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 space-y-6">
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg text-sm space-y-2">
                  <div className="flex justify-between"><span className="text-slate-500">Total Invoice Amount:</span> <span className="font-medium">MVR {selectedInv.amount.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Previously Paid:</span> <span className="font-medium text-slate-700">MVR {selectedInv.paidAmount.toLocaleString()}</span></div>
                  <div className="flex justify-between pt-2 border-t border-slate-200"><span className="text-slate-600 font-medium">Remaining Balance:</span> <span className="font-bold text-[#A31F24]">MVR {maxAmount.toLocaleString()}</span></div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Payment Amount (MVR) <span className="text-[#A31F24]">*</span>
                    </label>
                    <input type="number" 
                      className="w-full h-11 px-4 bg-white border border-[#cccccc] rounded outline-none focus:border-[#A31F24] focus:ring-1 focus:ring-[#A31F24] transition-all" 
                      step="0.01" min="0.01" max={maxAmount}
                      value={amount} onChange={(e) => setAmount(e.target.value)} placeholder={`e.g., ${maxAmount}`} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Payment Method <span className="text-[#A31F24]">*</span>
                    </label>
                    <select 
                      className="w-full h-11 px-4 bg-white border border-[#cccccc] rounded outline-none focus:border-[#A31F24] focus:ring-1 focus:ring-[#A31F24] transition-all" 
                      value={method} onChange={(e) => setMethod(e.target.value)}
                    >
                      <option value="BANK_TRANSFER">Bank Transfer</option>
                      <option value="CARD">Credit/Debit Card</option>
                      <option value="CASH">Cash</option>
                      <option value="CHECK">Check</option>
                      <option value="MOBILE_MONEY">Mobile Money</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Transaction Reference
                  </label>
                  <input 
                    className="w-full h-11 px-4 bg-white border border-[#cccccc] rounded outline-none focus:border-[#A31F24] focus:ring-1 focus:ring-[#A31F24] transition-all" 
                    value={reference} onChange={(e) => setReference(e.target.value)} placeholder="e.g., receipt or tracking number" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Payment Proof (PDF/Image)
                  </label>
                  <div className="border border-[#cccccc] rounded p-2 bg-white flex items-center focus-within:border-[#A31F24] focus-within:ring-1 focus-within:ring-[#A31F24] transition-all">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png,.webp"
                      className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 outline-none"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Maximum file size: 5MB</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <button 
                    type="submit" 
                    disabled={submitting} 
                    className="bg-[#333333] hover:bg-black text-white px-8 py-3 rounded text-sm font-semibold tracking-wider uppercase transition-colors min-w-[200px] shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Processing...' : 'Submit Payment'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
