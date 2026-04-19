/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Department
 *
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>;
/**
 * Model Program
 *
 */
export type Program = $Result.DefaultSelection<Prisma.$ProgramPayload>;
/**
 * Model Intake
 *
 */
export type Intake = $Result.DefaultSelection<Prisma.$IntakePayload>;
/**
 * Model Applicant
 *
 */
export type Applicant = $Result.DefaultSelection<Prisma.$ApplicantPayload>;
/**
 * Model Student
 *
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>;
/**
 * Model FeeStructure
 *
 */
export type FeeStructure =
  $Result.DefaultSelection<Prisma.$FeeStructurePayload>;
/**
 * Model Invoice
 *
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>;
/**
 * Model Payment
 *
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>;
/**
 * Model Notice
 *
 */
export type Notice = $Result.DefaultSelection<Prisma.$NoticePayload>;
/**
 * Model AuditLog
 *
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
    ADMIN: 'ADMIN';
    APPLICANT: 'APPLICANT';
    STUDENT: 'STUDENT';
  };

  export type Role = (typeof Role)[keyof typeof Role];

  export const UserStatus: {
    ACTIVE: 'ACTIVE';
    INACTIVE: 'INACTIVE';
  };

  export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];

  export const IntakeStatus: {
    ACTIVE: 'ACTIVE';
    CLOSED: 'CLOSED';
  };

  export type IntakeStatus = (typeof IntakeStatus)[keyof typeof IntakeStatus];

  export const ApplicantStatus: {
    PENDING: 'PENDING';
    APPROVED: 'APPROVED';
    REJECTED: 'REJECTED';
  };

  export type ApplicantStatus =
    (typeof ApplicantStatus)[keyof typeof ApplicantStatus];

  export const InvoiceStatus: {
    PENDING: 'PENDING';
    PARTIAL: 'PARTIAL';
    PAID: 'PAID';
    OVERDUE: 'OVERDUE';
  };

  export type InvoiceStatus =
    (typeof InvoiceStatus)[keyof typeof InvoiceStatus];

  export const PaymentStatus: {
    SUBMITTED: 'SUBMITTED';
    VERIFIED: 'VERIFIED';
    REJECTED: 'REJECTED';
  };

  export type PaymentStatus =
    (typeof PaymentStatus)[keyof typeof PaymentStatus];

  export const NoticeAudience: {
    ALL: 'ALL';
    APPLICANTS: 'APPLICANTS';
    STUDENTS: 'STUDENTS';
  };

  export type NoticeAudience =
    (typeof NoticeAudience)[keyof typeof NoticeAudience];
}

export type Role = $Enums.Role;

export const Role: typeof $Enums.Role;

export type UserStatus = $Enums.UserStatus;

export const UserStatus: typeof $Enums.UserStatus;

export type IntakeStatus = $Enums.IntakeStatus;

export const IntakeStatus: typeof $Enums.IntakeStatus;

export type ApplicantStatus = $Enums.ApplicantStatus;

export const ApplicantStatus: typeof $Enums.ApplicantStatus;

export type InvoiceStatus = $Enums.InvoiceStatus;

export const InvoiceStatus: typeof $Enums.InvoiceStatus;

export type PaymentStatus = $Enums.PaymentStatus;

export const PaymentStatus: typeof $Enums.PaymentStatus;

export type NoticeAudience = $Enums.NoticeAudience;

export const NoticeAudience: typeof $Enums.NoticeAudience;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Departments
   * const departments = await prisma.department.findMany()
   * ```
   */
  get department(): Prisma.DepartmentDelegate<ExtArgs>;

  /**
   * `prisma.program`: Exposes CRUD operations for the **Program** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Programs
   * const programs = await prisma.program.findMany()
   * ```
   */
  get program(): Prisma.ProgramDelegate<ExtArgs>;

  /**
   * `prisma.intake`: Exposes CRUD operations for the **Intake** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Intakes
   * const intakes = await prisma.intake.findMany()
   * ```
   */
  get intake(): Prisma.IntakeDelegate<ExtArgs>;

  /**
   * `prisma.applicant`: Exposes CRUD operations for the **Applicant** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Applicants
   * const applicants = await prisma.applicant.findMany()
   * ```
   */
  get applicant(): Prisma.ApplicantDelegate<ExtArgs>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   */
  get student(): Prisma.StudentDelegate<ExtArgs>;

  /**
   * `prisma.feeStructure`: Exposes CRUD operations for the **FeeStructure** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more FeeStructures
   * const feeStructures = await prisma.feeStructure.findMany()
   * ```
   */
  get feeStructure(): Prisma.FeeStructureDelegate<ExtArgs>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Invoices
   * const invoices = await prisma.invoice.findMany()
   * ```
   */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Payments
   * const payments = await prisma.payment.findMany()
   * ```
   */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.notice`: Exposes CRUD operations for the **Notice** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Notices
   * const notices = await prisma.notice.findMany()
   * ```
   */
  get notice(): Prisma.NoticeDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AuditLogs
   * const auditLogs = await prisma.auditLog.findMany()
   * ```
   */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends bigint
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Department: 'Department';
    Program: 'Program';
    Intake: 'Intake';
    Applicant: 'Applicant';
    Student: 'Student';
    FeeStructure: 'FeeStructure';
    Invoice: 'Invoice';
    Payment: 'Payment';
    Notice: 'Notice';
    AuditLog: 'AuditLog';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs; clientOptions: PrismaClientOptions },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      this['params']['clientOptions']
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > = {
    meta: {
      modelProps:
        | 'user'
        | 'department'
        | 'program'
        | 'intake'
        | 'applicant'
        | 'student'
        | 'feeStructure'
        | 'invoice'
        | 'payment'
        | 'notice'
        | 'auditLog';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>;
        fields: Prisma.DepartmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>;
          };
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>;
          };
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[];
          };
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>;
          };
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[];
          };
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>;
          };
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>;
          };
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>;
          };
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDepartment>;
          };
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DepartmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<DepartmentCountAggregateOutputType>
              | number;
          };
        };
      };
      Program: {
        payload: Prisma.$ProgramPayload<ExtArgs>;
        fields: Prisma.ProgramFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProgramFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProgramFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>;
          };
          findFirst: {
            args: Prisma.ProgramFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProgramFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>;
          };
          findMany: {
            args: Prisma.ProgramFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[];
          };
          create: {
            args: Prisma.ProgramCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>;
          };
          createMany: {
            args: Prisma.ProgramCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProgramCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[];
          };
          delete: {
            args: Prisma.ProgramDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>;
          };
          update: {
            args: Prisma.ProgramUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>;
          };
          deleteMany: {
            args: Prisma.ProgramDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProgramUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ProgramUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>;
          };
          aggregate: {
            args: Prisma.ProgramAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProgram>;
          };
          groupBy: {
            args: Prisma.ProgramGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProgramGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProgramCountArgs<ExtArgs>;
            result: $Utils.Optional<ProgramCountAggregateOutputType> | number;
          };
        };
      };
      Intake: {
        payload: Prisma.$IntakePayload<ExtArgs>;
        fields: Prisma.IntakeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.IntakeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IntakePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.IntakeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IntakePayload>;
          };
          findFirst: {
            args: Prisma.IntakeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IntakePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.IntakeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IntakePayload>;
          };
          findMany: {
            args: Prisma.IntakeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IntakePayload>[];
          };
          create: {
            args: Prisma.IntakeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IntakePayload>;
          };
          createMany: {
            args: Prisma.IntakeCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.IntakeCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IntakePayload>[];
          };
          delete: {
            args: Prisma.IntakeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IntakePayload>;
          };
          update: {
            args: Prisma.IntakeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IntakePayload>;
          };
          deleteMany: {
            args: Prisma.IntakeDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.IntakeUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.IntakeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IntakePayload>;
          };
          aggregate: {
            args: Prisma.IntakeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateIntake>;
          };
          groupBy: {
            args: Prisma.IntakeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<IntakeGroupByOutputType>[];
          };
          count: {
            args: Prisma.IntakeCountArgs<ExtArgs>;
            result: $Utils.Optional<IntakeCountAggregateOutputType> | number;
          };
        };
      };
      Applicant: {
        payload: Prisma.$ApplicantPayload<ExtArgs>;
        fields: Prisma.ApplicantFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ApplicantFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ApplicantFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>;
          };
          findFirst: {
            args: Prisma.ApplicantFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ApplicantFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>;
          };
          findMany: {
            args: Prisma.ApplicantFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>[];
          };
          create: {
            args: Prisma.ApplicantCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>;
          };
          createMany: {
            args: Prisma.ApplicantCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ApplicantCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>[];
          };
          delete: {
            args: Prisma.ApplicantDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>;
          };
          update: {
            args: Prisma.ApplicantUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>;
          };
          deleteMany: {
            args: Prisma.ApplicantDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ApplicantUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ApplicantUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>;
          };
          aggregate: {
            args: Prisma.ApplicantAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApplicant>;
          };
          groupBy: {
            args: Prisma.ApplicantGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ApplicantGroupByOutputType>[];
          };
          count: {
            args: Prisma.ApplicantCountArgs<ExtArgs>;
            result: $Utils.Optional<ApplicantCountAggregateOutputType> | number;
          };
        };
      };
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>;
        fields: Prisma.StudentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>;
          };
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>;
          };
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[];
          };
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>;
          };
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[];
          };
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>;
          };
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>;
          };
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>;
          };
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStudent>;
          };
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StudentGroupByOutputType>[];
          };
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>;
            result: $Utils.Optional<StudentCountAggregateOutputType> | number;
          };
        };
      };
      FeeStructure: {
        payload: Prisma.$FeeStructurePayload<ExtArgs>;
        fields: Prisma.FeeStructureFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FeeStructureFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FeeStructureFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
          };
          findFirst: {
            args: Prisma.FeeStructureFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FeeStructureFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
          };
          findMany: {
            args: Prisma.FeeStructureFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload>[];
          };
          create: {
            args: Prisma.FeeStructureCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
          };
          createMany: {
            args: Prisma.FeeStructureCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.FeeStructureCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload>[];
          };
          delete: {
            args: Prisma.FeeStructureDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
          };
          update: {
            args: Prisma.FeeStructureUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
          };
          deleteMany: {
            args: Prisma.FeeStructureDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FeeStructureUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.FeeStructureUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FeeStructurePayload>;
          };
          aggregate: {
            args: Prisma.FeeStructureAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFeeStructure>;
          };
          groupBy: {
            args: Prisma.FeeStructureGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FeeStructureGroupByOutputType>[];
          };
          count: {
            args: Prisma.FeeStructureCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<FeeStructureCountAggregateOutputType>
              | number;
          };
        };
      };
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>;
        fields: Prisma.InvoiceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>;
          };
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>;
          };
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[];
          };
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>;
          };
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[];
          };
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>;
          };
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>;
          };
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>;
          };
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInvoice>;
          };
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InvoiceGroupByOutputType>[];
          };
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>;
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number;
          };
        };
      };
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>;
        fields: Prisma.PaymentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[];
          };
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[];
          };
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePayment>;
          };
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PaymentGroupByOutputType>[];
          };
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>;
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number;
          };
        };
      };
      Notice: {
        payload: Prisma.$NoticePayload<ExtArgs>;
        fields: Prisma.NoticeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.NoticeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.NoticeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>;
          };
          findFirst: {
            args: Prisma.NoticeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.NoticeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>;
          };
          findMany: {
            args: Prisma.NoticeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[];
          };
          create: {
            args: Prisma.NoticeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>;
          };
          createMany: {
            args: Prisma.NoticeCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.NoticeCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[];
          };
          delete: {
            args: Prisma.NoticeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>;
          };
          update: {
            args: Prisma.NoticeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>;
          };
          deleteMany: {
            args: Prisma.NoticeDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.NoticeUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.NoticeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>;
          };
          aggregate: {
            args: Prisma.NoticeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateNotice>;
          };
          groupBy: {
            args: Prisma.NoticeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<NoticeGroupByOutputType>[];
          };
          count: {
            args: Prisma.NoticeCountArgs<ExtArgs>;
            result: $Utils.Optional<NoticeCountAggregateOutputType> | number;
          };
        };
      };
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>;
        fields: Prisma.AuditLogFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
          };
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
          };
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>;
          };
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAuditLog>;
          };
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AuditLogGroupByOutputType>[];
          };
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>;
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    auditLogs: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AuditLogWhereInput;
  };

  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    programs: number;
  };

  export type DepartmentCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    programs?: boolean | DepartmentCountOutputTypeCountProgramsArgs;
  };

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountProgramsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProgramWhereInput;
  };

  /**
   * Count Type ProgramCountOutputType
   */

  export type ProgramCountOutputType = {
    intakes: number;
    applicants: number;
    feeStructures: number;
    notices: number;
  };

  export type ProgramCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    intakes?: boolean | ProgramCountOutputTypeCountIntakesArgs;
    applicants?: boolean | ProgramCountOutputTypeCountApplicantsArgs;
    feeStructures?: boolean | ProgramCountOutputTypeCountFeeStructuresArgs;
    notices?: boolean | ProgramCountOutputTypeCountNoticesArgs;
  };

  // Custom InputTypes
  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProgramCountOutputType
     */
    select?: ProgramCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountIntakesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: IntakeWhereInput;
  };

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountApplicantsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ApplicantWhereInput;
  };

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountFeeStructuresArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FeeStructureWhereInput;
  };

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountNoticesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NoticeWhereInput;
  };

  /**
   * Count Type IntakeCountOutputType
   */

  export type IntakeCountOutputType = {
    applicants: number;
    feeStructures: number;
    notices: number;
  };

  export type IntakeCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    applicants?: boolean | IntakeCountOutputTypeCountApplicantsArgs;
    feeStructures?: boolean | IntakeCountOutputTypeCountFeeStructuresArgs;
    notices?: boolean | IntakeCountOutputTypeCountNoticesArgs;
  };

  // Custom InputTypes
  /**
   * IntakeCountOutputType without action
   */
  export type IntakeCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the IntakeCountOutputType
     */
    select?: IntakeCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * IntakeCountOutputType without action
   */
  export type IntakeCountOutputTypeCountApplicantsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ApplicantWhereInput;
  };

  /**
   * IntakeCountOutputType without action
   */
  export type IntakeCountOutputTypeCountFeeStructuresArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FeeStructureWhereInput;
  };

  /**
   * IntakeCountOutputType without action
   */
  export type IntakeCountOutputTypeCountNoticesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NoticeWhereInput;
  };

  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    invoices: number;
  };

  export type StudentCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    invoices?: boolean | StudentCountOutputTypeCountInvoicesArgs;
  };

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountInvoicesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InvoiceWhereInput;
  };

  /**
   * Count Type FeeStructureCountOutputType
   */

  export type FeeStructureCountOutputType = {
    invoices: number;
  };

  export type FeeStructureCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    invoices?: boolean | FeeStructureCountOutputTypeCountInvoicesArgs;
  };

  // Custom InputTypes
  /**
   * FeeStructureCountOutputType without action
   */
  export type FeeStructureCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FeeStructureCountOutputType
     */
    select?: FeeStructureCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * FeeStructureCountOutputType without action
   */
  export type FeeStructureCountOutputTypeCountInvoicesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InvoiceWhereInput;
  };

  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    payments: number;
  };

  export type InvoiceCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    payments?: boolean | InvoiceCountOutputTypeCountPaymentsArgs;
  };

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountPaymentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PaymentWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    name: string | null;
    password: string | null;
    role: $Enums.Role | null;
    status: $Enums.UserStatus | null;
    refreshToken: string | null;
    resetToken: string | null;
    resetTokenExpiry: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    name: string | null;
    password: string | null;
    role: $Enums.Role | null;
    status: $Enums.UserStatus | null;
    refreshToken: string | null;
    resetToken: string | null;
    resetTokenExpiry: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    password: number;
    role: number;
    status: number;
    refreshToken: number;
    resetToken: number;
    resetTokenExpiry: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    role?: true;
    status?: true;
    refreshToken?: true;
    resetToken?: true;
    resetTokenExpiry?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    role?: true;
    status?: true;
    refreshToken?: true;
    resetToken?: true;
    resetTokenExpiry?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    role?: true;
    status?: true;
    refreshToken?: true;
    resetToken?: true;
    resetTokenExpiry?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    email: string;
    name: string | null;
    password: string;
    role: $Enums.Role;
    status: $Enums.UserStatus;
    refreshToken: string | null;
    resetToken: string | null;
    resetTokenExpiry: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      password?: boolean;
      role?: boolean;
      status?: boolean;
      refreshToken?: boolean;
      resetToken?: boolean;
      resetTokenExpiry?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      applicant?: boolean | User$applicantArgs<ExtArgs>;
      student?: boolean | User$studentArgs<ExtArgs>;
      auditLogs?: boolean | User$auditLogsArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      password?: boolean;
      role?: boolean;
      status?: boolean;
      refreshToken?: boolean;
      resetToken?: boolean;
      resetTokenExpiry?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    password?: boolean;
    role?: boolean;
    status?: boolean;
    refreshToken?: boolean;
    resetToken?: boolean;
    resetTokenExpiry?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    applicant?: boolean | User$applicantArgs<ExtArgs>;
    student?: boolean | User$studentArgs<ExtArgs>;
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      applicant: Prisma.$ApplicantPayload<ExtArgs> | null;
      student: Prisma.$StudentPayload<ExtArgs> | null;
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        email: string;
        name: string | null;
        password: string;
        role: $Enums.Role;
        status: $Enums.UserStatus;
        refreshToken: string | null;
        resetToken: string | null;
        resetTokenExpiry: Date | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    applicant<T extends User$applicantArgs<ExtArgs> = {}>(
      args?: Subset<T, User$applicantArgs<ExtArgs>>,
    ): Prisma__ApplicantClient<
      $Result.GetResult<
        Prisma.$ApplicantPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;
    student<T extends User$studentArgs<ExtArgs> = {}>(
      args?: Subset<T, User$studentArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<
        Prisma.$StudentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$auditLogsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'Int'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly name: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly role: FieldRef<'User', 'Role'>;
    readonly status: FieldRef<'User', 'UserStatus'>;
    readonly refreshToken: FieldRef<'User', 'String'>;
    readonly resetToken: FieldRef<'User', 'String'>;
    readonly resetTokenExpiry: FieldRef<'User', 'DateTime'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
  };

  /**
   * User.applicant
   */
  export type User$applicantArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    where?: ApplicantWhereInput;
  };

  /**
   * User.student
   */
  export type User$studentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    where?: StudentWhereInput;
  };

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    where?: AuditLogWhereInput;
    orderBy?:
      | AuditLogOrderByWithRelationInput
      | AuditLogOrderByWithRelationInput[];
    cursor?: AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null;
    _avg: DepartmentAvgAggregateOutputType | null;
    _sum: DepartmentSumAggregateOutputType | null;
    _min: DepartmentMinAggregateOutputType | null;
    _max: DepartmentMaxAggregateOutputType | null;
  };

  export type DepartmentAvgAggregateOutputType = {
    id: number | null;
  };

  export type DepartmentSumAggregateOutputType = {
    id: number | null;
  };

  export type DepartmentMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    code: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type DepartmentMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    code: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type DepartmentCountAggregateOutputType = {
    id: number;
    name: number;
    code: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type DepartmentAvgAggregateInputType = {
    id?: true;
  };

  export type DepartmentSumAggregateInputType = {
    id?: true;
  };

  export type DepartmentMinAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type DepartmentMaxAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type DepartmentCountAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type DepartmentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Departments to fetch.
     */
    orderBy?:
      | DepartmentOrderByWithRelationInput
      | DepartmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Departments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Departments
     **/
    _count?: true | DepartmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: DepartmentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: DepartmentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DepartmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DepartmentMaxAggregateInputType;
  };

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
    [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>;
  };

  export type DepartmentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: DepartmentWhereInput;
    orderBy?:
      | DepartmentOrderByWithAggregationInput
      | DepartmentOrderByWithAggregationInput[];
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum;
    having?: DepartmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DepartmentCountAggregateInputType | true;
    _avg?: DepartmentAvgAggregateInputType;
    _sum?: DepartmentSumAggregateInputType;
    _min?: DepartmentMinAggregateInputType;
    _max?: DepartmentMaxAggregateInputType;
  };

  export type DepartmentGroupByOutputType = {
    id: number;
    name: string;
    code: string;
    createdAt: Date;
    updatedAt: Date;
    _count: DepartmentCountAggregateOutputType | null;
    _avg: DepartmentAvgAggregateOutputType | null;
    _sum: DepartmentSumAggregateOutputType | null;
    _min: DepartmentMinAggregateOutputType | null;
    _max: DepartmentMaxAggregateOutputType | null;
  };

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<DepartmentGroupByOutputType, T['by']> & {
          [P in keyof T & keyof DepartmentGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>;
        }
      >
    >;

  export type DepartmentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      code?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      programs?: boolean | Department$programsArgs<ExtArgs>;
      _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['department']
  >;

  export type DepartmentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      code?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['department']
  >;

  export type DepartmentSelectScalar = {
    id?: boolean;
    name?: boolean;
    code?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type DepartmentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    programs?: boolean | Department$programsArgs<ExtArgs>;
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type DepartmentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $DepartmentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Department';
    objects: {
      programs: Prisma.$ProgramPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        code: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['department']
    >;
    composites: {};
  };

  type DepartmentGetPayload<
    S extends boolean | null | undefined | DepartmentDefaultArgs,
  > = $Result.GetResult<Prisma.$DepartmentPayload, S>;

  type DepartmentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: DepartmentCountAggregateInputType | true;
  };

  export interface DepartmentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Department'];
      meta: { name: 'Department' };
    };
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(
      args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__DepartmentClient<
      $Result.GetResult<
        Prisma.$DepartmentPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__DepartmentClient<
      $Result.GetResult<
        Prisma.$DepartmentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(
      args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>,
    ): Prisma__DepartmentClient<
      $Result.GetResult<
        Prisma.$DepartmentPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__DepartmentClient<
      $Result.GetResult<
        Prisma.$DepartmentPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     *
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DepartmentFindManyArgs>(
      args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     *
     */
    create<T extends DepartmentCreateArgs>(
      args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>,
    ): Prisma__DepartmentClient<
      $Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DepartmentCreateManyArgs>(
      args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$DepartmentPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     *
     */
    delete<T extends DepartmentDeleteArgs>(
      args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>,
    ): Prisma__DepartmentClient<
      $Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DepartmentUpdateArgs>(
      args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>,
    ): Prisma__DepartmentClient<
      $Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(
      args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DepartmentUpdateManyArgs>(
      args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(
      args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>,
    ): Prisma__DepartmentClient<
      $Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
     **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends DepartmentAggregateArgs>(
      args: Subset<T, DepartmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>;

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetDepartmentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Department model
     */
    readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    programs<T extends Department$programsArgs<ExtArgs> = {}>(
      args?: Subset<T, Department$programsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<'Department', 'Int'>;
    readonly name: FieldRef<'Department', 'String'>;
    readonly code: FieldRef<'Department', 'String'>;
    readonly createdAt: FieldRef<'Department', 'DateTime'>;
    readonly updatedAt: FieldRef<'Department', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null;
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput;
  };

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null;
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput;
  };

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null;
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Departments to fetch.
     */
    orderBy?:
      | DepartmentOrderByWithRelationInput
      | DepartmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Departments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[];
  };

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null;
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Departments to fetch.
     */
    orderBy?:
      | DepartmentOrderByWithRelationInput
      | DepartmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Departments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[];
  };

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null;
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Departments to fetch.
     */
    orderBy?:
      | DepartmentOrderByWithRelationInput
      | DepartmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Departments.
     */
    skip?: number;
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[];
  };

  /**
   * Department create
   */
  export type DepartmentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>;
  };

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>;
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput;
  };

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Departments.
     */
    data: XOR<
      DepartmentUpdateManyMutationInput,
      DepartmentUncheckedUpdateManyInput
    >;
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput;
  };

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput;
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>;
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>;
  };

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null;
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput;
  };

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput;
  };

  /**
   * Department.programs
   */
  export type Department$programsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null;
    where?: ProgramWhereInput;
    orderBy?:
      | ProgramOrderByWithRelationInput
      | ProgramOrderByWithRelationInput[];
    cursor?: ProgramWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[];
  };

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null;
  };

  /**
   * Model Program
   */

  export type AggregateProgram = {
    _count: ProgramCountAggregateOutputType | null;
    _avg: ProgramAvgAggregateOutputType | null;
    _sum: ProgramSumAggregateOutputType | null;
    _min: ProgramMinAggregateOutputType | null;
    _max: ProgramMaxAggregateOutputType | null;
  };

  export type ProgramAvgAggregateOutputType = {
    id: number | null;
    departmentId: number | null;
  };

  export type ProgramSumAggregateOutputType = {
    id: number | null;
    departmentId: number | null;
  };

  export type ProgramMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    code: string | null;
    description: string | null;
    duration: string | null;
    departmentId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProgramMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    code: string | null;
    description: string | null;
    duration: string | null;
    departmentId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProgramCountAggregateOutputType = {
    id: number;
    name: number;
    code: number;
    description: number;
    duration: number;
    departmentId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ProgramAvgAggregateInputType = {
    id?: true;
    departmentId?: true;
  };

  export type ProgramSumAggregateInputType = {
    id?: true;
    departmentId?: true;
  };

  export type ProgramMinAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
    duration?: true;
    departmentId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProgramMaxAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
    duration?: true;
    departmentId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProgramCountAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
    duration?: true;
    departmentId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ProgramAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Program to aggregate.
     */
    where?: ProgramWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Programs to fetch.
     */
    orderBy?:
      | ProgramOrderByWithRelationInput
      | ProgramOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProgramWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Programs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Programs
     **/
    _count?: true | ProgramCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProgramAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProgramSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProgramMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProgramMaxAggregateInputType;
  };

  export type GetProgramAggregateType<T extends ProgramAggregateArgs> = {
    [P in keyof T & keyof AggregateProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram[P]>
      : GetScalarType<T[P], AggregateProgram[P]>;
  };

  export type ProgramGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProgramWhereInput;
    orderBy?:
      | ProgramOrderByWithAggregationInput
      | ProgramOrderByWithAggregationInput[];
    by: ProgramScalarFieldEnum[] | ProgramScalarFieldEnum;
    having?: ProgramScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProgramCountAggregateInputType | true;
    _avg?: ProgramAvgAggregateInputType;
    _sum?: ProgramSumAggregateInputType;
    _min?: ProgramMinAggregateInputType;
    _max?: ProgramMaxAggregateInputType;
  };

  export type ProgramGroupByOutputType = {
    id: number;
    name: string;
    code: string;
    description: string | null;
    duration: string | null;
    departmentId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ProgramCountAggregateOutputType | null;
    _avg: ProgramAvgAggregateOutputType | null;
    _sum: ProgramSumAggregateOutputType | null;
    _min: ProgramMinAggregateOutputType | null;
    _max: ProgramMaxAggregateOutputType | null;
  };

  type GetProgramGroupByPayload<T extends ProgramGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProgramGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProgramGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramGroupByOutputType[P]>;
        }
      >
    >;

  export type ProgramSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      code?: boolean;
      description?: boolean;
      duration?: boolean;
      departmentId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      department?: boolean | DepartmentDefaultArgs<ExtArgs>;
      intakes?: boolean | Program$intakesArgs<ExtArgs>;
      applicants?: boolean | Program$applicantsArgs<ExtArgs>;
      feeStructures?: boolean | Program$feeStructuresArgs<ExtArgs>;
      notices?: boolean | Program$noticesArgs<ExtArgs>;
      _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['program']
  >;

  export type ProgramSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      code?: boolean;
      description?: boolean;
      duration?: boolean;
      departmentId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      department?: boolean | DepartmentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['program']
  >;

  export type ProgramSelectScalar = {
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    duration?: boolean;
    departmentId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ProgramInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>;
    intakes?: boolean | Program$intakesArgs<ExtArgs>;
    applicants?: boolean | Program$applicantsArgs<ExtArgs>;
    feeStructures?: boolean | Program$feeStructuresArgs<ExtArgs>;
    notices?: boolean | Program$noticesArgs<ExtArgs>;
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ProgramIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>;
  };

  export type $ProgramPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Program';
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>;
      intakes: Prisma.$IntakePayload<ExtArgs>[];
      applicants: Prisma.$ApplicantPayload<ExtArgs>[];
      feeStructures: Prisma.$FeeStructurePayload<ExtArgs>[];
      notices: Prisma.$NoticePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        code: string;
        description: string | null;
        duration: string | null;
        departmentId: number;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['program']
    >;
    composites: {};
  };

  type ProgramGetPayload<
    S extends boolean | null | undefined | ProgramDefaultArgs,
  > = $Result.GetResult<Prisma.$ProgramPayload, S>;

  type ProgramCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProgramFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: ProgramCountAggregateInputType | true;
  };

  export interface ProgramDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Program'];
      meta: { name: 'Program' };
    };
    /**
     * Find zero or one Program that matches the filter.
     * @param {ProgramFindUniqueArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramFindUniqueArgs>(
      args: SelectSubset<T, ProgramFindUniqueArgs<ExtArgs>>,
    ): Prisma__ProgramClient<
      $Result.GetResult<
        Prisma.$ProgramPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Program that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramFindUniqueOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProgramFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ProgramClient<
      $Result.GetResult<
        Prisma.$ProgramPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Program that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramFindFirstArgs>(
      args?: SelectSubset<T, ProgramFindFirstArgs<ExtArgs>>,
    ): Prisma__ProgramClient<
      $Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Program that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProgramFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ProgramClient<
      $Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programs
     * const programs = await prisma.program.findMany()
     *
     * // Get first 10 Programs
     * const programs = await prisma.program.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const programWithIdOnly = await prisma.program.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProgramFindManyArgs>(
      args?: SelectSubset<T, ProgramFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Program.
     * @param {ProgramCreateArgs} args - Arguments to create a Program.
     * @example
     * // Create one Program
     * const Program = await prisma.program.create({
     *   data: {
     *     // ... data to create a Program
     *   }
     * })
     *
     */
    create<T extends ProgramCreateArgs>(
      args: SelectSubset<T, ProgramCreateArgs<ExtArgs>>,
    ): Prisma__ProgramClient<
      $Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Programs.
     * @param {ProgramCreateManyArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProgramCreateManyArgs>(
      args?: SelectSubset<T, ProgramCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Programs and returns the data saved in the database.
     * @param {ProgramCreateManyAndReturnArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProgramCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProgramCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProgramPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Program.
     * @param {ProgramDeleteArgs} args - Arguments to delete one Program.
     * @example
     * // Delete one Program
     * const Program = await prisma.program.delete({
     *   where: {
     *     // ... filter to delete one Program
     *   }
     * })
     *
     */
    delete<T extends ProgramDeleteArgs>(
      args: SelectSubset<T, ProgramDeleteArgs<ExtArgs>>,
    ): Prisma__ProgramClient<
      $Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Program.
     * @param {ProgramUpdateArgs} args - Arguments to update one Program.
     * @example
     * // Update one Program
     * const program = await prisma.program.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProgramUpdateArgs>(
      args: SelectSubset<T, ProgramUpdateArgs<ExtArgs>>,
    ): Prisma__ProgramClient<
      $Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Programs.
     * @param {ProgramDeleteManyArgs} args - Arguments to filter Programs to delete.
     * @example
     * // Delete a few Programs
     * const { count } = await prisma.program.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProgramDeleteManyArgs>(
      args?: SelectSubset<T, ProgramDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProgramUpdateManyArgs>(
      args: SelectSubset<T, ProgramUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Program.
     * @param {ProgramUpsertArgs} args - Arguments to update or create a Program.
     * @example
     * // Update or create a Program
     * const program = await prisma.program.upsert({
     *   create: {
     *     // ... data to create a Program
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program we want to update
     *   }
     * })
     */
    upsert<T extends ProgramUpsertArgs>(
      args: SelectSubset<T, ProgramUpsertArgs<ExtArgs>>,
    ): Prisma__ProgramClient<
      $Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramCountArgs} args - Arguments to filter Programs to count.
     * @example
     * // Count the number of Programs
     * const count = await prisma.program.count({
     *   where: {
     *     // ... the filter for the Programs we want to count
     *   }
     * })
     **/
    count<T extends ProgramCountArgs>(
      args?: Subset<T, ProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProgramAggregateArgs>(
      args: Subset<T, ProgramAggregateArgs>,
    ): Prisma.PrismaPromise<GetProgramAggregateType<T>>;

    /**
     * Group by Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramGroupByArgs['orderBy'] }
        : { orderBy?: ProgramGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProgramGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProgramGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Program model
     */
    readonly fields: ProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Program.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>,
    ): Prisma__DepartmentClient<
      | $Result.GetResult<
          Prisma.$DepartmentPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    intakes<T extends Program$intakesArgs<ExtArgs> = {}>(
      args?: Subset<T, Program$intakesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, 'findMany'> | Null
    >;
    applicants<T extends Program$applicantsArgs<ExtArgs> = {}>(
      args?: Subset<T, Program$applicantsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    feeStructures<T extends Program$feeStructuresArgs<ExtArgs> = {}>(
      args?: Subset<T, Program$feeStructuresArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, 'findMany'>
      | Null
    >;
    notices<T extends Program$noticesArgs<ExtArgs> = {}>(
      args?: Subset<T, Program$noticesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, 'findMany'> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Program model
   */
  interface ProgramFieldRefs {
    readonly id: FieldRef<'Program', 'Int'>;
    readonly name: FieldRef<'Program', 'String'>;
    readonly code: FieldRef<'Program', 'String'>;
    readonly description: FieldRef<'Program', 'String'>;
    readonly duration: FieldRef<'Program', 'String'>;
    readonly departmentId: FieldRef<'Program', 'Int'>;
    readonly createdAt: FieldRef<'Program', 'DateTime'>;
    readonly updatedAt: FieldRef<'Program', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Program findUnique
   */
  export type ProgramFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null;
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput;
  };

  /**
   * Program findUniqueOrThrow
   */
  export type ProgramFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null;
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput;
  };

  /**
   * Program findFirst
   */
  export type ProgramFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null;
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Programs to fetch.
     */
    orderBy?:
      | ProgramOrderByWithRelationInput
      | ProgramOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Programs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[];
  };

  /**
   * Program findFirstOrThrow
   */
  export type ProgramFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null;
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Programs to fetch.
     */
    orderBy?:
      | ProgramOrderByWithRelationInput
      | ProgramOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Programs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[];
  };

  /**
   * Program findMany
   */
  export type ProgramFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null;
    /**
     * Filter, which Programs to fetch.
     */
    where?: ProgramWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Programs to fetch.
     */
    orderBy?:
      | ProgramOrderByWithRelationInput
      | ProgramOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Programs.
     */
    cursor?: ProgramWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Programs.
     */
    skip?: number;
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[];
  };

  /**
   * Program create
   */
  export type ProgramCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null;
    /**
     * The data needed to create a Program.
     */
    data: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>;
  };

  /**
   * Program createMany
   */
  export type ProgramCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Program createManyAndReturn
   */
  export type ProgramCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Program update
   */
  export type ProgramUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null;
    /**
     * The data needed to update a Program.
     */
    data: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>;
    /**
     * Choose, which Program to update.
     */
    where: ProgramWhereUniqueInput;
  };

  /**
   * Program updateMany
   */
  export type ProgramUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>;
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput;
  };

  /**
   * Program upsert
   */
  export type ProgramUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null;
    /**
     * The filter to search for the Program to update in case it exists.
     */
    where: ProgramWhereUniqueInput;
    /**
     * In case the Program found by the `where` argument doesn't exist, create a new Program with this data.
     */
    create: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>;
    /**
     * In case the Program was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>;
  };

  /**
   * Program delete
   */
  export type ProgramDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null;
    /**
     * Filter which Program to delete.
     */
    where: ProgramWhereUniqueInput;
  };

  /**
   * Program deleteMany
   */
  export type ProgramDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Programs to delete
     */
    where?: ProgramWhereInput;
  };

  /**
   * Program.intakes
   */
  export type Program$intakesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null;
    where?: IntakeWhereInput;
    orderBy?: IntakeOrderByWithRelationInput | IntakeOrderByWithRelationInput[];
    cursor?: IntakeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: IntakeScalarFieldEnum | IntakeScalarFieldEnum[];
  };

  /**
   * Program.applicants
   */
  export type Program$applicantsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    where?: ApplicantWhereInput;
    orderBy?:
      | ApplicantOrderByWithRelationInput
      | ApplicantOrderByWithRelationInput[];
    cursor?: ApplicantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * Program.feeStructures
   */
  export type Program$feeStructuresArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null;
    where?: FeeStructureWhereInput;
    orderBy?:
      | FeeStructureOrderByWithRelationInput
      | FeeStructureOrderByWithRelationInput[];
    cursor?: FeeStructureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FeeStructureScalarFieldEnum | FeeStructureScalarFieldEnum[];
  };

  /**
   * Program.notices
   */
  export type Program$noticesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null;
    where?: NoticeWhereInput;
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[];
    cursor?: NoticeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[];
  };

  /**
   * Program without action
   */
  export type ProgramDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null;
  };

  /**
   * Model Intake
   */

  export type AggregateIntake = {
    _count: IntakeCountAggregateOutputType | null;
    _avg: IntakeAvgAggregateOutputType | null;
    _sum: IntakeSumAggregateOutputType | null;
    _min: IntakeMinAggregateOutputType | null;
    _max: IntakeMaxAggregateOutputType | null;
  };

  export type IntakeAvgAggregateOutputType = {
    id: number | null;
    programId: number | null;
    maxCapacity: number | null;
  };

  export type IntakeSumAggregateOutputType = {
    id: number | null;
    programId: number | null;
    maxCapacity: number | null;
  };

  export type IntakeMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    programId: number | null;
    startDate: Date | null;
    endDate: Date | null;
    applicationDeadline: Date | null;
    maxCapacity: number | null;
    status: $Enums.IntakeStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type IntakeMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    programId: number | null;
    startDate: Date | null;
    endDate: Date | null;
    applicationDeadline: Date | null;
    maxCapacity: number | null;
    status: $Enums.IntakeStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type IntakeCountAggregateOutputType = {
    id: number;
    name: number;
    programId: number;
    startDate: number;
    endDate: number;
    applicationDeadline: number;
    maxCapacity: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type IntakeAvgAggregateInputType = {
    id?: true;
    programId?: true;
    maxCapacity?: true;
  };

  export type IntakeSumAggregateInputType = {
    id?: true;
    programId?: true;
    maxCapacity?: true;
  };

  export type IntakeMinAggregateInputType = {
    id?: true;
    name?: true;
    programId?: true;
    startDate?: true;
    endDate?: true;
    applicationDeadline?: true;
    maxCapacity?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type IntakeMaxAggregateInputType = {
    id?: true;
    name?: true;
    programId?: true;
    startDate?: true;
    endDate?: true;
    applicationDeadline?: true;
    maxCapacity?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type IntakeCountAggregateInputType = {
    id?: true;
    name?: true;
    programId?: true;
    startDate?: true;
    endDate?: true;
    applicationDeadline?: true;
    maxCapacity?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type IntakeAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Intake to aggregate.
     */
    where?: IntakeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Intakes to fetch.
     */
    orderBy?: IntakeOrderByWithRelationInput | IntakeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: IntakeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Intakes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Intakes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Intakes
     **/
    _count?: true | IntakeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: IntakeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: IntakeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: IntakeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: IntakeMaxAggregateInputType;
  };

  export type GetIntakeAggregateType<T extends IntakeAggregateArgs> = {
    [P in keyof T & keyof AggregateIntake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntake[P]>
      : GetScalarType<T[P], AggregateIntake[P]>;
  };

  export type IntakeGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: IntakeWhereInput;
    orderBy?:
      | IntakeOrderByWithAggregationInput
      | IntakeOrderByWithAggregationInput[];
    by: IntakeScalarFieldEnum[] | IntakeScalarFieldEnum;
    having?: IntakeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IntakeCountAggregateInputType | true;
    _avg?: IntakeAvgAggregateInputType;
    _sum?: IntakeSumAggregateInputType;
    _min?: IntakeMinAggregateInputType;
    _max?: IntakeMaxAggregateInputType;
  };

  export type IntakeGroupByOutputType = {
    id: number;
    name: string;
    programId: number;
    startDate: Date;
    endDate: Date;
    applicationDeadline: Date;
    maxCapacity: number;
    status: $Enums.IntakeStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: IntakeCountAggregateOutputType | null;
    _avg: IntakeAvgAggregateOutputType | null;
    _sum: IntakeSumAggregateOutputType | null;
    _min: IntakeMinAggregateOutputType | null;
    _max: IntakeMaxAggregateOutputType | null;
  };

  type GetIntakeGroupByPayload<T extends IntakeGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<IntakeGroupByOutputType, T['by']> & {
          [P in keyof T & keyof IntakeGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntakeGroupByOutputType[P]>
            : GetScalarType<T[P], IntakeGroupByOutputType[P]>;
        }
      >
    >;

  export type IntakeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      programId?: boolean;
      startDate?: boolean;
      endDate?: boolean;
      applicationDeadline?: boolean;
      maxCapacity?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      program?: boolean | ProgramDefaultArgs<ExtArgs>;
      applicants?: boolean | Intake$applicantsArgs<ExtArgs>;
      feeStructures?: boolean | Intake$feeStructuresArgs<ExtArgs>;
      notices?: boolean | Intake$noticesArgs<ExtArgs>;
      _count?: boolean | IntakeCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['intake']
  >;

  export type IntakeSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      programId?: boolean;
      startDate?: boolean;
      endDate?: boolean;
      applicationDeadline?: boolean;
      maxCapacity?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      program?: boolean | ProgramDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['intake']
  >;

  export type IntakeSelectScalar = {
    id?: boolean;
    name?: boolean;
    programId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    applicationDeadline?: boolean;
    maxCapacity?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type IntakeInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>;
    applicants?: boolean | Intake$applicantsArgs<ExtArgs>;
    feeStructures?: boolean | Intake$feeStructuresArgs<ExtArgs>;
    notices?: boolean | Intake$noticesArgs<ExtArgs>;
    _count?: boolean | IntakeCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type IntakeIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>;
  };

  export type $IntakePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Intake';
    objects: {
      program: Prisma.$ProgramPayload<ExtArgs>;
      applicants: Prisma.$ApplicantPayload<ExtArgs>[];
      feeStructures: Prisma.$FeeStructurePayload<ExtArgs>[];
      notices: Prisma.$NoticePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        programId: number;
        startDate: Date;
        endDate: Date;
        applicationDeadline: Date;
        maxCapacity: number;
        status: $Enums.IntakeStatus;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['intake']
    >;
    composites: {};
  };

  type IntakeGetPayload<
    S extends boolean | null | undefined | IntakeDefaultArgs,
  > = $Result.GetResult<Prisma.$IntakePayload, S>;

  type IntakeCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<IntakeFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: IntakeCountAggregateInputType | true;
  };

  export interface IntakeDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Intake'];
      meta: { name: 'Intake' };
    };
    /**
     * Find zero or one Intake that matches the filter.
     * @param {IntakeFindUniqueArgs} args - Arguments to find a Intake
     * @example
     * // Get one Intake
     * const intake = await prisma.intake.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntakeFindUniqueArgs>(
      args: SelectSubset<T, IntakeFindUniqueArgs<ExtArgs>>,
    ): Prisma__IntakeClient<
      $Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Intake that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntakeFindUniqueOrThrowArgs} args - Arguments to find a Intake
     * @example
     * // Get one Intake
     * const intake = await prisma.intake.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntakeFindUniqueOrThrowArgs>(
      args: SelectSubset<T, IntakeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__IntakeClient<
      $Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Intake that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeFindFirstArgs} args - Arguments to find a Intake
     * @example
     * // Get one Intake
     * const intake = await prisma.intake.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntakeFindFirstArgs>(
      args?: SelectSubset<T, IntakeFindFirstArgs<ExtArgs>>,
    ): Prisma__IntakeClient<
      $Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Intake that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeFindFirstOrThrowArgs} args - Arguments to find a Intake
     * @example
     * // Get one Intake
     * const intake = await prisma.intake.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntakeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, IntakeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__IntakeClient<
      $Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Intakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Intakes
     * const intakes = await prisma.intake.findMany()
     *
     * // Get first 10 Intakes
     * const intakes = await prisma.intake.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const intakeWithIdOnly = await prisma.intake.findMany({ select: { id: true } })
     *
     */
    findMany<T extends IntakeFindManyArgs>(
      args?: SelectSubset<T, IntakeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Intake.
     * @param {IntakeCreateArgs} args - Arguments to create a Intake.
     * @example
     * // Create one Intake
     * const Intake = await prisma.intake.create({
     *   data: {
     *     // ... data to create a Intake
     *   }
     * })
     *
     */
    create<T extends IntakeCreateArgs>(
      args: SelectSubset<T, IntakeCreateArgs<ExtArgs>>,
    ): Prisma__IntakeClient<
      $Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Intakes.
     * @param {IntakeCreateManyArgs} args - Arguments to create many Intakes.
     * @example
     * // Create many Intakes
     * const intake = await prisma.intake.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends IntakeCreateManyArgs>(
      args?: SelectSubset<T, IntakeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Intakes and returns the data saved in the database.
     * @param {IntakeCreateManyAndReturnArgs} args - Arguments to create many Intakes.
     * @example
     * // Create many Intakes
     * const intake = await prisma.intake.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Intakes and only return the `id`
     * const intakeWithIdOnly = await prisma.intake.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends IntakeCreateManyAndReturnArgs>(
      args?: SelectSubset<T, IntakeCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$IntakePayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Intake.
     * @param {IntakeDeleteArgs} args - Arguments to delete one Intake.
     * @example
     * // Delete one Intake
     * const Intake = await prisma.intake.delete({
     *   where: {
     *     // ... filter to delete one Intake
     *   }
     * })
     *
     */
    delete<T extends IntakeDeleteArgs>(
      args: SelectSubset<T, IntakeDeleteArgs<ExtArgs>>,
    ): Prisma__IntakeClient<
      $Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Intake.
     * @param {IntakeUpdateArgs} args - Arguments to update one Intake.
     * @example
     * // Update one Intake
     * const intake = await prisma.intake.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends IntakeUpdateArgs>(
      args: SelectSubset<T, IntakeUpdateArgs<ExtArgs>>,
    ): Prisma__IntakeClient<
      $Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Intakes.
     * @param {IntakeDeleteManyArgs} args - Arguments to filter Intakes to delete.
     * @example
     * // Delete a few Intakes
     * const { count } = await prisma.intake.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends IntakeDeleteManyArgs>(
      args?: SelectSubset<T, IntakeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Intakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Intakes
     * const intake = await prisma.intake.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends IntakeUpdateManyArgs>(
      args: SelectSubset<T, IntakeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Intake.
     * @param {IntakeUpsertArgs} args - Arguments to update or create a Intake.
     * @example
     * // Update or create a Intake
     * const intake = await prisma.intake.upsert({
     *   create: {
     *     // ... data to create a Intake
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Intake we want to update
     *   }
     * })
     */
    upsert<T extends IntakeUpsertArgs>(
      args: SelectSubset<T, IntakeUpsertArgs<ExtArgs>>,
    ): Prisma__IntakeClient<
      $Result.GetResult<Prisma.$IntakePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Intakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeCountArgs} args - Arguments to filter Intakes to count.
     * @example
     * // Count the number of Intakes
     * const count = await prisma.intake.count({
     *   where: {
     *     // ... the filter for the Intakes we want to count
     *   }
     * })
     **/
    count<T extends IntakeCountArgs>(
      args?: Subset<T, IntakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntakeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Intake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends IntakeAggregateArgs>(
      args: Subset<T, IntakeAggregateArgs>,
    ): Prisma.PrismaPromise<GetIntakeAggregateType<T>>;

    /**
     * Group by Intake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends IntakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntakeGroupByArgs['orderBy'] }
        : { orderBy?: IntakeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, IntakeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetIntakeGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Intake model
     */
    readonly fields: IntakeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Intake.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntakeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    program<T extends ProgramDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProgramDefaultArgs<ExtArgs>>,
    ): Prisma__ProgramClient<
      | $Result.GetResult<
          Prisma.$ProgramPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    applicants<T extends Intake$applicantsArgs<ExtArgs> = {}>(
      args?: Subset<T, Intake$applicantsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    feeStructures<T extends Intake$feeStructuresArgs<ExtArgs> = {}>(
      args?: Subset<T, Intake$feeStructuresArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, 'findMany'>
      | Null
    >;
    notices<T extends Intake$noticesArgs<ExtArgs> = {}>(
      args?: Subset<T, Intake$noticesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, 'findMany'> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Intake model
   */
  interface IntakeFieldRefs {
    readonly id: FieldRef<'Intake', 'Int'>;
    readonly name: FieldRef<'Intake', 'String'>;
    readonly programId: FieldRef<'Intake', 'Int'>;
    readonly startDate: FieldRef<'Intake', 'DateTime'>;
    readonly endDate: FieldRef<'Intake', 'DateTime'>;
    readonly applicationDeadline: FieldRef<'Intake', 'DateTime'>;
    readonly maxCapacity: FieldRef<'Intake', 'Int'>;
    readonly status: FieldRef<'Intake', 'IntakeStatus'>;
    readonly createdAt: FieldRef<'Intake', 'DateTime'>;
    readonly updatedAt: FieldRef<'Intake', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Intake findUnique
   */
  export type IntakeFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null;
    /**
     * Filter, which Intake to fetch.
     */
    where: IntakeWhereUniqueInput;
  };

  /**
   * Intake findUniqueOrThrow
   */
  export type IntakeFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null;
    /**
     * Filter, which Intake to fetch.
     */
    where: IntakeWhereUniqueInput;
  };

  /**
   * Intake findFirst
   */
  export type IntakeFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null;
    /**
     * Filter, which Intake to fetch.
     */
    where?: IntakeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Intakes to fetch.
     */
    orderBy?: IntakeOrderByWithRelationInput | IntakeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Intakes.
     */
    cursor?: IntakeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Intakes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Intakes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Intakes.
     */
    distinct?: IntakeScalarFieldEnum | IntakeScalarFieldEnum[];
  };

  /**
   * Intake findFirstOrThrow
   */
  export type IntakeFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null;
    /**
     * Filter, which Intake to fetch.
     */
    where?: IntakeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Intakes to fetch.
     */
    orderBy?: IntakeOrderByWithRelationInput | IntakeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Intakes.
     */
    cursor?: IntakeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Intakes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Intakes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Intakes.
     */
    distinct?: IntakeScalarFieldEnum | IntakeScalarFieldEnum[];
  };

  /**
   * Intake findMany
   */
  export type IntakeFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null;
    /**
     * Filter, which Intakes to fetch.
     */
    where?: IntakeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Intakes to fetch.
     */
    orderBy?: IntakeOrderByWithRelationInput | IntakeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Intakes.
     */
    cursor?: IntakeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Intakes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Intakes.
     */
    skip?: number;
    distinct?: IntakeScalarFieldEnum | IntakeScalarFieldEnum[];
  };

  /**
   * Intake create
   */
  export type IntakeCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null;
    /**
     * The data needed to create a Intake.
     */
    data: XOR<IntakeCreateInput, IntakeUncheckedCreateInput>;
  };

  /**
   * Intake createMany
   */
  export type IntakeCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Intakes.
     */
    data: IntakeCreateManyInput | IntakeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Intake createManyAndReturn
   */
  export type IntakeCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Intakes.
     */
    data: IntakeCreateManyInput | IntakeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Intake update
   */
  export type IntakeUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null;
    /**
     * The data needed to update a Intake.
     */
    data: XOR<IntakeUpdateInput, IntakeUncheckedUpdateInput>;
    /**
     * Choose, which Intake to update.
     */
    where: IntakeWhereUniqueInput;
  };

  /**
   * Intake updateMany
   */
  export type IntakeUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Intakes.
     */
    data: XOR<IntakeUpdateManyMutationInput, IntakeUncheckedUpdateManyInput>;
    /**
     * Filter which Intakes to update
     */
    where?: IntakeWhereInput;
  };

  /**
   * Intake upsert
   */
  export type IntakeUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null;
    /**
     * The filter to search for the Intake to update in case it exists.
     */
    where: IntakeWhereUniqueInput;
    /**
     * In case the Intake found by the `where` argument doesn't exist, create a new Intake with this data.
     */
    create: XOR<IntakeCreateInput, IntakeUncheckedCreateInput>;
    /**
     * In case the Intake was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntakeUpdateInput, IntakeUncheckedUpdateInput>;
  };

  /**
   * Intake delete
   */
  export type IntakeDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null;
    /**
     * Filter which Intake to delete.
     */
    where: IntakeWhereUniqueInput;
  };

  /**
   * Intake deleteMany
   */
  export type IntakeDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Intakes to delete
     */
    where?: IntakeWhereInput;
  };

  /**
   * Intake.applicants
   */
  export type Intake$applicantsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    where?: ApplicantWhereInput;
    orderBy?:
      | ApplicantOrderByWithRelationInput
      | ApplicantOrderByWithRelationInput[];
    cursor?: ApplicantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * Intake.feeStructures
   */
  export type Intake$feeStructuresArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null;
    where?: FeeStructureWhereInput;
    orderBy?:
      | FeeStructureOrderByWithRelationInput
      | FeeStructureOrderByWithRelationInput[];
    cursor?: FeeStructureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FeeStructureScalarFieldEnum | FeeStructureScalarFieldEnum[];
  };

  /**
   * Intake.notices
   */
  export type Intake$noticesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null;
    where?: NoticeWhereInput;
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[];
    cursor?: NoticeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[];
  };

  /**
   * Intake without action
   */
  export type IntakeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null;
  };

  /**
   * Model Applicant
   */

  export type AggregateApplicant = {
    _count: ApplicantCountAggregateOutputType | null;
    _avg: ApplicantAvgAggregateOutputType | null;
    _sum: ApplicantSumAggregateOutputType | null;
    _min: ApplicantMinAggregateOutputType | null;
    _max: ApplicantMaxAggregateOutputType | null;
  };

  export type ApplicantAvgAggregateOutputType = {
    id: number | null;
    intakeId: number | null;
    programId: number | null;
    userId: number | null;
  };

  export type ApplicantSumAggregateOutputType = {
    id: number | null;
    intakeId: number | null;
    programId: number | null;
    userId: number | null;
  };

  export type ApplicantMinAggregateOutputType = {
    id: number | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    dateOfBirth: Date | null;
    address: string | null;
    nationality: string | null;
    previousEdu: string | null;
    intakeId: number | null;
    programId: number | null;
    status: $Enums.ApplicantStatus | null;
    rejectionNote: string | null;
    submittedAt: Date | null;
    userId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ApplicantMaxAggregateOutputType = {
    id: number | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    dateOfBirth: Date | null;
    address: string | null;
    nationality: string | null;
    previousEdu: string | null;
    intakeId: number | null;
    programId: number | null;
    status: $Enums.ApplicantStatus | null;
    rejectionNote: string | null;
    submittedAt: Date | null;
    userId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ApplicantCountAggregateOutputType = {
    id: number;
    firstName: number;
    lastName: number;
    email: number;
    phone: number;
    dateOfBirth: number;
    address: number;
    nationality: number;
    previousEdu: number;
    intakeId: number;
    programId: number;
    status: number;
    rejectionNote: number;
    submittedAt: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ApplicantAvgAggregateInputType = {
    id?: true;
    intakeId?: true;
    programId?: true;
    userId?: true;
  };

  export type ApplicantSumAggregateInputType = {
    id?: true;
    intakeId?: true;
    programId?: true;
    userId?: true;
  };

  export type ApplicantMinAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phone?: true;
    dateOfBirth?: true;
    address?: true;
    nationality?: true;
    previousEdu?: true;
    intakeId?: true;
    programId?: true;
    status?: true;
    rejectionNote?: true;
    submittedAt?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ApplicantMaxAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phone?: true;
    dateOfBirth?: true;
    address?: true;
    nationality?: true;
    previousEdu?: true;
    intakeId?: true;
    programId?: true;
    status?: true;
    rejectionNote?: true;
    submittedAt?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ApplicantCountAggregateInputType = {
    id?: true;
    firstName?: true;
    lastName?: true;
    email?: true;
    phone?: true;
    dateOfBirth?: true;
    address?: true;
    nationality?: true;
    previousEdu?: true;
    intakeId?: true;
    programId?: true;
    status?: true;
    rejectionNote?: true;
    submittedAt?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ApplicantAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Applicant to aggregate.
     */
    where?: ApplicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applicants to fetch.
     */
    orderBy?:
      | ApplicantOrderByWithRelationInput
      | ApplicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ApplicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Applicants
     **/
    _count?: true | ApplicantCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ApplicantAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ApplicantSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ApplicantMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ApplicantMaxAggregateInputType;
  };

  export type GetApplicantAggregateType<T extends ApplicantAggregateArgs> = {
    [P in keyof T & keyof AggregateApplicant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicant[P]>
      : GetScalarType<T[P], AggregateApplicant[P]>;
  };

  export type ApplicantGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ApplicantWhereInput;
    orderBy?:
      | ApplicantOrderByWithAggregationInput
      | ApplicantOrderByWithAggregationInput[];
    by: ApplicantScalarFieldEnum[] | ApplicantScalarFieldEnum;
    having?: ApplicantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApplicantCountAggregateInputType | true;
    _avg?: ApplicantAvgAggregateInputType;
    _sum?: ApplicantSumAggregateInputType;
    _min?: ApplicantMinAggregateInputType;
    _max?: ApplicantMaxAggregateInputType;
  };

  export type ApplicantGroupByOutputType = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: Date | null;
    address: string | null;
    nationality: string | null;
    previousEdu: string | null;
    intakeId: number;
    programId: number;
    status: $Enums.ApplicantStatus;
    rejectionNote: string | null;
    submittedAt: Date;
    userId: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ApplicantCountAggregateOutputType | null;
    _avg: ApplicantAvgAggregateOutputType | null;
    _sum: ApplicantSumAggregateOutputType | null;
    _min: ApplicantMinAggregateOutputType | null;
    _max: ApplicantMaxAggregateOutputType | null;
  };

  type GetApplicantGroupByPayload<T extends ApplicantGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ApplicantGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ApplicantGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicantGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicantGroupByOutputType[P]>;
        }
      >
    >;

  export type ApplicantSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      email?: boolean;
      phone?: boolean;
      dateOfBirth?: boolean;
      address?: boolean;
      nationality?: boolean;
      previousEdu?: boolean;
      intakeId?: boolean;
      programId?: boolean;
      status?: boolean;
      rejectionNote?: boolean;
      submittedAt?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      intake?: boolean | IntakeDefaultArgs<ExtArgs>;
      program?: boolean | ProgramDefaultArgs<ExtArgs>;
      student?: boolean | Applicant$studentArgs<ExtArgs>;
      user?: boolean | Applicant$userArgs<ExtArgs>;
    },
    ExtArgs['result']['applicant']
  >;

  export type ApplicantSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      email?: boolean;
      phone?: boolean;
      dateOfBirth?: boolean;
      address?: boolean;
      nationality?: boolean;
      previousEdu?: boolean;
      intakeId?: boolean;
      programId?: boolean;
      status?: boolean;
      rejectionNote?: boolean;
      submittedAt?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      intake?: boolean | IntakeDefaultArgs<ExtArgs>;
      program?: boolean | ProgramDefaultArgs<ExtArgs>;
      user?: boolean | Applicant$userArgs<ExtArgs>;
    },
    ExtArgs['result']['applicant']
  >;

  export type ApplicantSelectScalar = {
    id?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    phone?: boolean;
    dateOfBirth?: boolean;
    address?: boolean;
    nationality?: boolean;
    previousEdu?: boolean;
    intakeId?: boolean;
    programId?: boolean;
    status?: boolean;
    rejectionNote?: boolean;
    submittedAt?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ApplicantInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    intake?: boolean | IntakeDefaultArgs<ExtArgs>;
    program?: boolean | ProgramDefaultArgs<ExtArgs>;
    student?: boolean | Applicant$studentArgs<ExtArgs>;
    user?: boolean | Applicant$userArgs<ExtArgs>;
  };
  export type ApplicantIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    intake?: boolean | IntakeDefaultArgs<ExtArgs>;
    program?: boolean | ProgramDefaultArgs<ExtArgs>;
    user?: boolean | Applicant$userArgs<ExtArgs>;
  };

  export type $ApplicantPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Applicant';
    objects: {
      intake: Prisma.$IntakePayload<ExtArgs>;
      program: Prisma.$ProgramPayload<ExtArgs>;
      student: Prisma.$StudentPayload<ExtArgs> | null;
      user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        dateOfBirth: Date | null;
        address: string | null;
        nationality: string | null;
        previousEdu: string | null;
        intakeId: number;
        programId: number;
        status: $Enums.ApplicantStatus;
        rejectionNote: string | null;
        submittedAt: Date;
        userId: number | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['applicant']
    >;
    composites: {};
  };

  type ApplicantGetPayload<
    S extends boolean | null | undefined | ApplicantDefaultArgs,
  > = $Result.GetResult<Prisma.$ApplicantPayload, S>;

  type ApplicantCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ApplicantFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: ApplicantCountAggregateInputType | true;
  };

  export interface ApplicantDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Applicant'];
      meta: { name: 'Applicant' };
    };
    /**
     * Find zero or one Applicant that matches the filter.
     * @param {ApplicantFindUniqueArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicantFindUniqueArgs>(
      args: SelectSubset<T, ApplicantFindUniqueArgs<ExtArgs>>,
    ): Prisma__ApplicantClient<
      $Result.GetResult<
        Prisma.$ApplicantPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Applicant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicantFindUniqueOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicantFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ApplicantFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ApplicantClient<
      $Result.GetResult<
        Prisma.$ApplicantPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Applicant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindFirstArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicantFindFirstArgs>(
      args?: SelectSubset<T, ApplicantFindFirstArgs<ExtArgs>>,
    ): Prisma__ApplicantClient<
      $Result.GetResult<
        Prisma.$ApplicantPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Applicant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindFirstOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicantFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ApplicantFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ApplicantClient<
      $Result.GetResult<
        Prisma.$ApplicantPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applicants
     * const applicants = await prisma.applicant.findMany()
     *
     * // Get first 10 Applicants
     * const applicants = await prisma.applicant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const applicantWithIdOnly = await prisma.applicant.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ApplicantFindManyArgs>(
      args?: SelectSubset<T, ApplicantFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Applicant.
     * @param {ApplicantCreateArgs} args - Arguments to create a Applicant.
     * @example
     * // Create one Applicant
     * const Applicant = await prisma.applicant.create({
     *   data: {
     *     // ... data to create a Applicant
     *   }
     * })
     *
     */
    create<T extends ApplicantCreateArgs>(
      args: SelectSubset<T, ApplicantCreateArgs<ExtArgs>>,
    ): Prisma__ApplicantClient<
      $Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Applicants.
     * @param {ApplicantCreateManyArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicant = await prisma.applicant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ApplicantCreateManyArgs>(
      args?: SelectSubset<T, ApplicantCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Applicants and returns the data saved in the database.
     * @param {ApplicantCreateManyAndReturnArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicant = await prisma.applicant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Applicants and only return the `id`
     * const applicantWithIdOnly = await prisma.applicant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ApplicantCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ApplicantCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ApplicantPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Applicant.
     * @param {ApplicantDeleteArgs} args - Arguments to delete one Applicant.
     * @example
     * // Delete one Applicant
     * const Applicant = await prisma.applicant.delete({
     *   where: {
     *     // ... filter to delete one Applicant
     *   }
     * })
     *
     */
    delete<T extends ApplicantDeleteArgs>(
      args: SelectSubset<T, ApplicantDeleteArgs<ExtArgs>>,
    ): Prisma__ApplicantClient<
      $Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Applicant.
     * @param {ApplicantUpdateArgs} args - Arguments to update one Applicant.
     * @example
     * // Update one Applicant
     * const applicant = await prisma.applicant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ApplicantUpdateArgs>(
      args: SelectSubset<T, ApplicantUpdateArgs<ExtArgs>>,
    ): Prisma__ApplicantClient<
      $Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Applicants.
     * @param {ApplicantDeleteManyArgs} args - Arguments to filter Applicants to delete.
     * @example
     * // Delete a few Applicants
     * const { count } = await prisma.applicant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ApplicantDeleteManyArgs>(
      args?: SelectSubset<T, ApplicantDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applicants
     * const applicant = await prisma.applicant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ApplicantUpdateManyArgs>(
      args: SelectSubset<T, ApplicantUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Applicant.
     * @param {ApplicantUpsertArgs} args - Arguments to update or create a Applicant.
     * @example
     * // Update or create a Applicant
     * const applicant = await prisma.applicant.upsert({
     *   create: {
     *     // ... data to create a Applicant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applicant we want to update
     *   }
     * })
     */
    upsert<T extends ApplicantUpsertArgs>(
      args: SelectSubset<T, ApplicantUpsertArgs<ExtArgs>>,
    ): Prisma__ApplicantClient<
      $Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantCountArgs} args - Arguments to filter Applicants to count.
     * @example
     * // Count the number of Applicants
     * const count = await prisma.applicant.count({
     *   where: {
     *     // ... the filter for the Applicants we want to count
     *   }
     * })
     **/
    count<T extends ApplicantCountArgs>(
      args?: Subset<T, ApplicantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicantCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ApplicantAggregateArgs>(
      args: Subset<T, ApplicantAggregateArgs>,
    ): Prisma.PrismaPromise<GetApplicantAggregateType<T>>;

    /**
     * Group by Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ApplicantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicantGroupByArgs['orderBy'] }
        : { orderBy?: ApplicantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ApplicantGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetApplicantGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Applicant model
     */
    readonly fields: ApplicantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Applicant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicantClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    intake<T extends IntakeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, IntakeDefaultArgs<ExtArgs>>,
    ): Prisma__IntakeClient<
      | $Result.GetResult<
          Prisma.$IntakePayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    program<T extends ProgramDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProgramDefaultArgs<ExtArgs>>,
    ): Prisma__ProgramClient<
      | $Result.GetResult<
          Prisma.$ProgramPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    student<T extends Applicant$studentArgs<ExtArgs> = {}>(
      args?: Subset<T, Applicant$studentArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<
        Prisma.$StudentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;
    user<T extends Applicant$userArgs<ExtArgs> = {}>(
      args?: Subset<T, Applicant$userArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Applicant model
   */
  interface ApplicantFieldRefs {
    readonly id: FieldRef<'Applicant', 'Int'>;
    readonly firstName: FieldRef<'Applicant', 'String'>;
    readonly lastName: FieldRef<'Applicant', 'String'>;
    readonly email: FieldRef<'Applicant', 'String'>;
    readonly phone: FieldRef<'Applicant', 'String'>;
    readonly dateOfBirth: FieldRef<'Applicant', 'DateTime'>;
    readonly address: FieldRef<'Applicant', 'String'>;
    readonly nationality: FieldRef<'Applicant', 'String'>;
    readonly previousEdu: FieldRef<'Applicant', 'String'>;
    readonly intakeId: FieldRef<'Applicant', 'Int'>;
    readonly programId: FieldRef<'Applicant', 'Int'>;
    readonly status: FieldRef<'Applicant', 'ApplicantStatus'>;
    readonly rejectionNote: FieldRef<'Applicant', 'String'>;
    readonly submittedAt: FieldRef<'Applicant', 'DateTime'>;
    readonly userId: FieldRef<'Applicant', 'Int'>;
    readonly createdAt: FieldRef<'Applicant', 'DateTime'>;
    readonly updatedAt: FieldRef<'Applicant', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Applicant findUnique
   */
  export type ApplicantFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * Filter, which Applicant to fetch.
     */
    where: ApplicantWhereUniqueInput;
  };

  /**
   * Applicant findUniqueOrThrow
   */
  export type ApplicantFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * Filter, which Applicant to fetch.
     */
    where: ApplicantWhereUniqueInput;
  };

  /**
   * Applicant findFirst
   */
  export type ApplicantFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * Filter, which Applicant to fetch.
     */
    where?: ApplicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applicants to fetch.
     */
    orderBy?:
      | ApplicantOrderByWithRelationInput
      | ApplicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Applicants.
     */
    cursor?: ApplicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * Applicant findFirstOrThrow
   */
  export type ApplicantFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * Filter, which Applicant to fetch.
     */
    where?: ApplicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applicants to fetch.
     */
    orderBy?:
      | ApplicantOrderByWithRelationInput
      | ApplicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Applicants.
     */
    cursor?: ApplicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * Applicant findMany
   */
  export type ApplicantFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * Filter, which Applicants to fetch.
     */
    where?: ApplicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applicants to fetch.
     */
    orderBy?:
      | ApplicantOrderByWithRelationInput
      | ApplicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Applicants.
     */
    cursor?: ApplicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applicants.
     */
    skip?: number;
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * Applicant create
   */
  export type ApplicantCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * The data needed to create a Applicant.
     */
    data: XOR<ApplicantCreateInput, ApplicantUncheckedCreateInput>;
  };

  /**
   * Applicant createMany
   */
  export type ApplicantCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Applicants.
     */
    data: ApplicantCreateManyInput | ApplicantCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Applicant createManyAndReturn
   */
  export type ApplicantCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Applicants.
     */
    data: ApplicantCreateManyInput | ApplicantCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Applicant update
   */
  export type ApplicantUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * The data needed to update a Applicant.
     */
    data: XOR<ApplicantUpdateInput, ApplicantUncheckedUpdateInput>;
    /**
     * Choose, which Applicant to update.
     */
    where: ApplicantWhereUniqueInput;
  };

  /**
   * Applicant updateMany
   */
  export type ApplicantUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Applicants.
     */
    data: XOR<
      ApplicantUpdateManyMutationInput,
      ApplicantUncheckedUpdateManyInput
    >;
    /**
     * Filter which Applicants to update
     */
    where?: ApplicantWhereInput;
  };

  /**
   * Applicant upsert
   */
  export type ApplicantUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * The filter to search for the Applicant to update in case it exists.
     */
    where: ApplicantWhereUniqueInput;
    /**
     * In case the Applicant found by the `where` argument doesn't exist, create a new Applicant with this data.
     */
    create: XOR<ApplicantCreateInput, ApplicantUncheckedCreateInput>;
    /**
     * In case the Applicant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicantUpdateInput, ApplicantUncheckedUpdateInput>;
  };

  /**
   * Applicant delete
   */
  export type ApplicantDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
    /**
     * Filter which Applicant to delete.
     */
    where: ApplicantWhereUniqueInput;
  };

  /**
   * Applicant deleteMany
   */
  export type ApplicantDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Applicants to delete
     */
    where?: ApplicantWhereInput;
  };

  /**
   * Applicant.student
   */
  export type Applicant$studentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    where?: StudentWhereInput;
  };

  /**
   * Applicant.user
   */
  export type Applicant$userArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
  };

  /**
   * Applicant without action
   */
  export type ApplicantDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null;
  };

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null;
    _avg: StudentAvgAggregateOutputType | null;
    _sum: StudentSumAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
  };

  export type StudentAvgAggregateOutputType = {
    id: number | null;
    applicantId: number | null;
    userId: number | null;
  };

  export type StudentSumAggregateOutputType = {
    id: number | null;
    applicantId: number | null;
    userId: number | null;
  };

  export type StudentMinAggregateOutputType = {
    id: number | null;
    studentId: string | null;
    applicantId: number | null;
    userId: number | null;
    enrolledAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type StudentMaxAggregateOutputType = {
    id: number | null;
    studentId: string | null;
    applicantId: number | null;
    userId: number | null;
    enrolledAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type StudentCountAggregateOutputType = {
    id: number;
    studentId: number;
    applicantId: number;
    userId: number;
    enrolledAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type StudentAvgAggregateInputType = {
    id?: true;
    applicantId?: true;
    userId?: true;
  };

  export type StudentSumAggregateInputType = {
    id?: true;
    applicantId?: true;
    userId?: true;
  };

  export type StudentMinAggregateInputType = {
    id?: true;
    studentId?: true;
    applicantId?: true;
    userId?: true;
    enrolledAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type StudentMaxAggregateInputType = {
    id?: true;
    studentId?: true;
    applicantId?: true;
    userId?: true;
    enrolledAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type StudentCountAggregateInputType = {
    id?: true;
    studentId?: true;
    applicantId?: true;
    userId?: true;
    enrolledAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type StudentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Students to fetch.
     */
    orderBy?:
      | StudentOrderByWithRelationInput
      | StudentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Students
     **/
    _count?: true | StudentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: StudentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: StudentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: StudentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: StudentMaxAggregateInputType;
  };

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
    [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>;
  };

  export type StudentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: StudentWhereInput;
    orderBy?:
      | StudentOrderByWithAggregationInput
      | StudentOrderByWithAggregationInput[];
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum;
    having?: StudentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentCountAggregateInputType | true;
    _avg?: StudentAvgAggregateInputType;
    _sum?: StudentSumAggregateInputType;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
  };

  export type StudentGroupByOutputType = {
    id: number;
    studentId: string;
    applicantId: number;
    userId: number;
    enrolledAt: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: StudentCountAggregateOutputType | null;
    _avg: StudentAvgAggregateOutputType | null;
    _sum: StudentSumAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
  };

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<StudentGroupByOutputType, T['by']> & {
          [P in keyof T & keyof StudentGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>;
        }
      >
    >;

  export type StudentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      studentId?: boolean;
      applicantId?: boolean;
      userId?: boolean;
      enrolledAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      applicant?: boolean | ApplicantDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      invoices?: boolean | Student$invoicesArgs<ExtArgs>;
      _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['student']
  >;

  export type StudentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      studentId?: boolean;
      applicantId?: boolean;
      userId?: boolean;
      enrolledAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      applicant?: boolean | ApplicantDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['student']
  >;

  export type StudentSelectScalar = {
    id?: boolean;
    studentId?: boolean;
    applicantId?: boolean;
    userId?: boolean;
    enrolledAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type StudentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
    invoices?: boolean | Student$invoicesArgs<ExtArgs>;
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type StudentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $StudentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Student';
    objects: {
      applicant: Prisma.$ApplicantPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
      invoices: Prisma.$InvoicePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        studentId: string;
        applicantId: number;
        userId: number;
        enrolledAt: Date;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['student']
    >;
    composites: {};
  };

  type StudentGetPayload<
    S extends boolean | null | undefined | StudentDefaultArgs,
  > = $Result.GetResult<Prisma.$StudentPayload, S>;

  type StudentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: StudentCountAggregateInputType | true;
  };

  export interface StudentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Student'];
      meta: { name: 'Student' };
    };
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(
      args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<
        Prisma.$StudentPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<
        Prisma.$StudentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(
      args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     *
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StudentFindManyArgs>(
      args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     *
     */
    create<T extends StudentCreateArgs>(
      args: SelectSubset<T, StudentCreateArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StudentCreateManyArgs>(
      args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StudentPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     *
     */
    delete<T extends StudentDeleteArgs>(
      args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StudentUpdateArgs>(
      args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StudentDeleteManyArgs>(
      args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StudentUpdateManyArgs>(
      args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(
      args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      $Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
     **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends StudentAggregateArgs>(
      args: Subset<T, StudentAggregateArgs>,
    ): Prisma.PrismaPromise<GetStudentAggregateType<T>>;

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetStudentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Student model
     */
    readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    applicant<T extends ApplicantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ApplicantDefaultArgs<ExtArgs>>,
    ): Prisma__ApplicantClient<
      | $Result.GetResult<
          Prisma.$ApplicantPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    invoices<T extends Student$invoicesArgs<ExtArgs> = {}>(
      args?: Subset<T, Student$invoicesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'findMany'> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<'Student', 'Int'>;
    readonly studentId: FieldRef<'Student', 'String'>;
    readonly applicantId: FieldRef<'Student', 'Int'>;
    readonly userId: FieldRef<'Student', 'Int'>;
    readonly enrolledAt: FieldRef<'Student', 'DateTime'>;
    readonly createdAt: FieldRef<'Student', 'DateTime'>;
    readonly updatedAt: FieldRef<'Student', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput;
  };

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput;
  };

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Students to fetch.
     */
    orderBy?:
      | StudentOrderByWithRelationInput
      | StudentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Students to fetch.
     */
    orderBy?:
      | StudentOrderByWithRelationInput
      | StudentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Students to fetch.
     */
    orderBy?:
      | StudentOrderByWithRelationInput
      | StudentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Students.
     */
    skip?: number;
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * Student create
   */
  export type StudentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>;
  };

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Student update
   */
  export type StudentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>;
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput;
  };

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>;
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput;
  };

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput;
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>;
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>;
  };

  /**
   * Student delete
   */
  export type StudentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput;
  };

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput;
  };

  /**
   * Student.invoices
   */
  export type Student$invoicesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null;
    where?: InvoiceWhereInput;
    orderBy?:
      | InvoiceOrderByWithRelationInput
      | InvoiceOrderByWithRelationInput[];
    cursor?: InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[];
  };

  /**
   * Student without action
   */
  export type StudentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null;
  };

  /**
   * Model FeeStructure
   */

  export type AggregateFeeStructure = {
    _count: FeeStructureCountAggregateOutputType | null;
    _avg: FeeStructureAvgAggregateOutputType | null;
    _sum: FeeStructureSumAggregateOutputType | null;
    _min: FeeStructureMinAggregateOutputType | null;
    _max: FeeStructureMaxAggregateOutputType | null;
  };

  export type FeeStructureAvgAggregateOutputType = {
    id: number | null;
    amount: number | null;
    programId: number | null;
    intakeId: number | null;
  };

  export type FeeStructureSumAggregateOutputType = {
    id: number | null;
    amount: number | null;
    programId: number | null;
    intakeId: number | null;
  };

  export type FeeStructureMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    amount: number | null;
    currency: string | null;
    programId: number | null;
    intakeId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type FeeStructureMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    amount: number | null;
    currency: string | null;
    programId: number | null;
    intakeId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type FeeStructureCountAggregateOutputType = {
    id: number;
    name: number;
    amount: number;
    currency: number;
    programId: number;
    intakeId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type FeeStructureAvgAggregateInputType = {
    id?: true;
    amount?: true;
    programId?: true;
    intakeId?: true;
  };

  export type FeeStructureSumAggregateInputType = {
    id?: true;
    amount?: true;
    programId?: true;
    intakeId?: true;
  };

  export type FeeStructureMinAggregateInputType = {
    id?: true;
    name?: true;
    amount?: true;
    currency?: true;
    programId?: true;
    intakeId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type FeeStructureMaxAggregateInputType = {
    id?: true;
    name?: true;
    amount?: true;
    currency?: true;
    programId?: true;
    intakeId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type FeeStructureCountAggregateInputType = {
    id?: true;
    name?: true;
    amount?: true;
    currency?: true;
    programId?: true;
    intakeId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type FeeStructureAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which FeeStructure to aggregate.
     */
    where?: FeeStructureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeeStructures to fetch.
     */
    orderBy?:
      | FeeStructureOrderByWithRelationInput
      | FeeStructureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FeeStructureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeeStructures from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeeStructures.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FeeStructures
     **/
    _count?: true | FeeStructureCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FeeStructureAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FeeStructureSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FeeStructureMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FeeStructureMaxAggregateInputType;
  };

  export type GetFeeStructureAggregateType<
    T extends FeeStructureAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateFeeStructure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeeStructure[P]>
      : GetScalarType<T[P], AggregateFeeStructure[P]>;
  };

  export type FeeStructureGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FeeStructureWhereInput;
    orderBy?:
      | FeeStructureOrderByWithAggregationInput
      | FeeStructureOrderByWithAggregationInput[];
    by: FeeStructureScalarFieldEnum[] | FeeStructureScalarFieldEnum;
    having?: FeeStructureScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeeStructureCountAggregateInputType | true;
    _avg?: FeeStructureAvgAggregateInputType;
    _sum?: FeeStructureSumAggregateInputType;
    _min?: FeeStructureMinAggregateInputType;
    _max?: FeeStructureMaxAggregateInputType;
  };

  export type FeeStructureGroupByOutputType = {
    id: number;
    name: string;
    amount: number;
    currency: string;
    programId: number;
    intakeId: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: FeeStructureCountAggregateOutputType | null;
    _avg: FeeStructureAvgAggregateOutputType | null;
    _sum: FeeStructureSumAggregateOutputType | null;
    _min: FeeStructureMinAggregateOutputType | null;
    _max: FeeStructureMaxAggregateOutputType | null;
  };

  type GetFeeStructureGroupByPayload<T extends FeeStructureGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<FeeStructureGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof FeeStructureGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeeStructureGroupByOutputType[P]>
            : GetScalarType<T[P], FeeStructureGroupByOutputType[P]>;
        }
      >
    >;

  export type FeeStructureSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      amount?: boolean;
      currency?: boolean;
      programId?: boolean;
      intakeId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      program?: boolean | ProgramDefaultArgs<ExtArgs>;
      intake?: boolean | FeeStructure$intakeArgs<ExtArgs>;
      invoices?: boolean | FeeStructure$invoicesArgs<ExtArgs>;
      _count?: boolean | FeeStructureCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['feeStructure']
  >;

  export type FeeStructureSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      amount?: boolean;
      currency?: boolean;
      programId?: boolean;
      intakeId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      program?: boolean | ProgramDefaultArgs<ExtArgs>;
      intake?: boolean | FeeStructure$intakeArgs<ExtArgs>;
    },
    ExtArgs['result']['feeStructure']
  >;

  export type FeeStructureSelectScalar = {
    id?: boolean;
    name?: boolean;
    amount?: boolean;
    currency?: boolean;
    programId?: boolean;
    intakeId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type FeeStructureInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>;
    intake?: boolean | FeeStructure$intakeArgs<ExtArgs>;
    invoices?: boolean | FeeStructure$invoicesArgs<ExtArgs>;
    _count?: boolean | FeeStructureCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type FeeStructureIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>;
    intake?: boolean | FeeStructure$intakeArgs<ExtArgs>;
  };

  export type $FeeStructurePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'FeeStructure';
    objects: {
      program: Prisma.$ProgramPayload<ExtArgs>;
      intake: Prisma.$IntakePayload<ExtArgs> | null;
      invoices: Prisma.$InvoicePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        amount: number;
        currency: string;
        programId: number;
        intakeId: number | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['feeStructure']
    >;
    composites: {};
  };

  type FeeStructureGetPayload<
    S extends boolean | null | undefined | FeeStructureDefaultArgs,
  > = $Result.GetResult<Prisma.$FeeStructurePayload, S>;

  type FeeStructureCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<FeeStructureFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: FeeStructureCountAggregateInputType | true;
  };

  export interface FeeStructureDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['FeeStructure'];
      meta: { name: 'FeeStructure' };
    };
    /**
     * Find zero or one FeeStructure that matches the filter.
     * @param {FeeStructureFindUniqueArgs} args - Arguments to find a FeeStructure
     * @example
     * // Get one FeeStructure
     * const feeStructure = await prisma.feeStructure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeeStructureFindUniqueArgs>(
      args: SelectSubset<T, FeeStructureFindUniqueArgs<ExtArgs>>,
    ): Prisma__FeeStructureClient<
      $Result.GetResult<
        Prisma.$FeeStructurePayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one FeeStructure that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeeStructureFindUniqueOrThrowArgs} args - Arguments to find a FeeStructure
     * @example
     * // Get one FeeStructure
     * const feeStructure = await prisma.feeStructure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeeStructureFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FeeStructureFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__FeeStructureClient<
      $Result.GetResult<
        Prisma.$FeeStructurePayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first FeeStructure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeStructureFindFirstArgs} args - Arguments to find a FeeStructure
     * @example
     * // Get one FeeStructure
     * const feeStructure = await prisma.feeStructure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeeStructureFindFirstArgs>(
      args?: SelectSubset<T, FeeStructureFindFirstArgs<ExtArgs>>,
    ): Prisma__FeeStructureClient<
      $Result.GetResult<
        Prisma.$FeeStructurePayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first FeeStructure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeStructureFindFirstOrThrowArgs} args - Arguments to find a FeeStructure
     * @example
     * // Get one FeeStructure
     * const feeStructure = await prisma.feeStructure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeeStructureFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FeeStructureFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__FeeStructureClient<
      $Result.GetResult<
        Prisma.$FeeStructurePayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more FeeStructures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeStructureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeeStructures
     * const feeStructures = await prisma.feeStructure.findMany()
     *
     * // Get first 10 FeeStructures
     * const feeStructures = await prisma.feeStructure.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const feeStructureWithIdOnly = await prisma.feeStructure.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FeeStructureFindManyArgs>(
      args?: SelectSubset<T, FeeStructureFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a FeeStructure.
     * @param {FeeStructureCreateArgs} args - Arguments to create a FeeStructure.
     * @example
     * // Create one FeeStructure
     * const FeeStructure = await prisma.feeStructure.create({
     *   data: {
     *     // ... data to create a FeeStructure
     *   }
     * })
     *
     */
    create<T extends FeeStructureCreateArgs>(
      args: SelectSubset<T, FeeStructureCreateArgs<ExtArgs>>,
    ): Prisma__FeeStructureClient<
      $Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many FeeStructures.
     * @param {FeeStructureCreateManyArgs} args - Arguments to create many FeeStructures.
     * @example
     * // Create many FeeStructures
     * const feeStructure = await prisma.feeStructure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FeeStructureCreateManyArgs>(
      args?: SelectSubset<T, FeeStructureCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many FeeStructures and returns the data saved in the database.
     * @param {FeeStructureCreateManyAndReturnArgs} args - Arguments to create many FeeStructures.
     * @example
     * // Create many FeeStructures
     * const feeStructure = await prisma.feeStructure.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FeeStructures and only return the `id`
     * const feeStructureWithIdOnly = await prisma.feeStructure.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FeeStructureCreateManyAndReturnArgs>(
      args?: SelectSubset<T, FeeStructureCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FeeStructurePayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a FeeStructure.
     * @param {FeeStructureDeleteArgs} args - Arguments to delete one FeeStructure.
     * @example
     * // Delete one FeeStructure
     * const FeeStructure = await prisma.feeStructure.delete({
     *   where: {
     *     // ... filter to delete one FeeStructure
     *   }
     * })
     *
     */
    delete<T extends FeeStructureDeleteArgs>(
      args: SelectSubset<T, FeeStructureDeleteArgs<ExtArgs>>,
    ): Prisma__FeeStructureClient<
      $Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one FeeStructure.
     * @param {FeeStructureUpdateArgs} args - Arguments to update one FeeStructure.
     * @example
     * // Update one FeeStructure
     * const feeStructure = await prisma.feeStructure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FeeStructureUpdateArgs>(
      args: SelectSubset<T, FeeStructureUpdateArgs<ExtArgs>>,
    ): Prisma__FeeStructureClient<
      $Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more FeeStructures.
     * @param {FeeStructureDeleteManyArgs} args - Arguments to filter FeeStructures to delete.
     * @example
     * // Delete a few FeeStructures
     * const { count } = await prisma.feeStructure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FeeStructureDeleteManyArgs>(
      args?: SelectSubset<T, FeeStructureDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more FeeStructures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeStructureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeeStructures
     * const feeStructure = await prisma.feeStructure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FeeStructureUpdateManyArgs>(
      args: SelectSubset<T, FeeStructureUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one FeeStructure.
     * @param {FeeStructureUpsertArgs} args - Arguments to update or create a FeeStructure.
     * @example
     * // Update or create a FeeStructure
     * const feeStructure = await prisma.feeStructure.upsert({
     *   create: {
     *     // ... data to create a FeeStructure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeeStructure we want to update
     *   }
     * })
     */
    upsert<T extends FeeStructureUpsertArgs>(
      args: SelectSubset<T, FeeStructureUpsertArgs<ExtArgs>>,
    ): Prisma__FeeStructureClient<
      $Result.GetResult<Prisma.$FeeStructurePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of FeeStructures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeStructureCountArgs} args - Arguments to filter FeeStructures to count.
     * @example
     * // Count the number of FeeStructures
     * const count = await prisma.feeStructure.count({
     *   where: {
     *     // ... the filter for the FeeStructures we want to count
     *   }
     * })
     **/
    count<T extends FeeStructureCountArgs>(
      args?: Subset<T, FeeStructureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeeStructureCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a FeeStructure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeStructureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FeeStructureAggregateArgs>(
      args: Subset<T, FeeStructureAggregateArgs>,
    ): Prisma.PrismaPromise<GetFeeStructureAggregateType<T>>;

    /**
     * Group by FeeStructure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeStructureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends FeeStructureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeeStructureGroupByArgs['orderBy'] }
        : { orderBy?: FeeStructureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, FeeStructureGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetFeeStructureGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FeeStructure model
     */
    readonly fields: FeeStructureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeeStructure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeeStructureClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    program<T extends ProgramDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProgramDefaultArgs<ExtArgs>>,
    ): Prisma__ProgramClient<
      | $Result.GetResult<
          Prisma.$ProgramPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    intake<T extends FeeStructure$intakeArgs<ExtArgs> = {}>(
      args?: Subset<T, FeeStructure$intakeArgs<ExtArgs>>,
    ): Prisma__IntakeClient<
      $Result.GetResult<
        Prisma.$IntakePayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;
    invoices<T extends FeeStructure$invoicesArgs<ExtArgs> = {}>(
      args?: Subset<T, FeeStructure$invoicesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'findMany'> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the FeeStructure model
   */
  interface FeeStructureFieldRefs {
    readonly id: FieldRef<'FeeStructure', 'Int'>;
    readonly name: FieldRef<'FeeStructure', 'String'>;
    readonly amount: FieldRef<'FeeStructure', 'Float'>;
    readonly currency: FieldRef<'FeeStructure', 'String'>;
    readonly programId: FieldRef<'FeeStructure', 'Int'>;
    readonly intakeId: FieldRef<'FeeStructure', 'Int'>;
    readonly createdAt: FieldRef<'FeeStructure', 'DateTime'>;
    readonly updatedAt: FieldRef<'FeeStructure', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * FeeStructure findUnique
   */
  export type FeeStructureFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null;
    /**
     * Filter, which FeeStructure to fetch.
     */
    where: FeeStructureWhereUniqueInput;
  };

  /**
   * FeeStructure findUniqueOrThrow
   */
  export type FeeStructureFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null;
    /**
     * Filter, which FeeStructure to fetch.
     */
    where: FeeStructureWhereUniqueInput;
  };

  /**
   * FeeStructure findFirst
   */
  export type FeeStructureFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null;
    /**
     * Filter, which FeeStructure to fetch.
     */
    where?: FeeStructureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeeStructures to fetch.
     */
    orderBy?:
      | FeeStructureOrderByWithRelationInput
      | FeeStructureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FeeStructures.
     */
    cursor?: FeeStructureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeeStructures from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeeStructures.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FeeStructures.
     */
    distinct?: FeeStructureScalarFieldEnum | FeeStructureScalarFieldEnum[];
  };

  /**
   * FeeStructure findFirstOrThrow
   */
  export type FeeStructureFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null;
    /**
     * Filter, which FeeStructure to fetch.
     */
    where?: FeeStructureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeeStructures to fetch.
     */
    orderBy?:
      | FeeStructureOrderByWithRelationInput
      | FeeStructureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FeeStructures.
     */
    cursor?: FeeStructureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeeStructures from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeeStructures.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FeeStructures.
     */
    distinct?: FeeStructureScalarFieldEnum | FeeStructureScalarFieldEnum[];
  };

  /**
   * FeeStructure findMany
   */
  export type FeeStructureFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null;
    /**
     * Filter, which FeeStructures to fetch.
     */
    where?: FeeStructureWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FeeStructures to fetch.
     */
    orderBy?:
      | FeeStructureOrderByWithRelationInput
      | FeeStructureOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FeeStructures.
     */
    cursor?: FeeStructureWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FeeStructures from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FeeStructures.
     */
    skip?: number;
    distinct?: FeeStructureScalarFieldEnum | FeeStructureScalarFieldEnum[];
  };

  /**
   * FeeStructure create
   */
  export type FeeStructureCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null;
    /**
     * The data needed to create a FeeStructure.
     */
    data: XOR<FeeStructureCreateInput, FeeStructureUncheckedCreateInput>;
  };

  /**
   * FeeStructure createMany
   */
  export type FeeStructureCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many FeeStructures.
     */
    data: FeeStructureCreateManyInput | FeeStructureCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * FeeStructure createManyAndReturn
   */
  export type FeeStructureCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many FeeStructures.
     */
    data: FeeStructureCreateManyInput | FeeStructureCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * FeeStructure update
   */
  export type FeeStructureUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null;
    /**
     * The data needed to update a FeeStructure.
     */
    data: XOR<FeeStructureUpdateInput, FeeStructureUncheckedUpdateInput>;
    /**
     * Choose, which FeeStructure to update.
     */
    where: FeeStructureWhereUniqueInput;
  };

  /**
   * FeeStructure updateMany
   */
  export type FeeStructureUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update FeeStructures.
     */
    data: XOR<
      FeeStructureUpdateManyMutationInput,
      FeeStructureUncheckedUpdateManyInput
    >;
    /**
     * Filter which FeeStructures to update
     */
    where?: FeeStructureWhereInput;
  };

  /**
   * FeeStructure upsert
   */
  export type FeeStructureUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null;
    /**
     * The filter to search for the FeeStructure to update in case it exists.
     */
    where: FeeStructureWhereUniqueInput;
    /**
     * In case the FeeStructure found by the `where` argument doesn't exist, create a new FeeStructure with this data.
     */
    create: XOR<FeeStructureCreateInput, FeeStructureUncheckedCreateInput>;
    /**
     * In case the FeeStructure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeeStructureUpdateInput, FeeStructureUncheckedUpdateInput>;
  };

  /**
   * FeeStructure delete
   */
  export type FeeStructureDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null;
    /**
     * Filter which FeeStructure to delete.
     */
    where: FeeStructureWhereUniqueInput;
  };

  /**
   * FeeStructure deleteMany
   */
  export type FeeStructureDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which FeeStructures to delete
     */
    where?: FeeStructureWhereInput;
  };

  /**
   * FeeStructure.intake
   */
  export type FeeStructure$intakeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null;
    where?: IntakeWhereInput;
  };

  /**
   * FeeStructure.invoices
   */
  export type FeeStructure$invoicesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null;
    where?: InvoiceWhereInput;
    orderBy?:
      | InvoiceOrderByWithRelationInput
      | InvoiceOrderByWithRelationInput[];
    cursor?: InvoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[];
  };

  /**
   * FeeStructure without action
   */
  export type FeeStructureDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FeeStructure
     */
    select?: FeeStructureSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeStructureInclude<ExtArgs> | null;
  };

  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
  };

  export type InvoiceAvgAggregateOutputType = {
    id: number | null;
    studentId: number | null;
    feeStructureId: number | null;
    amount: number | null;
    paidAmount: number | null;
  };

  export type InvoiceSumAggregateOutputType = {
    id: number | null;
    studentId: number | null;
    feeStructureId: number | null;
    amount: number | null;
    paidAmount: number | null;
  };

  export type InvoiceMinAggregateOutputType = {
    id: number | null;
    invoiceNumber: string | null;
    studentId: number | null;
    feeStructureId: number | null;
    amount: number | null;
    paidAmount: number | null;
    dueDate: Date | null;
    status: $Enums.InvoiceStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type InvoiceMaxAggregateOutputType = {
    id: number | null;
    invoiceNumber: string | null;
    studentId: number | null;
    feeStructureId: number | null;
    amount: number | null;
    paidAmount: number | null;
    dueDate: Date | null;
    status: $Enums.InvoiceStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type InvoiceCountAggregateOutputType = {
    id: number;
    invoiceNumber: number;
    studentId: number;
    feeStructureId: number;
    amount: number;
    paidAmount: number;
    dueDate: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type InvoiceAvgAggregateInputType = {
    id?: true;
    studentId?: true;
    feeStructureId?: true;
    amount?: true;
    paidAmount?: true;
  };

  export type InvoiceSumAggregateInputType = {
    id?: true;
    studentId?: true;
    feeStructureId?: true;
    amount?: true;
    paidAmount?: true;
  };

  export type InvoiceMinAggregateInputType = {
    id?: true;
    invoiceNumber?: true;
    studentId?: true;
    feeStructureId?: true;
    amount?: true;
    paidAmount?: true;
    dueDate?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type InvoiceMaxAggregateInputType = {
    id?: true;
    invoiceNumber?: true;
    studentId?: true;
    feeStructureId?: true;
    amount?: true;
    paidAmount?: true;
    dueDate?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type InvoiceCountAggregateInputType = {
    id?: true;
    invoiceNumber?: true;
    studentId?: true;
    feeStructureId?: true;
    amount?: true;
    paidAmount?: true;
    dueDate?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type InvoiceAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invoices to fetch.
     */
    orderBy?:
      | InvoiceOrderByWithRelationInput
      | InvoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Invoices
     **/
    _count?: true | InvoiceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: InvoiceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: InvoiceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InvoiceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InvoiceMaxAggregateInputType;
  };

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>;
  };

  export type InvoiceGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InvoiceWhereInput;
    orderBy?:
      | InvoiceOrderByWithAggregationInput
      | InvoiceOrderByWithAggregationInput[];
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum;
    having?: InvoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvoiceCountAggregateInputType | true;
    _avg?: InvoiceAvgAggregateInputType;
    _sum?: InvoiceSumAggregateInputType;
    _min?: InvoiceMinAggregateInputType;
    _max?: InvoiceMaxAggregateInputType;
  };

  export type InvoiceGroupByOutputType = {
    id: number;
    invoiceNumber: string;
    studentId: number;
    feeStructureId: number;
    amount: number;
    paidAmount: number;
    dueDate: Date;
    status: $Enums.InvoiceStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
  };

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<InvoiceGroupByOutputType, T['by']> & {
          [P in keyof T & keyof InvoiceGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>;
        }
      >
    >;

  export type InvoiceSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      invoiceNumber?: boolean;
      studentId?: boolean;
      feeStructureId?: boolean;
      amount?: boolean;
      paidAmount?: boolean;
      dueDate?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      student?: boolean | StudentDefaultArgs<ExtArgs>;
      feeStructure?: boolean | FeeStructureDefaultArgs<ExtArgs>;
      payments?: boolean | Invoice$paymentsArgs<ExtArgs>;
      _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['invoice']
  >;

  export type InvoiceSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      invoiceNumber?: boolean;
      studentId?: boolean;
      feeStructureId?: boolean;
      amount?: boolean;
      paidAmount?: boolean;
      dueDate?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      student?: boolean | StudentDefaultArgs<ExtArgs>;
      feeStructure?: boolean | FeeStructureDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['invoice']
  >;

  export type InvoiceSelectScalar = {
    id?: boolean;
    invoiceNumber?: boolean;
    studentId?: boolean;
    feeStructureId?: boolean;
    amount?: boolean;
    paidAmount?: boolean;
    dueDate?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type InvoiceInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    student?: boolean | StudentDefaultArgs<ExtArgs>;
    feeStructure?: boolean | FeeStructureDefaultArgs<ExtArgs>;
    payments?: boolean | Invoice$paymentsArgs<ExtArgs>;
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type InvoiceIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    student?: boolean | StudentDefaultArgs<ExtArgs>;
    feeStructure?: boolean | FeeStructureDefaultArgs<ExtArgs>;
  };

  export type $InvoicePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Invoice';
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>;
      feeStructure: Prisma.$FeeStructurePayload<ExtArgs>;
      payments: Prisma.$PaymentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        invoiceNumber: string;
        studentId: number;
        feeStructureId: number;
        amount: number;
        paidAmount: number;
        dueDate: Date;
        status: $Enums.InvoiceStatus;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['invoice']
    >;
    composites: {};
  };

  type InvoiceGetPayload<
    S extends boolean | null | undefined | InvoiceDefaultArgs,
  > = $Result.GetResult<Prisma.$InvoicePayload, S>;

  type InvoiceCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: InvoiceCountAggregateInputType | true;
  };

  export interface InvoiceDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Invoice'];
      meta: { name: 'Invoice' };
    };
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(
      args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>,
    ): Prisma__InvoiceClient<
      $Result.GetResult<
        Prisma.$InvoicePayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(
      args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__InvoiceClient<
      $Result.GetResult<
        Prisma.$InvoicePayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(
      args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>,
    ): Prisma__InvoiceClient<
      $Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__InvoiceClient<
      $Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     *
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InvoiceFindManyArgs>(
      args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     *
     */
    create<T extends InvoiceCreateArgs>(
      args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>,
    ): Prisma__InvoiceClient<
      $Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InvoiceCreateManyArgs>(
      args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(
      args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InvoicePayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     *
     */
    delete<T extends InvoiceDeleteArgs>(
      args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>,
    ): Prisma__InvoiceClient<
      $Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InvoiceUpdateArgs>(
      args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>,
    ): Prisma__InvoiceClient<
      $Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(
      args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InvoiceUpdateManyArgs>(
      args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(
      args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>,
    ): Prisma__InvoiceClient<
      $Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
     **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends InvoiceAggregateArgs>(
      args: Subset<T, InvoiceAggregateArgs>,
    ): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>;

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetInvoiceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Invoice model
     */
    readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, StudentDefaultArgs<ExtArgs>>,
    ): Prisma__StudentClient<
      | $Result.GetResult<
          Prisma.$StudentPayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    feeStructure<T extends FeeStructureDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, FeeStructureDefaultArgs<ExtArgs>>,
    ): Prisma__FeeStructureClient<
      | $Result.GetResult<
          Prisma.$FeeStructurePayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    payments<T extends Invoice$paymentsArgs<ExtArgs> = {}>(
      args?: Subset<T, Invoice$paymentsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findMany'> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<'Invoice', 'Int'>;
    readonly invoiceNumber: FieldRef<'Invoice', 'String'>;
    readonly studentId: FieldRef<'Invoice', 'Int'>;
    readonly feeStructureId: FieldRef<'Invoice', 'Int'>;
    readonly amount: FieldRef<'Invoice', 'Float'>;
    readonly paidAmount: FieldRef<'Invoice', 'Float'>;
    readonly dueDate: FieldRef<'Invoice', 'DateTime'>;
    readonly status: FieldRef<'Invoice', 'InvoiceStatus'>;
    readonly createdAt: FieldRef<'Invoice', 'DateTime'>;
    readonly updatedAt: FieldRef<'Invoice', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null;
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput;
  };

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null;
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput;
  };

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null;
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invoices to fetch.
     */
    orderBy?:
      | InvoiceOrderByWithRelationInput
      | InvoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[];
  };

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null;
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invoices to fetch.
     */
    orderBy?:
      | InvoiceOrderByWithRelationInput
      | InvoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[];
  };

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null;
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invoices to fetch.
     */
    orderBy?:
      | InvoiceOrderByWithRelationInput
      | InvoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invoices.
     */
    skip?: number;
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[];
  };

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null;
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>;
  };

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null;
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>;
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput;
  };

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>;
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput;
  };

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null;
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput;
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>;
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>;
  };

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null;
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput;
  };

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput;
  };

  /**
   * Invoice.payments
   */
  export type Invoice$paymentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    where?: PaymentWhereInput;
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    cursor?: PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null;
  };

  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  export type PaymentAvgAggregateOutputType = {
    id: number | null;
    invoiceId: number | null;
    amount: number | null;
  };

  export type PaymentSumAggregateOutputType = {
    id: number | null;
    invoiceId: number | null;
    amount: number | null;
  };

  export type PaymentMinAggregateOutputType = {
    id: number | null;
    invoiceId: number | null;
    amount: number | null;
    method: string | null;
    proofUrl: string | null;
    reference: string | null;
    status: $Enums.PaymentStatus | null;
    notes: string | null;
    verifiedAt: Date | null;
    paymentDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PaymentMaxAggregateOutputType = {
    id: number | null;
    invoiceId: number | null;
    amount: number | null;
    method: string | null;
    proofUrl: string | null;
    reference: string | null;
    status: $Enums.PaymentStatus | null;
    notes: string | null;
    verifiedAt: Date | null;
    paymentDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PaymentCountAggregateOutputType = {
    id: number;
    invoiceId: number;
    amount: number;
    method: number;
    proofUrl: number;
    reference: number;
    status: number;
    notes: number;
    verifiedAt: number;
    paymentDate: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type PaymentAvgAggregateInputType = {
    id?: true;
    invoiceId?: true;
    amount?: true;
  };

  export type PaymentSumAggregateInputType = {
    id?: true;
    invoiceId?: true;
    amount?: true;
  };

  export type PaymentMinAggregateInputType = {
    id?: true;
    invoiceId?: true;
    amount?: true;
    method?: true;
    proofUrl?: true;
    reference?: true;
    status?: true;
    notes?: true;
    verifiedAt?: true;
    paymentDate?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PaymentMaxAggregateInputType = {
    id?: true;
    invoiceId?: true;
    amount?: true;
    method?: true;
    proofUrl?: true;
    reference?: true;
    status?: true;
    notes?: true;
    verifiedAt?: true;
    paymentDate?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PaymentCountAggregateInputType = {
    id?: true;
    invoiceId?: true;
    amount?: true;
    method?: true;
    proofUrl?: true;
    reference?: true;
    status?: true;
    notes?: true;
    verifiedAt?: true;
    paymentDate?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type PaymentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Payments
     **/
    _count?: true | PaymentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PaymentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PaymentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PaymentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PaymentMaxAggregateInputType;
  };

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>;
  };

  export type PaymentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PaymentWhereInput;
    orderBy?:
      | PaymentOrderByWithAggregationInput
      | PaymentOrderByWithAggregationInput[];
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum;
    having?: PaymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentCountAggregateInputType | true;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
  };

  export type PaymentGroupByOutputType = {
    id: number;
    invoiceId: number;
    amount: number;
    method: string;
    proofUrl: string | null;
    reference: string | null;
    status: $Enums.PaymentStatus;
    notes: string | null;
    verifiedAt: Date | null;
    paymentDate: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PaymentGroupByOutputType, T['by']> & {
          [P in keyof T & keyof PaymentGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>;
        }
      >
    >;

  export type PaymentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      invoiceId?: boolean;
      amount?: boolean;
      method?: boolean;
      proofUrl?: boolean;
      reference?: boolean;
      status?: boolean;
      notes?: boolean;
      verifiedAt?: boolean;
      paymentDate?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      invoice?: boolean | InvoiceDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['payment']
  >;

  export type PaymentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      invoiceId?: boolean;
      amount?: boolean;
      method?: boolean;
      proofUrl?: boolean;
      reference?: boolean;
      status?: boolean;
      notes?: boolean;
      verifiedAt?: boolean;
      paymentDate?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      invoice?: boolean | InvoiceDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['payment']
  >;

  export type PaymentSelectScalar = {
    id?: boolean;
    invoiceId?: boolean;
    amount?: boolean;
    method?: boolean;
    proofUrl?: boolean;
    reference?: boolean;
    status?: boolean;
    notes?: boolean;
    verifiedAt?: boolean;
    paymentDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type PaymentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>;
  };
  export type PaymentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>;
  };

  export type $PaymentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Payment';
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        invoiceId: number;
        amount: number;
        method: string;
        proofUrl: string | null;
        reference: string | null;
        status: $Enums.PaymentStatus;
        notes: string | null;
        verifiedAt: Date | null;
        paymentDate: Date;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['payment']
    >;
    composites: {};
  };

  type PaymentGetPayload<
    S extends boolean | null | undefined | PaymentDefaultArgs,
  > = $Result.GetResult<Prisma.$PaymentPayload, S>;

  type PaymentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: PaymentCountAggregateInputType | true;
  };

  export interface PaymentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Payment'];
      meta: { name: 'Payment' };
    };
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(
      args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(
      args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     *
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PaymentFindManyArgs>(
      args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     *
     */
    create<T extends PaymentCreateArgs>(
      args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PaymentCreateManyArgs>(
      args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     *
     */
    delete<T extends PaymentDeleteArgs>(
      args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PaymentUpdateArgs>(
      args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PaymentDeleteManyArgs>(
      args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PaymentUpdateManyArgs>(
      args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(
      args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
     **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PaymentAggregateArgs>(
      args: Subset<T, PaymentAggregateArgs>,
    ): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetPaymentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Payment model
     */
    readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>,
    ): Prisma__InvoiceClient<
      | $Result.GetResult<
          Prisma.$InvoicePayload<ExtArgs>,
          T,
          'findUniqueOrThrow'
        >
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<'Payment', 'Int'>;
    readonly invoiceId: FieldRef<'Payment', 'Int'>;
    readonly amount: FieldRef<'Payment', 'Float'>;
    readonly method: FieldRef<'Payment', 'String'>;
    readonly proofUrl: FieldRef<'Payment', 'String'>;
    readonly reference: FieldRef<'Payment', 'String'>;
    readonly status: FieldRef<'Payment', 'PaymentStatus'>;
    readonly notes: FieldRef<'Payment', 'String'>;
    readonly verifiedAt: FieldRef<'Payment', 'DateTime'>;
    readonly paymentDate: FieldRef<'Payment', 'DateTime'>;
    readonly createdAt: FieldRef<'Payment', 'DateTime'>;
    readonly updatedAt: FieldRef<'Payment', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Payment create
   */
  export type PaymentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>;
  };

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>;
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>;
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput;
  };

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput;
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>;
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>;
  };

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput;
  };

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
  };

  /**
   * Model Notice
   */

  export type AggregateNotice = {
    _count: NoticeCountAggregateOutputType | null;
    _avg: NoticeAvgAggregateOutputType | null;
    _sum: NoticeSumAggregateOutputType | null;
    _min: NoticeMinAggregateOutputType | null;
    _max: NoticeMaxAggregateOutputType | null;
  };

  export type NoticeAvgAggregateOutputType = {
    id: number | null;
    programId: number | null;
    intakeId: number | null;
  };

  export type NoticeSumAggregateOutputType = {
    id: number | null;
    programId: number | null;
    intakeId: number | null;
  };

  export type NoticeMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    audience: $Enums.NoticeAudience | null;
    programId: number | null;
    intakeId: number | null;
    isPublished: boolean | null;
    expiryDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type NoticeMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    audience: $Enums.NoticeAudience | null;
    programId: number | null;
    intakeId: number | null;
    isPublished: boolean | null;
    expiryDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type NoticeCountAggregateOutputType = {
    id: number;
    title: number;
    content: number;
    audience: number;
    programId: number;
    intakeId: number;
    isPublished: number;
    expiryDate: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type NoticeAvgAggregateInputType = {
    id?: true;
    programId?: true;
    intakeId?: true;
  };

  export type NoticeSumAggregateInputType = {
    id?: true;
    programId?: true;
    intakeId?: true;
  };

  export type NoticeMinAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    audience?: true;
    programId?: true;
    intakeId?: true;
    isPublished?: true;
    expiryDate?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type NoticeMaxAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    audience?: true;
    programId?: true;
    intakeId?: true;
    isPublished?: true;
    expiryDate?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type NoticeCountAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    audience?: true;
    programId?: true;
    intakeId?: true;
    isPublished?: true;
    expiryDate?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type NoticeAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Notice to aggregate.
     */
    where?: NoticeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: NoticeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Notices
     **/
    _count?: true | NoticeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: NoticeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: NoticeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: NoticeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: NoticeMaxAggregateInputType;
  };

  export type GetNoticeAggregateType<T extends NoticeAggregateArgs> = {
    [P in keyof T & keyof AggregateNotice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotice[P]>
      : GetScalarType<T[P], AggregateNotice[P]>;
  };

  export type NoticeGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NoticeWhereInput;
    orderBy?:
      | NoticeOrderByWithAggregationInput
      | NoticeOrderByWithAggregationInput[];
    by: NoticeScalarFieldEnum[] | NoticeScalarFieldEnum;
    having?: NoticeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NoticeCountAggregateInputType | true;
    _avg?: NoticeAvgAggregateInputType;
    _sum?: NoticeSumAggregateInputType;
    _min?: NoticeMinAggregateInputType;
    _max?: NoticeMaxAggregateInputType;
  };

  export type NoticeGroupByOutputType = {
    id: number;
    title: string;
    content: string;
    audience: $Enums.NoticeAudience;
    programId: number | null;
    intakeId: number | null;
    isPublished: boolean;
    expiryDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: NoticeCountAggregateOutputType | null;
    _avg: NoticeAvgAggregateOutputType | null;
    _sum: NoticeSumAggregateOutputType | null;
    _min: NoticeMinAggregateOutputType | null;
    _max: NoticeMaxAggregateOutputType | null;
  };

  type GetNoticeGroupByPayload<T extends NoticeGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<NoticeGroupByOutputType, T['by']> & {
          [P in keyof T & keyof NoticeGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticeGroupByOutputType[P]>
            : GetScalarType<T[P], NoticeGroupByOutputType[P]>;
        }
      >
    >;

  export type NoticeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      audience?: boolean;
      programId?: boolean;
      intakeId?: boolean;
      isPublished?: boolean;
      expiryDate?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      program?: boolean | Notice$programArgs<ExtArgs>;
      intake?: boolean | Notice$intakeArgs<ExtArgs>;
    },
    ExtArgs['result']['notice']
  >;

  export type NoticeSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      audience?: boolean;
      programId?: boolean;
      intakeId?: boolean;
      isPublished?: boolean;
      expiryDate?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      program?: boolean | Notice$programArgs<ExtArgs>;
      intake?: boolean | Notice$intakeArgs<ExtArgs>;
    },
    ExtArgs['result']['notice']
  >;

  export type NoticeSelectScalar = {
    id?: boolean;
    title?: boolean;
    content?: boolean;
    audience?: boolean;
    programId?: boolean;
    intakeId?: boolean;
    isPublished?: boolean;
    expiryDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type NoticeInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    program?: boolean | Notice$programArgs<ExtArgs>;
    intake?: boolean | Notice$intakeArgs<ExtArgs>;
  };
  export type NoticeIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    program?: boolean | Notice$programArgs<ExtArgs>;
    intake?: boolean | Notice$intakeArgs<ExtArgs>;
  };

  export type $NoticePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Notice';
    objects: {
      program: Prisma.$ProgramPayload<ExtArgs> | null;
      intake: Prisma.$IntakePayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        title: string;
        content: string;
        audience: $Enums.NoticeAudience;
        programId: number | null;
        intakeId: number | null;
        isPublished: boolean;
        expiryDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['notice']
    >;
    composites: {};
  };

  type NoticeGetPayload<
    S extends boolean | null | undefined | NoticeDefaultArgs,
  > = $Result.GetResult<Prisma.$NoticePayload, S>;

  type NoticeCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<NoticeFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: NoticeCountAggregateInputType | true;
  };

  export interface NoticeDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Notice'];
      meta: { name: 'Notice' };
    };
    /**
     * Find zero or one Notice that matches the filter.
     * @param {NoticeFindUniqueArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticeFindUniqueArgs>(
      args: SelectSubset<T, NoticeFindUniqueArgs<ExtArgs>>,
    ): Prisma__NoticeClient<
      $Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Notice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoticeFindUniqueOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticeFindUniqueOrThrowArgs>(
      args: SelectSubset<T, NoticeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__NoticeClient<
      $Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Notice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticeFindFirstArgs>(
      args?: SelectSubset<T, NoticeFindFirstArgs<ExtArgs>>,
    ): Prisma__NoticeClient<
      $Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Notice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NoticeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__NoticeClient<
      $Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Notices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notices
     * const notices = await prisma.notice.findMany()
     *
     * // Get first 10 Notices
     * const notices = await prisma.notice.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const noticeWithIdOnly = await prisma.notice.findMany({ select: { id: true } })
     *
     */
    findMany<T extends NoticeFindManyArgs>(
      args?: SelectSubset<T, NoticeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Notice.
     * @param {NoticeCreateArgs} args - Arguments to create a Notice.
     * @example
     * // Create one Notice
     * const Notice = await prisma.notice.create({
     *   data: {
     *     // ... data to create a Notice
     *   }
     * })
     *
     */
    create<T extends NoticeCreateArgs>(
      args: SelectSubset<T, NoticeCreateArgs<ExtArgs>>,
    ): Prisma__NoticeClient<
      $Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Notices.
     * @param {NoticeCreateManyArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notice = await prisma.notice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NoticeCreateManyArgs>(
      args?: SelectSubset<T, NoticeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Notices and returns the data saved in the database.
     * @param {NoticeCreateManyAndReturnArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notice = await prisma.notice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Notices and only return the `id`
     * const noticeWithIdOnly = await prisma.notice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NoticeCreateManyAndReturnArgs>(
      args?: SelectSubset<T, NoticeCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NoticePayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a Notice.
     * @param {NoticeDeleteArgs} args - Arguments to delete one Notice.
     * @example
     * // Delete one Notice
     * const Notice = await prisma.notice.delete({
     *   where: {
     *     // ... filter to delete one Notice
     *   }
     * })
     *
     */
    delete<T extends NoticeDeleteArgs>(
      args: SelectSubset<T, NoticeDeleteArgs<ExtArgs>>,
    ): Prisma__NoticeClient<
      $Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Notice.
     * @param {NoticeUpdateArgs} args - Arguments to update one Notice.
     * @example
     * // Update one Notice
     * const notice = await prisma.notice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NoticeUpdateArgs>(
      args: SelectSubset<T, NoticeUpdateArgs<ExtArgs>>,
    ): Prisma__NoticeClient<
      $Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Notices.
     * @param {NoticeDeleteManyArgs} args - Arguments to filter Notices to delete.
     * @example
     * // Delete a few Notices
     * const { count } = await prisma.notice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NoticeDeleteManyArgs>(
      args?: SelectSubset<T, NoticeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notices
     * const notice = await prisma.notice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NoticeUpdateManyArgs>(
      args: SelectSubset<T, NoticeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Notice.
     * @param {NoticeUpsertArgs} args - Arguments to update or create a Notice.
     * @example
     * // Update or create a Notice
     * const notice = await prisma.notice.upsert({
     *   create: {
     *     // ... data to create a Notice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notice we want to update
     *   }
     * })
     */
    upsert<T extends NoticeUpsertArgs>(
      args: SelectSubset<T, NoticeUpsertArgs<ExtArgs>>,
    ): Prisma__NoticeClient<
      $Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeCountArgs} args - Arguments to filter Notices to count.
     * @example
     * // Count the number of Notices
     * const count = await prisma.notice.count({
     *   where: {
     *     // ... the filter for the Notices we want to count
     *   }
     * })
     **/
    count<T extends NoticeCountArgs>(
      args?: Subset<T, NoticeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends NoticeAggregateArgs>(
      args: Subset<T, NoticeAggregateArgs>,
    ): Prisma.PrismaPromise<GetNoticeAggregateType<T>>;

    /**
     * Group by Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends NoticeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticeGroupByArgs['orderBy'] }
        : { orderBy?: NoticeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, NoticeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetNoticeGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Notice model
     */
    readonly fields: NoticeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    program<T extends Notice$programArgs<ExtArgs> = {}>(
      args?: Subset<T, Notice$programArgs<ExtArgs>>,
    ): Prisma__ProgramClient<
      $Result.GetResult<
        Prisma.$ProgramPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;
    intake<T extends Notice$intakeArgs<ExtArgs> = {}>(
      args?: Subset<T, Notice$intakeArgs<ExtArgs>>,
    ): Prisma__IntakeClient<
      $Result.GetResult<
        Prisma.$IntakePayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      > | null,
      null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Notice model
   */
  interface NoticeFieldRefs {
    readonly id: FieldRef<'Notice', 'Int'>;
    readonly title: FieldRef<'Notice', 'String'>;
    readonly content: FieldRef<'Notice', 'String'>;
    readonly audience: FieldRef<'Notice', 'NoticeAudience'>;
    readonly programId: FieldRef<'Notice', 'Int'>;
    readonly intakeId: FieldRef<'Notice', 'Int'>;
    readonly isPublished: FieldRef<'Notice', 'Boolean'>;
    readonly expiryDate: FieldRef<'Notice', 'DateTime'>;
    readonly createdAt: FieldRef<'Notice', 'DateTime'>;
    readonly updatedAt: FieldRef<'Notice', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Notice findUnique
   */
  export type NoticeFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null;
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput;
  };

  /**
   * Notice findUniqueOrThrow
   */
  export type NoticeFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null;
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput;
  };

  /**
   * Notice findFirst
   */
  export type NoticeFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null;
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[];
  };

  /**
   * Notice findFirstOrThrow
   */
  export type NoticeFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null;
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[];
  };

  /**
   * Notice findMany
   */
  export type NoticeFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null;
    /**
     * Filter, which Notices to fetch.
     */
    where?: NoticeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Notices.
     */
    cursor?: NoticeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notices.
     */
    skip?: number;
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[];
  };

  /**
   * Notice create
   */
  export type NoticeCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null;
    /**
     * The data needed to create a Notice.
     */
    data: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>;
  };

  /**
   * Notice createMany
   */
  export type NoticeCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Notices.
     */
    data: NoticeCreateManyInput | NoticeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Notice createManyAndReturn
   */
  export type NoticeCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many Notices.
     */
    data: NoticeCreateManyInput | NoticeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Notice update
   */
  export type NoticeUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null;
    /**
     * The data needed to update a Notice.
     */
    data: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>;
    /**
     * Choose, which Notice to update.
     */
    where: NoticeWhereUniqueInput;
  };

  /**
   * Notice updateMany
   */
  export type NoticeUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Notices.
     */
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyInput>;
    /**
     * Filter which Notices to update
     */
    where?: NoticeWhereInput;
  };

  /**
   * Notice upsert
   */
  export type NoticeUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null;
    /**
     * The filter to search for the Notice to update in case it exists.
     */
    where: NoticeWhereUniqueInput;
    /**
     * In case the Notice found by the `where` argument doesn't exist, create a new Notice with this data.
     */
    create: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>;
    /**
     * In case the Notice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>;
  };

  /**
   * Notice delete
   */
  export type NoticeDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null;
    /**
     * Filter which Notice to delete.
     */
    where: NoticeWhereUniqueInput;
  };

  /**
   * Notice deleteMany
   */
  export type NoticeDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Notices to delete
     */
    where?: NoticeWhereInput;
  };

  /**
   * Notice.program
   */
  export type Notice$programArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null;
    where?: ProgramWhereInput;
  };

  /**
   * Notice.intake
   */
  export type Notice$intakeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Intake
     */
    select?: IntakeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeInclude<ExtArgs> | null;
    where?: IntakeWhereInput;
  };

  /**
   * Notice without action
   */
  export type NoticeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null;
  };

  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null;
    _avg: AuditLogAvgAggregateOutputType | null;
    _sum: AuditLogSumAggregateOutputType | null;
    _min: AuditLogMinAggregateOutputType | null;
    _max: AuditLogMaxAggregateOutputType | null;
  };

  export type AuditLogAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
  };

  export type AuditLogSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
  };

  export type AuditLogMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    action: string | null;
    entity: string | null;
    entityId: string | null;
    details: string | null;
    ipAddress: string | null;
    timestamp: Date | null;
  };

  export type AuditLogMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    action: string | null;
    entity: string | null;
    entityId: string | null;
    details: string | null;
    ipAddress: string | null;
    timestamp: Date | null;
  };

  export type AuditLogCountAggregateOutputType = {
    id: number;
    userId: number;
    action: number;
    entity: number;
    entityId: number;
    details: number;
    ipAddress: number;
    timestamp: number;
    _all: number;
  };

  export type AuditLogAvgAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type AuditLogSumAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type AuditLogMinAggregateInputType = {
    id?: true;
    userId?: true;
    action?: true;
    entity?: true;
    entityId?: true;
    details?: true;
    ipAddress?: true;
    timestamp?: true;
  };

  export type AuditLogMaxAggregateInputType = {
    id?: true;
    userId?: true;
    action?: true;
    entity?: true;
    entityId?: true;
    details?: true;
    ipAddress?: true;
    timestamp?: true;
  };

  export type AuditLogCountAggregateInputType = {
    id?: true;
    userId?: true;
    action?: true;
    entity?: true;
    entityId?: true;
    details?: true;
    ipAddress?: true;
    timestamp?: true;
    _all?: true;
  };

  export type AuditLogAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?:
      | AuditLogOrderByWithRelationInput
      | AuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AuditLogs
     **/
    _count?: true | AuditLogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AuditLogAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AuditLogSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AuditLogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AuditLogMaxAggregateInputType;
  };

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
    [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>;
  };

  export type AuditLogGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AuditLogWhereInput;
    orderBy?:
      | AuditLogOrderByWithAggregationInput
      | AuditLogOrderByWithAggregationInput[];
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum;
    having?: AuditLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuditLogCountAggregateInputType | true;
    _avg?: AuditLogAvgAggregateInputType;
    _sum?: AuditLogSumAggregateInputType;
    _min?: AuditLogMinAggregateInputType;
    _max?: AuditLogMaxAggregateInputType;
  };

  export type AuditLogGroupByOutputType = {
    id: number;
    userId: number;
    action: string;
    entity: string;
    entityId: string;
    details: string | null;
    ipAddress: string | null;
    timestamp: Date;
    _count: AuditLogCountAggregateOutputType | null;
    _avg: AuditLogAvgAggregateOutputType | null;
    _sum: AuditLogSumAggregateOutputType | null;
    _min: AuditLogMinAggregateOutputType | null;
    _max: AuditLogMaxAggregateOutputType | null;
  };

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AuditLogGroupByOutputType, T['by']> & {
          [P in keyof T & keyof AuditLogGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>;
        }
      >
    >;

  export type AuditLogSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      action?: boolean;
      entity?: boolean;
      entityId?: boolean;
      details?: boolean;
      ipAddress?: boolean;
      timestamp?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['auditLog']
  >;

  export type AuditLogSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      action?: boolean;
      entity?: boolean;
      entityId?: boolean;
      details?: boolean;
      ipAddress?: boolean;
      timestamp?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['auditLog']
  >;

  export type AuditLogSelectScalar = {
    id?: boolean;
    userId?: boolean;
    action?: boolean;
    entity?: boolean;
    entityId?: boolean;
    details?: boolean;
    ipAddress?: boolean;
    timestamp?: boolean;
  };

  export type AuditLogInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type AuditLogIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $AuditLogPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'AuditLog';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        userId: number;
        action: string;
        entity: string;
        entityId: string;
        details: string | null;
        ipAddress: string | null;
        timestamp: Date;
      },
      ExtArgs['result']['auditLog']
    >;
    composites: {};
  };

  type AuditLogGetPayload<
    S extends boolean | null | undefined | AuditLogDefaultArgs,
  > = $Result.GetResult<Prisma.$AuditLogPayload, S>;

  type AuditLogCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
    select?: AuditLogCountAggregateInputType | true;
  };

  export interface AuditLogDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'];
      meta: { name: 'AuditLog' };
    };
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(
      args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        'findUnique'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        'findUniqueOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(
      args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        'findFirst'
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        'findFirstOrThrow'
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     *
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AuditLogFindManyArgs>(
      args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     *
     */
    create<T extends AuditLogCreateArgs>(
      args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AuditLogCreateManyArgs>(
      args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AuditLogPayload<ExtArgs>,
        T,
        'createManyAndReturn'
      >
    >;

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     *
     */
    delete<T extends AuditLogDeleteArgs>(
      args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AuditLogUpdateArgs>(
      args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(
      args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AuditLogUpdateManyArgs>(
      args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(
      args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>,
    ): Prisma__AuditLogClient<
      $Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
     **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AuditLogAggregateArgs>(
      args: Subset<T, AuditLogAggregateArgs>,
    ): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>;

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAuditLogGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AuditLog model
     */
    readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>
      | Null,
      Null,
      ExtArgs
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<'AuditLog', 'Int'>;
    readonly userId: FieldRef<'AuditLog', 'Int'>;
    readonly action: FieldRef<'AuditLog', 'String'>;
    readonly entity: FieldRef<'AuditLog', 'String'>;
    readonly entityId: FieldRef<'AuditLog', 'String'>;
    readonly details: FieldRef<'AuditLog', 'String'>;
    readonly ipAddress: FieldRef<'AuditLog', 'String'>;
    readonly timestamp: FieldRef<'AuditLog', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput;
  };

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput;
  };

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?:
      | AuditLogOrderByWithRelationInput
      | AuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[];
  };

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?:
      | AuditLogOrderByWithRelationInput
      | AuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[];
  };

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?:
      | AuditLogOrderByWithRelationInput
      | AuditLogOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuditLogs.
     */
    skip?: number;
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[];
  };

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>;
  };

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>;
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput;
  };

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<
      AuditLogUpdateManyMutationInput,
      AuditLogUncheckedUpdateManyInput
    >;
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput;
  };

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput;
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>;
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>;
  };

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput;
  };

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput;
  };

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    name: 'name';
    password: 'password';
    role: 'role';
    status: 'status';
    refreshToken: 'refreshToken';
    resetToken: 'resetToken';
    resetTokenExpiry: 'resetTokenExpiry';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const DepartmentScalarFieldEnum: {
    id: 'id';
    name: 'name';
    code: 'code';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type DepartmentScalarFieldEnum =
    (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum];

  export const ProgramScalarFieldEnum: {
    id: 'id';
    name: 'name';
    code: 'code';
    description: 'description';
    duration: 'duration';
    departmentId: 'departmentId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ProgramScalarFieldEnum =
    (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum];

  export const IntakeScalarFieldEnum: {
    id: 'id';
    name: 'name';
    programId: 'programId';
    startDate: 'startDate';
    endDate: 'endDate';
    applicationDeadline: 'applicationDeadline';
    maxCapacity: 'maxCapacity';
    status: 'status';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type IntakeScalarFieldEnum =
    (typeof IntakeScalarFieldEnum)[keyof typeof IntakeScalarFieldEnum];

  export const ApplicantScalarFieldEnum: {
    id: 'id';
    firstName: 'firstName';
    lastName: 'lastName';
    email: 'email';
    phone: 'phone';
    dateOfBirth: 'dateOfBirth';
    address: 'address';
    nationality: 'nationality';
    previousEdu: 'previousEdu';
    intakeId: 'intakeId';
    programId: 'programId';
    status: 'status';
    rejectionNote: 'rejectionNote';
    submittedAt: 'submittedAt';
    userId: 'userId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ApplicantScalarFieldEnum =
    (typeof ApplicantScalarFieldEnum)[keyof typeof ApplicantScalarFieldEnum];

  export const StudentScalarFieldEnum: {
    id: 'id';
    studentId: 'studentId';
    applicantId: 'applicantId';
    userId: 'userId';
    enrolledAt: 'enrolledAt';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type StudentScalarFieldEnum =
    (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum];

  export const FeeStructureScalarFieldEnum: {
    id: 'id';
    name: 'name';
    amount: 'amount';
    currency: 'currency';
    programId: 'programId';
    intakeId: 'intakeId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type FeeStructureScalarFieldEnum =
    (typeof FeeStructureScalarFieldEnum)[keyof typeof FeeStructureScalarFieldEnum];

  export const InvoiceScalarFieldEnum: {
    id: 'id';
    invoiceNumber: 'invoiceNumber';
    studentId: 'studentId';
    feeStructureId: 'feeStructureId';
    amount: 'amount';
    paidAmount: 'paidAmount';
    dueDate: 'dueDate';
    status: 'status';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type InvoiceScalarFieldEnum =
    (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum];

  export const PaymentScalarFieldEnum: {
    id: 'id';
    invoiceId: 'invoiceId';
    amount: 'amount';
    method: 'method';
    proofUrl: 'proofUrl';
    reference: 'reference';
    status: 'status';
    notes: 'notes';
    verifiedAt: 'verifiedAt';
    paymentDate: 'paymentDate';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type PaymentScalarFieldEnum =
    (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];

  export const NoticeScalarFieldEnum: {
    id: 'id';
    title: 'title';
    content: 'content';
    audience: 'audience';
    programId: 'programId';
    intakeId: 'intakeId';
    isPublished: 'isPublished';
    expiryDate: 'expiryDate';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type NoticeScalarFieldEnum =
    (typeof NoticeScalarFieldEnum)[keyof typeof NoticeScalarFieldEnum];

  export const AuditLogScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    action: 'action';
    entity: 'entity';
    entityId: 'entityId';
    details: 'details';
    ipAddress: 'ipAddress';
    timestamp: 'timestamp';
  };

  export type AuditLogScalarFieldEnum =
    (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Role'
  >;

  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Role[]'
  >;

  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'UserStatus'
  >;

  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'UserStatus[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'IntakeStatus'
   */
  export type EnumIntakeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'IntakeStatus'
  >;

  /**
   * Reference to a field of type 'IntakeStatus[]'
   */
  export type ListEnumIntakeStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'IntakeStatus[]'>;

  /**
   * Reference to a field of type 'ApplicantStatus'
   */
  export type EnumApplicantStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'ApplicantStatus'>;

  /**
   * Reference to a field of type 'ApplicantStatus[]'
   */
  export type ListEnumApplicantStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'ApplicantStatus[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'InvoiceStatus'
  >;

  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>;

  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'PaymentStatus'
  >;

  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>;

  /**
   * Reference to a field of type 'NoticeAudience'
   */
  export type EnumNoticeAudienceFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'NoticeAudience'
  >;

  /**
   * Reference to a field of type 'NoticeAudience[]'
   */
  export type ListEnumNoticeAudienceFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'NoticeAudience[]'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<'User'> | number;
    email?: StringFilter<'User'> | string;
    name?: StringNullableFilter<'User'> | string | null;
    password?: StringFilter<'User'> | string;
    role?: EnumRoleFilter<'User'> | $Enums.Role;
    status?: EnumUserStatusFilter<'User'> | $Enums.UserStatus;
    refreshToken?: StringNullableFilter<'User'> | string | null;
    resetToken?: StringNullableFilter<'User'> | string | null;
    resetTokenExpiry?: DateTimeNullableFilter<'User'> | Date | string | null;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    applicant?: XOR<
      ApplicantNullableRelationFilter,
      ApplicantWhereInput
    > | null;
    student?: XOR<StudentNullableRelationFilter, StudentWhereInput> | null;
    auditLogs?: AuditLogListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrderInput | SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    refreshToken?: SortOrderInput | SortOrder;
    resetToken?: SortOrderInput | SortOrder;
    resetTokenExpiry?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    applicant?: ApplicantOrderByWithRelationInput;
    student?: StudentOrderByWithRelationInput;
    auditLogs?: AuditLogOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringNullableFilter<'User'> | string | null;
      password?: StringFilter<'User'> | string;
      role?: EnumRoleFilter<'User'> | $Enums.Role;
      status?: EnumUserStatusFilter<'User'> | $Enums.UserStatus;
      refreshToken?: StringNullableFilter<'User'> | string | null;
      resetToken?: StringNullableFilter<'User'> | string | null;
      resetTokenExpiry?: DateTimeNullableFilter<'User'> | Date | string | null;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      applicant?: XOR<
        ApplicantNullableRelationFilter,
        ApplicantWhereInput
      > | null;
      student?: XOR<StudentNullableRelationFilter, StudentWhereInput> | null;
      auditLogs?: AuditLogListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrderInput | SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    refreshToken?: SortOrderInput | SortOrder;
    resetToken?: SortOrderInput | SortOrder;
    resetTokenExpiry?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'User'> | number;
    email?: StringWithAggregatesFilter<'User'> | string;
    name?: StringNullableWithAggregatesFilter<'User'> | string | null;
    password?: StringWithAggregatesFilter<'User'> | string;
    role?: EnumRoleWithAggregatesFilter<'User'> | $Enums.Role;
    status?: EnumUserStatusWithAggregatesFilter<'User'> | $Enums.UserStatus;
    refreshToken?: StringNullableWithAggregatesFilter<'User'> | string | null;
    resetToken?: StringNullableWithAggregatesFilter<'User'> | string | null;
    resetTokenExpiry?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[];
    OR?: DepartmentWhereInput[];
    NOT?: DepartmentWhereInput | DepartmentWhereInput[];
    id?: IntFilter<'Department'> | number;
    name?: StringFilter<'Department'> | string;
    code?: StringFilter<'Department'> | string;
    createdAt?: DateTimeFilter<'Department'> | Date | string;
    updatedAt?: DateTimeFilter<'Department'> | Date | string;
    programs?: ProgramListRelationFilter;
  };

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    code?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    programs?: ProgramOrderByRelationAggregateInput;
  };

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      code?: string;
      AND?: DepartmentWhereInput | DepartmentWhereInput[];
      OR?: DepartmentWhereInput[];
      NOT?: DepartmentWhereInput | DepartmentWhereInput[];
      name?: StringFilter<'Department'> | string;
      createdAt?: DateTimeFilter<'Department'> | Date | string;
      updatedAt?: DateTimeFilter<'Department'> | Date | string;
      programs?: ProgramListRelationFilter;
    },
    'id' | 'code'
  >;

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    code?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: DepartmentCountOrderByAggregateInput;
    _avg?: DepartmentAvgOrderByAggregateInput;
    _max?: DepartmentMaxOrderByAggregateInput;
    _min?: DepartmentMinOrderByAggregateInput;
    _sum?: DepartmentSumOrderByAggregateInput;
  };

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?:
      | DepartmentScalarWhereWithAggregatesInput
      | DepartmentScalarWhereWithAggregatesInput[];
    OR?: DepartmentScalarWhereWithAggregatesInput[];
    NOT?:
      | DepartmentScalarWhereWithAggregatesInput
      | DepartmentScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Department'> | number;
    name?: StringWithAggregatesFilter<'Department'> | string;
    code?: StringWithAggregatesFilter<'Department'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Department'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Department'> | Date | string;
  };

  export type ProgramWhereInput = {
    AND?: ProgramWhereInput | ProgramWhereInput[];
    OR?: ProgramWhereInput[];
    NOT?: ProgramWhereInput | ProgramWhereInput[];
    id?: IntFilter<'Program'> | number;
    name?: StringFilter<'Program'> | string;
    code?: StringFilter<'Program'> | string;
    description?: StringNullableFilter<'Program'> | string | null;
    duration?: StringNullableFilter<'Program'> | string | null;
    departmentId?: IntFilter<'Program'> | number;
    createdAt?: DateTimeFilter<'Program'> | Date | string;
    updatedAt?: DateTimeFilter<'Program'> | Date | string;
    department?: XOR<DepartmentRelationFilter, DepartmentWhereInput>;
    intakes?: IntakeListRelationFilter;
    applicants?: ApplicantListRelationFilter;
    feeStructures?: FeeStructureListRelationFilter;
    notices?: NoticeListRelationFilter;
  };

  export type ProgramOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    code?: SortOrder;
    description?: SortOrderInput | SortOrder;
    duration?: SortOrderInput | SortOrder;
    departmentId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    department?: DepartmentOrderByWithRelationInput;
    intakes?: IntakeOrderByRelationAggregateInput;
    applicants?: ApplicantOrderByRelationAggregateInput;
    feeStructures?: FeeStructureOrderByRelationAggregateInput;
    notices?: NoticeOrderByRelationAggregateInput;
  };

  export type ProgramWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      code?: string;
      AND?: ProgramWhereInput | ProgramWhereInput[];
      OR?: ProgramWhereInput[];
      NOT?: ProgramWhereInput | ProgramWhereInput[];
      name?: StringFilter<'Program'> | string;
      description?: StringNullableFilter<'Program'> | string | null;
      duration?: StringNullableFilter<'Program'> | string | null;
      departmentId?: IntFilter<'Program'> | number;
      createdAt?: DateTimeFilter<'Program'> | Date | string;
      updatedAt?: DateTimeFilter<'Program'> | Date | string;
      department?: XOR<DepartmentRelationFilter, DepartmentWhereInput>;
      intakes?: IntakeListRelationFilter;
      applicants?: ApplicantListRelationFilter;
      feeStructures?: FeeStructureListRelationFilter;
      notices?: NoticeListRelationFilter;
    },
    'id' | 'code'
  >;

  export type ProgramOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    code?: SortOrder;
    description?: SortOrderInput | SortOrder;
    duration?: SortOrderInput | SortOrder;
    departmentId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ProgramCountOrderByAggregateInput;
    _avg?: ProgramAvgOrderByAggregateInput;
    _max?: ProgramMaxOrderByAggregateInput;
    _min?: ProgramMinOrderByAggregateInput;
    _sum?: ProgramSumOrderByAggregateInput;
  };

  export type ProgramScalarWhereWithAggregatesInput = {
    AND?:
      | ProgramScalarWhereWithAggregatesInput
      | ProgramScalarWhereWithAggregatesInput[];
    OR?: ProgramScalarWhereWithAggregatesInput[];
    NOT?:
      | ProgramScalarWhereWithAggregatesInput
      | ProgramScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Program'> | number;
    name?: StringWithAggregatesFilter<'Program'> | string;
    code?: StringWithAggregatesFilter<'Program'> | string;
    description?: StringNullableWithAggregatesFilter<'Program'> | string | null;
    duration?: StringNullableWithAggregatesFilter<'Program'> | string | null;
    departmentId?: IntWithAggregatesFilter<'Program'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'Program'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Program'> | Date | string;
  };

  export type IntakeWhereInput = {
    AND?: IntakeWhereInput | IntakeWhereInput[];
    OR?: IntakeWhereInput[];
    NOT?: IntakeWhereInput | IntakeWhereInput[];
    id?: IntFilter<'Intake'> | number;
    name?: StringFilter<'Intake'> | string;
    programId?: IntFilter<'Intake'> | number;
    startDate?: DateTimeFilter<'Intake'> | Date | string;
    endDate?: DateTimeFilter<'Intake'> | Date | string;
    applicationDeadline?: DateTimeFilter<'Intake'> | Date | string;
    maxCapacity?: IntFilter<'Intake'> | number;
    status?: EnumIntakeStatusFilter<'Intake'> | $Enums.IntakeStatus;
    createdAt?: DateTimeFilter<'Intake'> | Date | string;
    updatedAt?: DateTimeFilter<'Intake'> | Date | string;
    program?: XOR<ProgramRelationFilter, ProgramWhereInput>;
    applicants?: ApplicantListRelationFilter;
    feeStructures?: FeeStructureListRelationFilter;
    notices?: NoticeListRelationFilter;
  };

  export type IntakeOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    programId?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    applicationDeadline?: SortOrder;
    maxCapacity?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    program?: ProgramOrderByWithRelationInput;
    applicants?: ApplicantOrderByRelationAggregateInput;
    feeStructures?: FeeStructureOrderByRelationAggregateInput;
    notices?: NoticeOrderByRelationAggregateInput;
  };

  export type IntakeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: IntakeWhereInput | IntakeWhereInput[];
      OR?: IntakeWhereInput[];
      NOT?: IntakeWhereInput | IntakeWhereInput[];
      name?: StringFilter<'Intake'> | string;
      programId?: IntFilter<'Intake'> | number;
      startDate?: DateTimeFilter<'Intake'> | Date | string;
      endDate?: DateTimeFilter<'Intake'> | Date | string;
      applicationDeadline?: DateTimeFilter<'Intake'> | Date | string;
      maxCapacity?: IntFilter<'Intake'> | number;
      status?: EnumIntakeStatusFilter<'Intake'> | $Enums.IntakeStatus;
      createdAt?: DateTimeFilter<'Intake'> | Date | string;
      updatedAt?: DateTimeFilter<'Intake'> | Date | string;
      program?: XOR<ProgramRelationFilter, ProgramWhereInput>;
      applicants?: ApplicantListRelationFilter;
      feeStructures?: FeeStructureListRelationFilter;
      notices?: NoticeListRelationFilter;
    },
    'id'
  >;

  export type IntakeOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    programId?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    applicationDeadline?: SortOrder;
    maxCapacity?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: IntakeCountOrderByAggregateInput;
    _avg?: IntakeAvgOrderByAggregateInput;
    _max?: IntakeMaxOrderByAggregateInput;
    _min?: IntakeMinOrderByAggregateInput;
    _sum?: IntakeSumOrderByAggregateInput;
  };

  export type IntakeScalarWhereWithAggregatesInput = {
    AND?:
      | IntakeScalarWhereWithAggregatesInput
      | IntakeScalarWhereWithAggregatesInput[];
    OR?: IntakeScalarWhereWithAggregatesInput[];
    NOT?:
      | IntakeScalarWhereWithAggregatesInput
      | IntakeScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Intake'> | number;
    name?: StringWithAggregatesFilter<'Intake'> | string;
    programId?: IntWithAggregatesFilter<'Intake'> | number;
    startDate?: DateTimeWithAggregatesFilter<'Intake'> | Date | string;
    endDate?: DateTimeWithAggregatesFilter<'Intake'> | Date | string;
    applicationDeadline?:
      | DateTimeWithAggregatesFilter<'Intake'>
      | Date
      | string;
    maxCapacity?: IntWithAggregatesFilter<'Intake'> | number;
    status?:
      | EnumIntakeStatusWithAggregatesFilter<'Intake'>
      | $Enums.IntakeStatus;
    createdAt?: DateTimeWithAggregatesFilter<'Intake'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Intake'> | Date | string;
  };

  export type ApplicantWhereInput = {
    AND?: ApplicantWhereInput | ApplicantWhereInput[];
    OR?: ApplicantWhereInput[];
    NOT?: ApplicantWhereInput | ApplicantWhereInput[];
    id?: IntFilter<'Applicant'> | number;
    firstName?: StringFilter<'Applicant'> | string;
    lastName?: StringFilter<'Applicant'> | string;
    email?: StringFilter<'Applicant'> | string;
    phone?: StringFilter<'Applicant'> | string;
    dateOfBirth?: DateTimeNullableFilter<'Applicant'> | Date | string | null;
    address?: StringNullableFilter<'Applicant'> | string | null;
    nationality?: StringNullableFilter<'Applicant'> | string | null;
    previousEdu?: StringNullableFilter<'Applicant'> | string | null;
    intakeId?: IntFilter<'Applicant'> | number;
    programId?: IntFilter<'Applicant'> | number;
    status?: EnumApplicantStatusFilter<'Applicant'> | $Enums.ApplicantStatus;
    rejectionNote?: StringNullableFilter<'Applicant'> | string | null;
    submittedAt?: DateTimeFilter<'Applicant'> | Date | string;
    userId?: IntNullableFilter<'Applicant'> | number | null;
    createdAt?: DateTimeFilter<'Applicant'> | Date | string;
    updatedAt?: DateTimeFilter<'Applicant'> | Date | string;
    intake?: XOR<IntakeRelationFilter, IntakeWhereInput>;
    program?: XOR<ProgramRelationFilter, ProgramWhereInput>;
    student?: XOR<StudentNullableRelationFilter, StudentWhereInput> | null;
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null;
  };

  export type ApplicantOrderByWithRelationInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    dateOfBirth?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    nationality?: SortOrderInput | SortOrder;
    previousEdu?: SortOrderInput | SortOrder;
    intakeId?: SortOrder;
    programId?: SortOrder;
    status?: SortOrder;
    rejectionNote?: SortOrderInput | SortOrder;
    submittedAt?: SortOrder;
    userId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    intake?: IntakeOrderByWithRelationInput;
    program?: ProgramOrderByWithRelationInput;
    student?: StudentOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type ApplicantWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      userId?: number;
      AND?: ApplicantWhereInput | ApplicantWhereInput[];
      OR?: ApplicantWhereInput[];
      NOT?: ApplicantWhereInput | ApplicantWhereInput[];
      firstName?: StringFilter<'Applicant'> | string;
      lastName?: StringFilter<'Applicant'> | string;
      email?: StringFilter<'Applicant'> | string;
      phone?: StringFilter<'Applicant'> | string;
      dateOfBirth?: DateTimeNullableFilter<'Applicant'> | Date | string | null;
      address?: StringNullableFilter<'Applicant'> | string | null;
      nationality?: StringNullableFilter<'Applicant'> | string | null;
      previousEdu?: StringNullableFilter<'Applicant'> | string | null;
      intakeId?: IntFilter<'Applicant'> | number;
      programId?: IntFilter<'Applicant'> | number;
      status?: EnumApplicantStatusFilter<'Applicant'> | $Enums.ApplicantStatus;
      rejectionNote?: StringNullableFilter<'Applicant'> | string | null;
      submittedAt?: DateTimeFilter<'Applicant'> | Date | string;
      createdAt?: DateTimeFilter<'Applicant'> | Date | string;
      updatedAt?: DateTimeFilter<'Applicant'> | Date | string;
      intake?: XOR<IntakeRelationFilter, IntakeWhereInput>;
      program?: XOR<ProgramRelationFilter, ProgramWhereInput>;
      student?: XOR<StudentNullableRelationFilter, StudentWhereInput> | null;
      user?: XOR<UserNullableRelationFilter, UserWhereInput> | null;
    },
    'id' | 'userId'
  >;

  export type ApplicantOrderByWithAggregationInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    dateOfBirth?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    nationality?: SortOrderInput | SortOrder;
    previousEdu?: SortOrderInput | SortOrder;
    intakeId?: SortOrder;
    programId?: SortOrder;
    status?: SortOrder;
    rejectionNote?: SortOrderInput | SortOrder;
    submittedAt?: SortOrder;
    userId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ApplicantCountOrderByAggregateInput;
    _avg?: ApplicantAvgOrderByAggregateInput;
    _max?: ApplicantMaxOrderByAggregateInput;
    _min?: ApplicantMinOrderByAggregateInput;
    _sum?: ApplicantSumOrderByAggregateInput;
  };

  export type ApplicantScalarWhereWithAggregatesInput = {
    AND?:
      | ApplicantScalarWhereWithAggregatesInput
      | ApplicantScalarWhereWithAggregatesInput[];
    OR?: ApplicantScalarWhereWithAggregatesInput[];
    NOT?:
      | ApplicantScalarWhereWithAggregatesInput
      | ApplicantScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Applicant'> | number;
    firstName?: StringWithAggregatesFilter<'Applicant'> | string;
    lastName?: StringWithAggregatesFilter<'Applicant'> | string;
    email?: StringWithAggregatesFilter<'Applicant'> | string;
    phone?: StringWithAggregatesFilter<'Applicant'> | string;
    dateOfBirth?:
      | DateTimeNullableWithAggregatesFilter<'Applicant'>
      | Date
      | string
      | null;
    address?: StringNullableWithAggregatesFilter<'Applicant'> | string | null;
    nationality?:
      | StringNullableWithAggregatesFilter<'Applicant'>
      | string
      | null;
    previousEdu?:
      | StringNullableWithAggregatesFilter<'Applicant'>
      | string
      | null;
    intakeId?: IntWithAggregatesFilter<'Applicant'> | number;
    programId?: IntWithAggregatesFilter<'Applicant'> | number;
    status?:
      | EnumApplicantStatusWithAggregatesFilter<'Applicant'>
      | $Enums.ApplicantStatus;
    rejectionNote?:
      | StringNullableWithAggregatesFilter<'Applicant'>
      | string
      | null;
    submittedAt?: DateTimeWithAggregatesFilter<'Applicant'> | Date | string;
    userId?: IntNullableWithAggregatesFilter<'Applicant'> | number | null;
    createdAt?: DateTimeWithAggregatesFilter<'Applicant'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Applicant'> | Date | string;
  };

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[];
    OR?: StudentWhereInput[];
    NOT?: StudentWhereInput | StudentWhereInput[];
    id?: IntFilter<'Student'> | number;
    studentId?: StringFilter<'Student'> | string;
    applicantId?: IntFilter<'Student'> | number;
    userId?: IntFilter<'Student'> | number;
    enrolledAt?: DateTimeFilter<'Student'> | Date | string;
    createdAt?: DateTimeFilter<'Student'> | Date | string;
    updatedAt?: DateTimeFilter<'Student'> | Date | string;
    applicant?: XOR<ApplicantRelationFilter, ApplicantWhereInput>;
    user?: XOR<UserRelationFilter, UserWhereInput>;
    invoices?: InvoiceListRelationFilter;
  };

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder;
    studentId?: SortOrder;
    applicantId?: SortOrder;
    userId?: SortOrder;
    enrolledAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    applicant?: ApplicantOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
    invoices?: InvoiceOrderByRelationAggregateInput;
  };

  export type StudentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      studentId?: string;
      applicantId?: number;
      userId?: number;
      AND?: StudentWhereInput | StudentWhereInput[];
      OR?: StudentWhereInput[];
      NOT?: StudentWhereInput | StudentWhereInput[];
      enrolledAt?: DateTimeFilter<'Student'> | Date | string;
      createdAt?: DateTimeFilter<'Student'> | Date | string;
      updatedAt?: DateTimeFilter<'Student'> | Date | string;
      applicant?: XOR<ApplicantRelationFilter, ApplicantWhereInput>;
      user?: XOR<UserRelationFilter, UserWhereInput>;
      invoices?: InvoiceListRelationFilter;
    },
    'id' | 'studentId' | 'applicantId' | 'userId'
  >;

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder;
    studentId?: SortOrder;
    applicantId?: SortOrder;
    userId?: SortOrder;
    enrolledAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: StudentCountOrderByAggregateInput;
    _avg?: StudentAvgOrderByAggregateInput;
    _max?: StudentMaxOrderByAggregateInput;
    _min?: StudentMinOrderByAggregateInput;
    _sum?: StudentSumOrderByAggregateInput;
  };

  export type StudentScalarWhereWithAggregatesInput = {
    AND?:
      | StudentScalarWhereWithAggregatesInput
      | StudentScalarWhereWithAggregatesInput[];
    OR?: StudentScalarWhereWithAggregatesInput[];
    NOT?:
      | StudentScalarWhereWithAggregatesInput
      | StudentScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Student'> | number;
    studentId?: StringWithAggregatesFilter<'Student'> | string;
    applicantId?: IntWithAggregatesFilter<'Student'> | number;
    userId?: IntWithAggregatesFilter<'Student'> | number;
    enrolledAt?: DateTimeWithAggregatesFilter<'Student'> | Date | string;
    createdAt?: DateTimeWithAggregatesFilter<'Student'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Student'> | Date | string;
  };

  export type FeeStructureWhereInput = {
    AND?: FeeStructureWhereInput | FeeStructureWhereInput[];
    OR?: FeeStructureWhereInput[];
    NOT?: FeeStructureWhereInput | FeeStructureWhereInput[];
    id?: IntFilter<'FeeStructure'> | number;
    name?: StringFilter<'FeeStructure'> | string;
    amount?: FloatFilter<'FeeStructure'> | number;
    currency?: StringFilter<'FeeStructure'> | string;
    programId?: IntFilter<'FeeStructure'> | number;
    intakeId?: IntNullableFilter<'FeeStructure'> | number | null;
    createdAt?: DateTimeFilter<'FeeStructure'> | Date | string;
    updatedAt?: DateTimeFilter<'FeeStructure'> | Date | string;
    program?: XOR<ProgramRelationFilter, ProgramWhereInput>;
    intake?: XOR<IntakeNullableRelationFilter, IntakeWhereInput> | null;
    invoices?: InvoiceListRelationFilter;
  };

  export type FeeStructureOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    programId?: SortOrder;
    intakeId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    program?: ProgramOrderByWithRelationInput;
    intake?: IntakeOrderByWithRelationInput;
    invoices?: InvoiceOrderByRelationAggregateInput;
  };

  export type FeeStructureWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: FeeStructureWhereInput | FeeStructureWhereInput[];
      OR?: FeeStructureWhereInput[];
      NOT?: FeeStructureWhereInput | FeeStructureWhereInput[];
      name?: StringFilter<'FeeStructure'> | string;
      amount?: FloatFilter<'FeeStructure'> | number;
      currency?: StringFilter<'FeeStructure'> | string;
      programId?: IntFilter<'FeeStructure'> | number;
      intakeId?: IntNullableFilter<'FeeStructure'> | number | null;
      createdAt?: DateTimeFilter<'FeeStructure'> | Date | string;
      updatedAt?: DateTimeFilter<'FeeStructure'> | Date | string;
      program?: XOR<ProgramRelationFilter, ProgramWhereInput>;
      intake?: XOR<IntakeNullableRelationFilter, IntakeWhereInput> | null;
      invoices?: InvoiceListRelationFilter;
    },
    'id'
  >;

  export type FeeStructureOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    programId?: SortOrder;
    intakeId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: FeeStructureCountOrderByAggregateInput;
    _avg?: FeeStructureAvgOrderByAggregateInput;
    _max?: FeeStructureMaxOrderByAggregateInput;
    _min?: FeeStructureMinOrderByAggregateInput;
    _sum?: FeeStructureSumOrderByAggregateInput;
  };

  export type FeeStructureScalarWhereWithAggregatesInput = {
    AND?:
      | FeeStructureScalarWhereWithAggregatesInput
      | FeeStructureScalarWhereWithAggregatesInput[];
    OR?: FeeStructureScalarWhereWithAggregatesInput[];
    NOT?:
      | FeeStructureScalarWhereWithAggregatesInput
      | FeeStructureScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'FeeStructure'> | number;
    name?: StringWithAggregatesFilter<'FeeStructure'> | string;
    amount?: FloatWithAggregatesFilter<'FeeStructure'> | number;
    currency?: StringWithAggregatesFilter<'FeeStructure'> | string;
    programId?: IntWithAggregatesFilter<'FeeStructure'> | number;
    intakeId?: IntNullableWithAggregatesFilter<'FeeStructure'> | number | null;
    createdAt?: DateTimeWithAggregatesFilter<'FeeStructure'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'FeeStructure'> | Date | string;
  };

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[];
    OR?: InvoiceWhereInput[];
    NOT?: InvoiceWhereInput | InvoiceWhereInput[];
    id?: IntFilter<'Invoice'> | number;
    invoiceNumber?: StringFilter<'Invoice'> | string;
    studentId?: IntFilter<'Invoice'> | number;
    feeStructureId?: IntFilter<'Invoice'> | number;
    amount?: FloatFilter<'Invoice'> | number;
    paidAmount?: FloatFilter<'Invoice'> | number;
    dueDate?: DateTimeFilter<'Invoice'> | Date | string;
    status?: EnumInvoiceStatusFilter<'Invoice'> | $Enums.InvoiceStatus;
    createdAt?: DateTimeFilter<'Invoice'> | Date | string;
    updatedAt?: DateTimeFilter<'Invoice'> | Date | string;
    student?: XOR<StudentRelationFilter, StudentWhereInput>;
    feeStructure?: XOR<FeeStructureRelationFilter, FeeStructureWhereInput>;
    payments?: PaymentListRelationFilter;
  };

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder;
    invoiceNumber?: SortOrder;
    studentId?: SortOrder;
    feeStructureId?: SortOrder;
    amount?: SortOrder;
    paidAmount?: SortOrder;
    dueDate?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    student?: StudentOrderByWithRelationInput;
    feeStructure?: FeeStructureOrderByWithRelationInput;
    payments?: PaymentOrderByRelationAggregateInput;
  };

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      invoiceNumber?: string;
      AND?: InvoiceWhereInput | InvoiceWhereInput[];
      OR?: InvoiceWhereInput[];
      NOT?: InvoiceWhereInput | InvoiceWhereInput[];
      studentId?: IntFilter<'Invoice'> | number;
      feeStructureId?: IntFilter<'Invoice'> | number;
      amount?: FloatFilter<'Invoice'> | number;
      paidAmount?: FloatFilter<'Invoice'> | number;
      dueDate?: DateTimeFilter<'Invoice'> | Date | string;
      status?: EnumInvoiceStatusFilter<'Invoice'> | $Enums.InvoiceStatus;
      createdAt?: DateTimeFilter<'Invoice'> | Date | string;
      updatedAt?: DateTimeFilter<'Invoice'> | Date | string;
      student?: XOR<StudentRelationFilter, StudentWhereInput>;
      feeStructure?: XOR<FeeStructureRelationFilter, FeeStructureWhereInput>;
      payments?: PaymentListRelationFilter;
    },
    'id' | 'invoiceNumber'
  >;

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder;
    invoiceNumber?: SortOrder;
    studentId?: SortOrder;
    feeStructureId?: SortOrder;
    amount?: SortOrder;
    paidAmount?: SortOrder;
    dueDate?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: InvoiceCountOrderByAggregateInput;
    _avg?: InvoiceAvgOrderByAggregateInput;
    _max?: InvoiceMaxOrderByAggregateInput;
    _min?: InvoiceMinOrderByAggregateInput;
    _sum?: InvoiceSumOrderByAggregateInput;
  };

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?:
      | InvoiceScalarWhereWithAggregatesInput
      | InvoiceScalarWhereWithAggregatesInput[];
    OR?: InvoiceScalarWhereWithAggregatesInput[];
    NOT?:
      | InvoiceScalarWhereWithAggregatesInput
      | InvoiceScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Invoice'> | number;
    invoiceNumber?: StringWithAggregatesFilter<'Invoice'> | string;
    studentId?: IntWithAggregatesFilter<'Invoice'> | number;
    feeStructureId?: IntWithAggregatesFilter<'Invoice'> | number;
    amount?: FloatWithAggregatesFilter<'Invoice'> | number;
    paidAmount?: FloatWithAggregatesFilter<'Invoice'> | number;
    dueDate?: DateTimeWithAggregatesFilter<'Invoice'> | Date | string;
    status?:
      | EnumInvoiceStatusWithAggregatesFilter<'Invoice'>
      | $Enums.InvoiceStatus;
    createdAt?: DateTimeWithAggregatesFilter<'Invoice'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Invoice'> | Date | string;
  };

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[];
    OR?: PaymentWhereInput[];
    NOT?: PaymentWhereInput | PaymentWhereInput[];
    id?: IntFilter<'Payment'> | number;
    invoiceId?: IntFilter<'Payment'> | number;
    amount?: FloatFilter<'Payment'> | number;
    method?: StringFilter<'Payment'> | string;
    proofUrl?: StringNullableFilter<'Payment'> | string | null;
    reference?: StringNullableFilter<'Payment'> | string | null;
    status?: EnumPaymentStatusFilter<'Payment'> | $Enums.PaymentStatus;
    notes?: StringNullableFilter<'Payment'> | string | null;
    verifiedAt?: DateTimeNullableFilter<'Payment'> | Date | string | null;
    paymentDate?: DateTimeFilter<'Payment'> | Date | string;
    createdAt?: DateTimeFilter<'Payment'> | Date | string;
    updatedAt?: DateTimeFilter<'Payment'> | Date | string;
    invoice?: XOR<InvoiceRelationFilter, InvoiceWhereInput>;
  };

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder;
    invoiceId?: SortOrder;
    amount?: SortOrder;
    method?: SortOrder;
    proofUrl?: SortOrderInput | SortOrder;
    reference?: SortOrderInput | SortOrder;
    status?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    verifiedAt?: SortOrderInput | SortOrder;
    paymentDate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    invoice?: InvoiceOrderByWithRelationInput;
  };

  export type PaymentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: PaymentWhereInput | PaymentWhereInput[];
      OR?: PaymentWhereInput[];
      NOT?: PaymentWhereInput | PaymentWhereInput[];
      invoiceId?: IntFilter<'Payment'> | number;
      amount?: FloatFilter<'Payment'> | number;
      method?: StringFilter<'Payment'> | string;
      proofUrl?: StringNullableFilter<'Payment'> | string | null;
      reference?: StringNullableFilter<'Payment'> | string | null;
      status?: EnumPaymentStatusFilter<'Payment'> | $Enums.PaymentStatus;
      notes?: StringNullableFilter<'Payment'> | string | null;
      verifiedAt?: DateTimeNullableFilter<'Payment'> | Date | string | null;
      paymentDate?: DateTimeFilter<'Payment'> | Date | string;
      createdAt?: DateTimeFilter<'Payment'> | Date | string;
      updatedAt?: DateTimeFilter<'Payment'> | Date | string;
      invoice?: XOR<InvoiceRelationFilter, InvoiceWhereInput>;
    },
    'id'
  >;

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder;
    invoiceId?: SortOrder;
    amount?: SortOrder;
    method?: SortOrder;
    proofUrl?: SortOrderInput | SortOrder;
    reference?: SortOrderInput | SortOrder;
    status?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    verifiedAt?: SortOrderInput | SortOrder;
    paymentDate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: PaymentCountOrderByAggregateInput;
    _avg?: PaymentAvgOrderByAggregateInput;
    _max?: PaymentMaxOrderByAggregateInput;
    _min?: PaymentMinOrderByAggregateInput;
    _sum?: PaymentSumOrderByAggregateInput;
  };

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?:
      | PaymentScalarWhereWithAggregatesInput
      | PaymentScalarWhereWithAggregatesInput[];
    OR?: PaymentScalarWhereWithAggregatesInput[];
    NOT?:
      | PaymentScalarWhereWithAggregatesInput
      | PaymentScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Payment'> | number;
    invoiceId?: IntWithAggregatesFilter<'Payment'> | number;
    amount?: FloatWithAggregatesFilter<'Payment'> | number;
    method?: StringWithAggregatesFilter<'Payment'> | string;
    proofUrl?: StringNullableWithAggregatesFilter<'Payment'> | string | null;
    reference?: StringNullableWithAggregatesFilter<'Payment'> | string | null;
    status?:
      | EnumPaymentStatusWithAggregatesFilter<'Payment'>
      | $Enums.PaymentStatus;
    notes?: StringNullableWithAggregatesFilter<'Payment'> | string | null;
    verifiedAt?:
      | DateTimeNullableWithAggregatesFilter<'Payment'>
      | Date
      | string
      | null;
    paymentDate?: DateTimeWithAggregatesFilter<'Payment'> | Date | string;
    createdAt?: DateTimeWithAggregatesFilter<'Payment'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Payment'> | Date | string;
  };

  export type NoticeWhereInput = {
    AND?: NoticeWhereInput | NoticeWhereInput[];
    OR?: NoticeWhereInput[];
    NOT?: NoticeWhereInput | NoticeWhereInput[];
    id?: IntFilter<'Notice'> | number;
    title?: StringFilter<'Notice'> | string;
    content?: StringFilter<'Notice'> | string;
    audience?: EnumNoticeAudienceFilter<'Notice'> | $Enums.NoticeAudience;
    programId?: IntNullableFilter<'Notice'> | number | null;
    intakeId?: IntNullableFilter<'Notice'> | number | null;
    isPublished?: BoolFilter<'Notice'> | boolean;
    expiryDate?: DateTimeNullableFilter<'Notice'> | Date | string | null;
    createdAt?: DateTimeFilter<'Notice'> | Date | string;
    updatedAt?: DateTimeFilter<'Notice'> | Date | string;
    program?: XOR<ProgramNullableRelationFilter, ProgramWhereInput> | null;
    intake?: XOR<IntakeNullableRelationFilter, IntakeWhereInput> | null;
  };

  export type NoticeOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    audience?: SortOrder;
    programId?: SortOrderInput | SortOrder;
    intakeId?: SortOrderInput | SortOrder;
    isPublished?: SortOrder;
    expiryDate?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    program?: ProgramOrderByWithRelationInput;
    intake?: IntakeOrderByWithRelationInput;
  };

  export type NoticeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: NoticeWhereInput | NoticeWhereInput[];
      OR?: NoticeWhereInput[];
      NOT?: NoticeWhereInput | NoticeWhereInput[];
      title?: StringFilter<'Notice'> | string;
      content?: StringFilter<'Notice'> | string;
      audience?: EnumNoticeAudienceFilter<'Notice'> | $Enums.NoticeAudience;
      programId?: IntNullableFilter<'Notice'> | number | null;
      intakeId?: IntNullableFilter<'Notice'> | number | null;
      isPublished?: BoolFilter<'Notice'> | boolean;
      expiryDate?: DateTimeNullableFilter<'Notice'> | Date | string | null;
      createdAt?: DateTimeFilter<'Notice'> | Date | string;
      updatedAt?: DateTimeFilter<'Notice'> | Date | string;
      program?: XOR<ProgramNullableRelationFilter, ProgramWhereInput> | null;
      intake?: XOR<IntakeNullableRelationFilter, IntakeWhereInput> | null;
    },
    'id'
  >;

  export type NoticeOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    audience?: SortOrder;
    programId?: SortOrderInput | SortOrder;
    intakeId?: SortOrderInput | SortOrder;
    isPublished?: SortOrder;
    expiryDate?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: NoticeCountOrderByAggregateInput;
    _avg?: NoticeAvgOrderByAggregateInput;
    _max?: NoticeMaxOrderByAggregateInput;
    _min?: NoticeMinOrderByAggregateInput;
    _sum?: NoticeSumOrderByAggregateInput;
  };

  export type NoticeScalarWhereWithAggregatesInput = {
    AND?:
      | NoticeScalarWhereWithAggregatesInput
      | NoticeScalarWhereWithAggregatesInput[];
    OR?: NoticeScalarWhereWithAggregatesInput[];
    NOT?:
      | NoticeScalarWhereWithAggregatesInput
      | NoticeScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Notice'> | number;
    title?: StringWithAggregatesFilter<'Notice'> | string;
    content?: StringWithAggregatesFilter<'Notice'> | string;
    audience?:
      | EnumNoticeAudienceWithAggregatesFilter<'Notice'>
      | $Enums.NoticeAudience;
    programId?: IntNullableWithAggregatesFilter<'Notice'> | number | null;
    intakeId?: IntNullableWithAggregatesFilter<'Notice'> | number | null;
    isPublished?: BoolWithAggregatesFilter<'Notice'> | boolean;
    expiryDate?:
      | DateTimeNullableWithAggregatesFilter<'Notice'>
      | Date
      | string
      | null;
    createdAt?: DateTimeWithAggregatesFilter<'Notice'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Notice'> | Date | string;
  };

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[];
    OR?: AuditLogWhereInput[];
    NOT?: AuditLogWhereInput | AuditLogWhereInput[];
    id?: IntFilter<'AuditLog'> | number;
    userId?: IntFilter<'AuditLog'> | number;
    action?: StringFilter<'AuditLog'> | string;
    entity?: StringFilter<'AuditLog'> | string;
    entityId?: StringFilter<'AuditLog'> | string;
    details?: StringNullableFilter<'AuditLog'> | string | null;
    ipAddress?: StringNullableFilter<'AuditLog'> | string | null;
    timestamp?: DateTimeFilter<'AuditLog'> | Date | string;
    user?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    action?: SortOrder;
    entity?: SortOrder;
    entityId?: SortOrder;
    details?: SortOrderInput | SortOrder;
    ipAddress?: SortOrderInput | SortOrder;
    timestamp?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: AuditLogWhereInput | AuditLogWhereInput[];
      OR?: AuditLogWhereInput[];
      NOT?: AuditLogWhereInput | AuditLogWhereInput[];
      userId?: IntFilter<'AuditLog'> | number;
      action?: StringFilter<'AuditLog'> | string;
      entity?: StringFilter<'AuditLog'> | string;
      entityId?: StringFilter<'AuditLog'> | string;
      details?: StringNullableFilter<'AuditLog'> | string | null;
      ipAddress?: StringNullableFilter<'AuditLog'> | string | null;
      timestamp?: DateTimeFilter<'AuditLog'> | Date | string;
      user?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    action?: SortOrder;
    entity?: SortOrder;
    entityId?: SortOrder;
    details?: SortOrderInput | SortOrder;
    ipAddress?: SortOrderInput | SortOrder;
    timestamp?: SortOrder;
    _count?: AuditLogCountOrderByAggregateInput;
    _avg?: AuditLogAvgOrderByAggregateInput;
    _max?: AuditLogMaxOrderByAggregateInput;
    _min?: AuditLogMinOrderByAggregateInput;
    _sum?: AuditLogSumOrderByAggregateInput;
  };

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?:
      | AuditLogScalarWhereWithAggregatesInput
      | AuditLogScalarWhereWithAggregatesInput[];
    OR?: AuditLogScalarWhereWithAggregatesInput[];
    NOT?:
      | AuditLogScalarWhereWithAggregatesInput
      | AuditLogScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'AuditLog'> | number;
    userId?: IntWithAggregatesFilter<'AuditLog'> | number;
    action?: StringWithAggregatesFilter<'AuditLog'> | string;
    entity?: StringWithAggregatesFilter<'AuditLog'> | string;
    entityId?: StringWithAggregatesFilter<'AuditLog'> | string;
    details?: StringNullableWithAggregatesFilter<'AuditLog'> | string | null;
    ipAddress?: StringNullableWithAggregatesFilter<'AuditLog'> | string | null;
    timestamp?: DateTimeWithAggregatesFilter<'AuditLog'> | Date | string;
  };

  export type UserCreateInput = {
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    refreshToken?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant?: ApplicantCreateNestedOneWithoutUserInput;
    student?: StudentCreateNestedOneWithoutUserInput;
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    refreshToken?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant?: ApplicantUncheckedCreateNestedOneWithoutUserInput;
    student?: StudentUncheckedCreateNestedOneWithoutUserInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: ApplicantUpdateOneWithoutUserNestedInput;
    student?: StudentUpdateOneWithoutUserNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: ApplicantUncheckedUpdateOneWithoutUserNestedInput;
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: number;
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    refreshToken?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DepartmentCreateInput = {
    name: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    programs?: ProgramCreateNestedManyWithoutDepartmentInput;
  };

  export type DepartmentUncheckedCreateInput = {
    id?: number;
    name: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    programs?: ProgramUncheckedCreateNestedManyWithoutDepartmentInput;
  };

  export type DepartmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    programs?: ProgramUpdateManyWithoutDepartmentNestedInput;
  };

  export type DepartmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    programs?: ProgramUncheckedUpdateManyWithoutDepartmentNestedInput;
  };

  export type DepartmentCreateManyInput = {
    id?: number;
    name: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type DepartmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DepartmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProgramCreateInput = {
    name: string;
    code: string;
    description?: string | null;
    duration?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department: DepartmentCreateNestedOneWithoutProgramsInput;
    intakes?: IntakeCreateNestedManyWithoutProgramInput;
    applicants?: ApplicantCreateNestedManyWithoutProgramInput;
    feeStructures?: FeeStructureCreateNestedManyWithoutProgramInput;
    notices?: NoticeCreateNestedManyWithoutProgramInput;
  };

  export type ProgramUncheckedCreateInput = {
    id?: number;
    name: string;
    code: string;
    description?: string | null;
    duration?: string | null;
    departmentId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    intakes?: IntakeUncheckedCreateNestedManyWithoutProgramInput;
    applicants?: ApplicantUncheckedCreateNestedManyWithoutProgramInput;
    feeStructures?: FeeStructureUncheckedCreateNestedManyWithoutProgramInput;
    notices?: NoticeUncheckedCreateNestedManyWithoutProgramInput;
  };

  export type ProgramUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    department?: DepartmentUpdateOneRequiredWithoutProgramsNestedInput;
    intakes?: IntakeUpdateManyWithoutProgramNestedInput;
    applicants?: ApplicantUpdateManyWithoutProgramNestedInput;
    feeStructures?: FeeStructureUpdateManyWithoutProgramNestedInput;
    notices?: NoticeUpdateManyWithoutProgramNestedInput;
  };

  export type ProgramUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableStringFieldUpdateOperationsInput | string | null;
    departmentId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    intakes?: IntakeUncheckedUpdateManyWithoutProgramNestedInput;
    applicants?: ApplicantUncheckedUpdateManyWithoutProgramNestedInput;
    feeStructures?: FeeStructureUncheckedUpdateManyWithoutProgramNestedInput;
    notices?: NoticeUncheckedUpdateManyWithoutProgramNestedInput;
  };

  export type ProgramCreateManyInput = {
    id?: number;
    name: string;
    code: string;
    description?: string | null;
    duration?: string | null;
    departmentId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProgramUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProgramUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableStringFieldUpdateOperationsInput | string | null;
    departmentId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntakeCreateInput = {
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    applicationDeadline: Date | string;
    maxCapacity?: number;
    status?: $Enums.IntakeStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    program: ProgramCreateNestedOneWithoutIntakesInput;
    applicants?: ApplicantCreateNestedManyWithoutIntakeInput;
    feeStructures?: FeeStructureCreateNestedManyWithoutIntakeInput;
    notices?: NoticeCreateNestedManyWithoutIntakeInput;
  };

  export type IntakeUncheckedCreateInput = {
    id?: number;
    name: string;
    programId: number;
    startDate: Date | string;
    endDate: Date | string;
    applicationDeadline: Date | string;
    maxCapacity?: number;
    status?: $Enums.IntakeStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicants?: ApplicantUncheckedCreateNestedManyWithoutIntakeInput;
    feeStructures?: FeeStructureUncheckedCreateNestedManyWithoutIntakeInput;
    notices?: NoticeUncheckedCreateNestedManyWithoutIntakeInput;
  };

  export type IntakeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicationDeadline?: DateTimeFieldUpdateOperationsInput | Date | string;
    maxCapacity?: IntFieldUpdateOperationsInput | number;
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    program?: ProgramUpdateOneRequiredWithoutIntakesNestedInput;
    applicants?: ApplicantUpdateManyWithoutIntakeNestedInput;
    feeStructures?: FeeStructureUpdateManyWithoutIntakeNestedInput;
    notices?: NoticeUpdateManyWithoutIntakeNestedInput;
  };

  export type IntakeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    programId?: IntFieldUpdateOperationsInput | number;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicationDeadline?: DateTimeFieldUpdateOperationsInput | Date | string;
    maxCapacity?: IntFieldUpdateOperationsInput | number;
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicants?: ApplicantUncheckedUpdateManyWithoutIntakeNestedInput;
    feeStructures?: FeeStructureUncheckedUpdateManyWithoutIntakeNestedInput;
    notices?: NoticeUncheckedUpdateManyWithoutIntakeNestedInput;
  };

  export type IntakeCreateManyInput = {
    id?: number;
    name: string;
    programId: number;
    startDate: Date | string;
    endDate: Date | string;
    applicationDeadline: Date | string;
    maxCapacity?: number;
    status?: $Enums.IntakeStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type IntakeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicationDeadline?: DateTimeFieldUpdateOperationsInput | Date | string;
    maxCapacity?: IntFieldUpdateOperationsInput | number;
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntakeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    programId?: IntFieldUpdateOperationsInput | number;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicationDeadline?: DateTimeFieldUpdateOperationsInput | Date | string;
    maxCapacity?: IntFieldUpdateOperationsInput | number;
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicantCreateInput = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth?: Date | string | null;
    address?: string | null;
    nationality?: string | null;
    previousEdu?: string | null;
    status?: $Enums.ApplicantStatus;
    rejectionNote?: string | null;
    submittedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    intake: IntakeCreateNestedOneWithoutApplicantsInput;
    program: ProgramCreateNestedOneWithoutApplicantsInput;
    student?: StudentCreateNestedOneWithoutApplicantInput;
    user?: UserCreateNestedOneWithoutApplicantInput;
  };

  export type ApplicantUncheckedCreateInput = {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth?: Date | string | null;
    address?: string | null;
    nationality?: string | null;
    previousEdu?: string | null;
    intakeId: number;
    programId: number;
    status?: $Enums.ApplicantStatus;
    rejectionNote?: string | null;
    submittedAt?: Date | string;
    userId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student?: StudentUncheckedCreateNestedOneWithoutApplicantInput;
  };

  export type ApplicantUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    previousEdu?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | EnumApplicantStatusFieldUpdateOperationsInput
      | $Enums.ApplicantStatus;
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    intake?: IntakeUpdateOneRequiredWithoutApplicantsNestedInput;
    program?: ProgramUpdateOneRequiredWithoutApplicantsNestedInput;
    student?: StudentUpdateOneWithoutApplicantNestedInput;
    user?: UserUpdateOneWithoutApplicantNestedInput;
  };

  export type ApplicantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    previousEdu?: NullableStringFieldUpdateOperationsInput | string | null;
    intakeId?: IntFieldUpdateOperationsInput | number;
    programId?: IntFieldUpdateOperationsInput | number;
    status?:
      | EnumApplicantStatusFieldUpdateOperationsInput
      | $Enums.ApplicantStatus;
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: StudentUncheckedUpdateOneWithoutApplicantNestedInput;
  };

  export type ApplicantCreateManyInput = {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth?: Date | string | null;
    address?: string | null;
    nationality?: string | null;
    previousEdu?: string | null;
    intakeId: number;
    programId: number;
    status?: $Enums.ApplicantStatus;
    rejectionNote?: string | null;
    submittedAt?: Date | string;
    userId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ApplicantUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    previousEdu?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | EnumApplicantStatusFieldUpdateOperationsInput
      | $Enums.ApplicantStatus;
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    previousEdu?: NullableStringFieldUpdateOperationsInput | string | null;
    intakeId?: IntFieldUpdateOperationsInput | number;
    programId?: IntFieldUpdateOperationsInput | number;
    status?:
      | EnumApplicantStatusFieldUpdateOperationsInput
      | $Enums.ApplicantStatus;
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StudentCreateInput = {
    studentId: string;
    enrolledAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant: ApplicantCreateNestedOneWithoutStudentInput;
    user: UserCreateNestedOneWithoutStudentInput;
    invoices?: InvoiceCreateNestedManyWithoutStudentInput;
  };

  export type StudentUncheckedCreateInput = {
    id?: number;
    studentId: string;
    applicantId: number;
    userId: number;
    enrolledAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invoices?: InvoiceUncheckedCreateNestedManyWithoutStudentInput;
  };

  export type StudentUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string;
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: ApplicantUpdateOneRequiredWithoutStudentNestedInput;
    user?: UserUpdateOneRequiredWithoutStudentNestedInput;
    invoices?: InvoiceUpdateManyWithoutStudentNestedInput;
  };

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    studentId?: StringFieldUpdateOperationsInput | string;
    applicantId?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: InvoiceUncheckedUpdateManyWithoutStudentNestedInput;
  };

  export type StudentCreateManyInput = {
    id?: number;
    studentId: string;
    applicantId: number;
    userId: number;
    enrolledAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type StudentUpdateManyMutationInput = {
    studentId?: StringFieldUpdateOperationsInput | string;
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    studentId?: StringFieldUpdateOperationsInput | string;
    applicantId?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeeStructureCreateInput = {
    name: string;
    amount: number;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    program: ProgramCreateNestedOneWithoutFeeStructuresInput;
    intake?: IntakeCreateNestedOneWithoutFeeStructuresInput;
    invoices?: InvoiceCreateNestedManyWithoutFeeStructureInput;
  };

  export type FeeStructureUncheckedCreateInput = {
    id?: number;
    name: string;
    amount: number;
    currency?: string;
    programId: number;
    intakeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invoices?: InvoiceUncheckedCreateNestedManyWithoutFeeStructureInput;
  };

  export type FeeStructureUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    program?: ProgramUpdateOneRequiredWithoutFeeStructuresNestedInput;
    intake?: IntakeUpdateOneWithoutFeeStructuresNestedInput;
    invoices?: InvoiceUpdateManyWithoutFeeStructureNestedInput;
  };

  export type FeeStructureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    programId?: IntFieldUpdateOperationsInput | number;
    intakeId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: InvoiceUncheckedUpdateManyWithoutFeeStructureNestedInput;
  };

  export type FeeStructureCreateManyInput = {
    id?: number;
    name: string;
    amount: number;
    currency?: string;
    programId: number;
    intakeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type FeeStructureUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeeStructureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    programId?: IntFieldUpdateOperationsInput | number;
    intakeId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvoiceCreateInput = {
    invoiceNumber: string;
    amount: number;
    paidAmount?: number;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: StudentCreateNestedOneWithoutInvoicesInput;
    feeStructure: FeeStructureCreateNestedOneWithoutInvoicesInput;
    payments?: PaymentCreateNestedManyWithoutInvoiceInput;
  };

  export type InvoiceUncheckedCreateInput = {
    id?: number;
    invoiceNumber: string;
    studentId: number;
    feeStructureId: number;
    amount: number;
    paidAmount?: number;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput;
  };

  export type InvoiceUpdateInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    paidAmount?: FloatFieldUpdateOperationsInput | number;
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: StudentUpdateOneRequiredWithoutInvoicesNestedInput;
    feeStructure?: FeeStructureUpdateOneRequiredWithoutInvoicesNestedInput;
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput;
  };

  export type InvoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    invoiceNumber?: StringFieldUpdateOperationsInput | string;
    studentId?: IntFieldUpdateOperationsInput | number;
    feeStructureId?: IntFieldUpdateOperationsInput | number;
    amount?: FloatFieldUpdateOperationsInput | number;
    paidAmount?: FloatFieldUpdateOperationsInput | number;
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput;
  };

  export type InvoiceCreateManyInput = {
    id?: number;
    invoiceNumber: string;
    studentId: number;
    feeStructureId: number;
    amount: number;
    paidAmount?: number;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InvoiceUpdateManyMutationInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    paidAmount?: FloatFieldUpdateOperationsInput | number;
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    invoiceNumber?: StringFieldUpdateOperationsInput | string;
    studentId?: IntFieldUpdateOperationsInput | number;
    feeStructureId?: IntFieldUpdateOperationsInput | number;
    amount?: FloatFieldUpdateOperationsInput | number;
    paidAmount?: FloatFieldUpdateOperationsInput | number;
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentCreateInput = {
    amount: number;
    method: string;
    proofUrl?: string | null;
    reference?: string | null;
    status?: $Enums.PaymentStatus;
    notes?: string | null;
    verifiedAt?: Date | string | null;
    paymentDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invoice: InvoiceCreateNestedOneWithoutPaymentsInput;
  };

  export type PaymentUncheckedCreateInput = {
    id?: number;
    invoiceId: number;
    amount: number;
    method: string;
    proofUrl?: string | null;
    reference?: string | null;
    status?: $Enums.PaymentStatus;
    notes?: string | null;
    verifiedAt?: Date | string | null;
    paymentDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number;
    method?: StringFieldUpdateOperationsInput | string;
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    reference?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: InvoiceUpdateOneRequiredWithoutPaymentsNestedInput;
  };

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    invoiceId?: IntFieldUpdateOperationsInput | number;
    amount?: FloatFieldUpdateOperationsInput | number;
    method?: StringFieldUpdateOperationsInput | string;
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    reference?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentCreateManyInput = {
    id?: number;
    invoiceId: number;
    amount: number;
    method: string;
    proofUrl?: string | null;
    reference?: string | null;
    status?: $Enums.PaymentStatus;
    notes?: string | null;
    verifiedAt?: Date | string | null;
    paymentDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number;
    method?: StringFieldUpdateOperationsInput | string;
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    reference?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    invoiceId?: IntFieldUpdateOperationsInput | number;
    amount?: FloatFieldUpdateOperationsInput | number;
    method?: StringFieldUpdateOperationsInput | string;
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    reference?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NoticeCreateInput = {
    title: string;
    content: string;
    audience?: $Enums.NoticeAudience;
    isPublished?: boolean;
    expiryDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    program?: ProgramCreateNestedOneWithoutNoticesInput;
    intake?: IntakeCreateNestedOneWithoutNoticesInput;
  };

  export type NoticeUncheckedCreateInput = {
    id?: number;
    title: string;
    content: string;
    audience?: $Enums.NoticeAudience;
    programId?: number | null;
    intakeId?: number | null;
    isPublished?: boolean;
    expiryDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NoticeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    audience?:
      | EnumNoticeAudienceFieldUpdateOperationsInput
      | $Enums.NoticeAudience;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    program?: ProgramUpdateOneWithoutNoticesNestedInput;
    intake?: IntakeUpdateOneWithoutNoticesNestedInput;
  };

  export type NoticeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    audience?:
      | EnumNoticeAudienceFieldUpdateOperationsInput
      | $Enums.NoticeAudience;
    programId?: NullableIntFieldUpdateOperationsInput | number | null;
    intakeId?: NullableIntFieldUpdateOperationsInput | number | null;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NoticeCreateManyInput = {
    id?: number;
    title: string;
    content: string;
    audience?: $Enums.NoticeAudience;
    programId?: number | null;
    intakeId?: number | null;
    isPublished?: boolean;
    expiryDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NoticeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    audience?:
      | EnumNoticeAudienceFieldUpdateOperationsInput
      | $Enums.NoticeAudience;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NoticeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    audience?:
      | EnumNoticeAudienceFieldUpdateOperationsInput
      | $Enums.NoticeAudience;
    programId?: NullableIntFieldUpdateOperationsInput | number | null;
    intakeId?: NullableIntFieldUpdateOperationsInput | number | null;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogCreateInput = {
    action: string;
    entity: string;
    entityId: string;
    details?: string | null;
    ipAddress?: string | null;
    timestamp?: Date | string;
    user: UserCreateNestedOneWithoutAuditLogsInput;
  };

  export type AuditLogUncheckedCreateInput = {
    id?: number;
    userId: number;
    action: string;
    entity: string;
    entityId: string;
    details?: string | null;
    ipAddress?: string | null;
    timestamp?: Date | string;
  };

  export type AuditLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string;
    entity?: StringFieldUpdateOperationsInput | string;
    entityId?: StringFieldUpdateOperationsInput | string;
    details?: NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput;
  };

  export type AuditLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    action?: StringFieldUpdateOperationsInput | string;
    entity?: StringFieldUpdateOperationsInput | string;
    entityId?: StringFieldUpdateOperationsInput | string;
    details?: NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogCreateManyInput = {
    id?: number;
    userId: number;
    action: string;
    entity: string;
    entityId: string;
    details?: string | null;
    ipAddress?: string | null;
    timestamp?: Date | string;
  };

  export type AuditLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string;
    entity?: StringFieldUpdateOperationsInput | string;
    entityId?: StringFieldUpdateOperationsInput | string;
    details?: NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    action?: StringFieldUpdateOperationsInput | string;
    entity?: StringFieldUpdateOperationsInput | string;
    entityId?: StringFieldUpdateOperationsInput | string;
    details?: NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type ApplicantNullableRelationFilter = {
    is?: ApplicantWhereInput | null;
    isNot?: ApplicantWhereInput | null;
  };

  export type StudentNullableRelationFilter = {
    is?: StudentWhereInput | null;
    isNot?: StudentWhereInput | null;
  };

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput;
    some?: AuditLogWhereInput;
    none?: AuditLogWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    refreshToken?: SortOrder;
    resetToken?: SortOrder;
    resetTokenExpiry?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    refreshToken?: SortOrder;
    resetToken?: SortOrder;
    resetTokenExpiry?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    refreshToken?: SortOrder;
    resetToken?: SortOrder;
    resetTokenExpiry?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumUserStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.UserStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUserStatusFilter<$PrismaModel>;
    _max?: NestedEnumUserStatusFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type ProgramListRelationFilter = {
    every?: ProgramWhereInput;
    some?: ProgramWhereInput;
    none?: ProgramWhereInput;
  };

  export type ProgramOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    code?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type DepartmentAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    code?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    code?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type DepartmentSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type DepartmentRelationFilter = {
    is?: DepartmentWhereInput;
    isNot?: DepartmentWhereInput;
  };

  export type IntakeListRelationFilter = {
    every?: IntakeWhereInput;
    some?: IntakeWhereInput;
    none?: IntakeWhereInput;
  };

  export type ApplicantListRelationFilter = {
    every?: ApplicantWhereInput;
    some?: ApplicantWhereInput;
    none?: ApplicantWhereInput;
  };

  export type FeeStructureListRelationFilter = {
    every?: FeeStructureWhereInput;
    some?: FeeStructureWhereInput;
    none?: FeeStructureWhereInput;
  };

  export type NoticeListRelationFilter = {
    every?: NoticeWhereInput;
    some?: NoticeWhereInput;
    none?: NoticeWhereInput;
  };

  export type IntakeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ApplicantOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type FeeStructureOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type NoticeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProgramCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    code?: SortOrder;
    description?: SortOrder;
    duration?: SortOrder;
    departmentId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProgramAvgOrderByAggregateInput = {
    id?: SortOrder;
    departmentId?: SortOrder;
  };

  export type ProgramMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    code?: SortOrder;
    description?: SortOrder;
    duration?: SortOrder;
    departmentId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProgramMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    code?: SortOrder;
    description?: SortOrder;
    duration?: SortOrder;
    departmentId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProgramSumOrderByAggregateInput = {
    id?: SortOrder;
    departmentId?: SortOrder;
  };

  export type EnumIntakeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IntakeStatus | EnumIntakeStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.IntakeStatus[]
      | ListEnumIntakeStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.IntakeStatus[]
      | ListEnumIntakeStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumIntakeStatusFilter<$PrismaModel> | $Enums.IntakeStatus;
  };

  export type ProgramRelationFilter = {
    is?: ProgramWhereInput;
    isNot?: ProgramWhereInput;
  };

  export type IntakeCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    programId?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    applicationDeadline?: SortOrder;
    maxCapacity?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type IntakeAvgOrderByAggregateInput = {
    id?: SortOrder;
    programId?: SortOrder;
    maxCapacity?: SortOrder;
  };

  export type IntakeMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    programId?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    applicationDeadline?: SortOrder;
    maxCapacity?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type IntakeMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    programId?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    applicationDeadline?: SortOrder;
    maxCapacity?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type IntakeSumOrderByAggregateInput = {
    id?: SortOrder;
    programId?: SortOrder;
    maxCapacity?: SortOrder;
  };

  export type EnumIntakeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IntakeStatus | EnumIntakeStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.IntakeStatus[]
      | ListEnumIntakeStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.IntakeStatus[]
      | ListEnumIntakeStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumIntakeStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.IntakeStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumIntakeStatusFilter<$PrismaModel>;
    _max?: NestedEnumIntakeStatusFilter<$PrismaModel>;
  };

  export type EnumApplicantStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ApplicantStatus
      | EnumApplicantStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ApplicantStatus[]
      | ListEnumApplicantStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ApplicantStatus[]
      | ListEnumApplicantStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumApplicantStatusFilter<$PrismaModel>
      | $Enums.ApplicantStatus;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type IntakeRelationFilter = {
    is?: IntakeWhereInput;
    isNot?: IntakeWhereInput;
  };

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null;
    isNot?: UserWhereInput | null;
  };

  export type ApplicantCountOrderByAggregateInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    dateOfBirth?: SortOrder;
    address?: SortOrder;
    nationality?: SortOrder;
    previousEdu?: SortOrder;
    intakeId?: SortOrder;
    programId?: SortOrder;
    status?: SortOrder;
    rejectionNote?: SortOrder;
    submittedAt?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ApplicantAvgOrderByAggregateInput = {
    id?: SortOrder;
    intakeId?: SortOrder;
    programId?: SortOrder;
    userId?: SortOrder;
  };

  export type ApplicantMaxOrderByAggregateInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    dateOfBirth?: SortOrder;
    address?: SortOrder;
    nationality?: SortOrder;
    previousEdu?: SortOrder;
    intakeId?: SortOrder;
    programId?: SortOrder;
    status?: SortOrder;
    rejectionNote?: SortOrder;
    submittedAt?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ApplicantMinOrderByAggregateInput = {
    id?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    dateOfBirth?: SortOrder;
    address?: SortOrder;
    nationality?: SortOrder;
    previousEdu?: SortOrder;
    intakeId?: SortOrder;
    programId?: SortOrder;
    status?: SortOrder;
    rejectionNote?: SortOrder;
    submittedAt?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ApplicantSumOrderByAggregateInput = {
    id?: SortOrder;
    intakeId?: SortOrder;
    programId?: SortOrder;
    userId?: SortOrder;
  };

  export type EnumApplicantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ApplicantStatus
      | EnumApplicantStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ApplicantStatus[]
      | ListEnumApplicantStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ApplicantStatus[]
      | ListEnumApplicantStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumApplicantStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.ApplicantStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumApplicantStatusFilter<$PrismaModel>;
    _max?: NestedEnumApplicantStatusFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type ApplicantRelationFilter = {
    is?: ApplicantWhereInput;
    isNot?: ApplicantWhereInput;
  };

  export type UserRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput;
    some?: InvoiceWhereInput;
    none?: InvoiceWhereInput;
  };

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder;
    studentId?: SortOrder;
    applicantId?: SortOrder;
    userId?: SortOrder;
    enrolledAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder;
    applicantId?: SortOrder;
    userId?: SortOrder;
  };

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder;
    studentId?: SortOrder;
    applicantId?: SortOrder;
    userId?: SortOrder;
    enrolledAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder;
    studentId?: SortOrder;
    applicantId?: SortOrder;
    userId?: SortOrder;
    enrolledAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder;
    applicantId?: SortOrder;
    userId?: SortOrder;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type IntakeNullableRelationFilter = {
    is?: IntakeWhereInput | null;
    isNot?: IntakeWhereInput | null;
  };

  export type FeeStructureCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    programId?: SortOrder;
    intakeId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type FeeStructureAvgOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    programId?: SortOrder;
    intakeId?: SortOrder;
  };

  export type FeeStructureMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    programId?: SortOrder;
    intakeId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type FeeStructureMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    amount?: SortOrder;
    currency?: SortOrder;
    programId?: SortOrder;
    intakeId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type FeeStructureSumOrderByAggregateInput = {
    id?: SortOrder;
    amount?: SortOrder;
    programId?: SortOrder;
    intakeId?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.InvoiceStatus
      | EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.InvoiceStatus[]
      | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.InvoiceStatus[]
      | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus;
  };

  export type StudentRelationFilter = {
    is?: StudentWhereInput;
    isNot?: StudentWhereInput;
  };

  export type FeeStructureRelationFilter = {
    is?: FeeStructureWhereInput;
    isNot?: FeeStructureWhereInput;
  };

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput;
    some?: PaymentWhereInput;
    none?: PaymentWhereInput;
  };

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder;
    invoiceNumber?: SortOrder;
    studentId?: SortOrder;
    feeStructureId?: SortOrder;
    amount?: SortOrder;
    paidAmount?: SortOrder;
    dueDate?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type InvoiceAvgOrderByAggregateInput = {
    id?: SortOrder;
    studentId?: SortOrder;
    feeStructureId?: SortOrder;
    amount?: SortOrder;
    paidAmount?: SortOrder;
  };

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder;
    invoiceNumber?: SortOrder;
    studentId?: SortOrder;
    feeStructureId?: SortOrder;
    amount?: SortOrder;
    paidAmount?: SortOrder;
    dueDate?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder;
    invoiceNumber?: SortOrder;
    studentId?: SortOrder;
    feeStructureId?: SortOrder;
    amount?: SortOrder;
    paidAmount?: SortOrder;
    dueDate?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type InvoiceSumOrderByAggregateInput = {
    id?: SortOrder;
    studentId?: SortOrder;
    feeStructureId?: SortOrder;
    amount?: SortOrder;
    paidAmount?: SortOrder;
  };

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.InvoiceStatus
      | EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.InvoiceStatus[]
      | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.InvoiceStatus[]
      | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.InvoiceStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>;
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>;
  };

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
  };

  export type InvoiceRelationFilter = {
    is?: InvoiceWhereInput;
    isNot?: InvoiceWhereInput;
  };

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder;
    invoiceId?: SortOrder;
    amount?: SortOrder;
    method?: SortOrder;
    proofUrl?: SortOrder;
    reference?: SortOrder;
    status?: SortOrder;
    notes?: SortOrder;
    verifiedAt?: SortOrder;
    paymentDate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder;
    invoiceId?: SortOrder;
    amount?: SortOrder;
  };

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder;
    invoiceId?: SortOrder;
    amount?: SortOrder;
    method?: SortOrder;
    proofUrl?: SortOrder;
    reference?: SortOrder;
    status?: SortOrder;
    notes?: SortOrder;
    verifiedAt?: SortOrder;
    paymentDate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder;
    invoiceId?: SortOrder;
    amount?: SortOrder;
    method?: SortOrder;
    proofUrl?: SortOrder;
    reference?: SortOrder;
    status?: SortOrder;
    notes?: SortOrder;
    verifiedAt?: SortOrder;
    paymentDate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder;
    invoiceId?: SortOrder;
    amount?: SortOrder;
  };

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.PaymentStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>;
  };

  export type EnumNoticeAudienceFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.NoticeAudience
      | EnumNoticeAudienceFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.NoticeAudience[]
      | ListEnumNoticeAudienceFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.NoticeAudience[]
      | ListEnumNoticeAudienceFieldRefInput<$PrismaModel>;
    not?: NestedEnumNoticeAudienceFilter<$PrismaModel> | $Enums.NoticeAudience;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type ProgramNullableRelationFilter = {
    is?: ProgramWhereInput | null;
    isNot?: ProgramWhereInput | null;
  };

  export type NoticeCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    audience?: SortOrder;
    programId?: SortOrder;
    intakeId?: SortOrder;
    isPublished?: SortOrder;
    expiryDate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type NoticeAvgOrderByAggregateInput = {
    id?: SortOrder;
    programId?: SortOrder;
    intakeId?: SortOrder;
  };

  export type NoticeMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    audience?: SortOrder;
    programId?: SortOrder;
    intakeId?: SortOrder;
    isPublished?: SortOrder;
    expiryDate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type NoticeMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    audience?: SortOrder;
    programId?: SortOrder;
    intakeId?: SortOrder;
    isPublished?: SortOrder;
    expiryDate?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type NoticeSumOrderByAggregateInput = {
    id?: SortOrder;
    programId?: SortOrder;
    intakeId?: SortOrder;
  };

  export type EnumNoticeAudienceWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.NoticeAudience
      | EnumNoticeAudienceFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.NoticeAudience[]
      | ListEnumNoticeAudienceFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.NoticeAudience[]
      | ListEnumNoticeAudienceFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumNoticeAudienceWithAggregatesFilter<$PrismaModel>
      | $Enums.NoticeAudience;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumNoticeAudienceFilter<$PrismaModel>;
    _max?: NestedEnumNoticeAudienceFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    action?: SortOrder;
    entity?: SortOrder;
    entityId?: SortOrder;
    details?: SortOrder;
    ipAddress?: SortOrder;
    timestamp?: SortOrder;
  };

  export type AuditLogAvgOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    action?: SortOrder;
    entity?: SortOrder;
    entityId?: SortOrder;
    details?: SortOrder;
    ipAddress?: SortOrder;
    timestamp?: SortOrder;
  };

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    action?: SortOrder;
    entity?: SortOrder;
    entityId?: SortOrder;
    details?: SortOrder;
    ipAddress?: SortOrder;
    timestamp?: SortOrder;
  };

  export type AuditLogSumOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type ApplicantCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ApplicantCreateWithoutUserInput,
      ApplicantUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ApplicantCreateOrConnectWithoutUserInput;
    connect?: ApplicantWhereUniqueInput;
  };

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<
      StudentCreateWithoutUserInput,
      StudentUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput;
    connect?: StudentWhereUniqueInput;
  };

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AuditLogCreateWithoutUserInput,
          AuditLogUncheckedCreateWithoutUserInput
        >
      | AuditLogCreateWithoutUserInput[]
      | AuditLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutUserInput
      | AuditLogCreateOrConnectWithoutUserInput[];
    createMany?: AuditLogCreateManyUserInputEnvelope;
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
  };

  export type ApplicantUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ApplicantCreateWithoutUserInput,
      ApplicantUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ApplicantCreateOrConnectWithoutUserInput;
    connect?: ApplicantWhereUniqueInput;
  };

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      StudentCreateWithoutUserInput,
      StudentUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput;
    connect?: StudentWhereUniqueInput;
  };

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AuditLogCreateWithoutUserInput,
          AuditLogUncheckedCreateWithoutUserInput
        >
      | AuditLogCreateWithoutUserInput[]
      | AuditLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutUserInput
      | AuditLogCreateOrConnectWithoutUserInput[];
    createMany?: AuditLogCreateManyUserInputEnvelope;
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
  };

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type ApplicantUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ApplicantCreateWithoutUserInput,
      ApplicantUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ApplicantCreateOrConnectWithoutUserInput;
    upsert?: ApplicantUpsertWithoutUserInput;
    disconnect?: ApplicantWhereInput | boolean;
    delete?: ApplicantWhereInput | boolean;
    connect?: ApplicantWhereUniqueInput;
    update?: XOR<
      XOR<
        ApplicantUpdateToOneWithWhereWithoutUserInput,
        ApplicantUpdateWithoutUserInput
      >,
      ApplicantUncheckedUpdateWithoutUserInput
    >;
  };

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      StudentCreateWithoutUserInput,
      StudentUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput;
    upsert?: StudentUpsertWithoutUserInput;
    disconnect?: StudentWhereInput | boolean;
    delete?: StudentWhereInput | boolean;
    connect?: StudentWhereUniqueInput;
    update?: XOR<
      XOR<
        StudentUpdateToOneWithWhereWithoutUserInput,
        StudentUpdateWithoutUserInput
      >,
      StudentUncheckedUpdateWithoutUserInput
    >;
  };

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AuditLogCreateWithoutUserInput,
          AuditLogUncheckedCreateWithoutUserInput
        >
      | AuditLogCreateWithoutUserInput[]
      | AuditLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutUserInput
      | AuditLogCreateOrConnectWithoutUserInput[];
    upsert?:
      | AuditLogUpsertWithWhereUniqueWithoutUserInput
      | AuditLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AuditLogCreateManyUserInputEnvelope;
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    update?:
      | AuditLogUpdateWithWhereUniqueWithoutUserInput
      | AuditLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AuditLogUpdateManyWithWhereWithoutUserInput
      | AuditLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type ApplicantUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ApplicantCreateWithoutUserInput,
      ApplicantUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ApplicantCreateOrConnectWithoutUserInput;
    upsert?: ApplicantUpsertWithoutUserInput;
    disconnect?: ApplicantWhereInput | boolean;
    delete?: ApplicantWhereInput | boolean;
    connect?: ApplicantWhereUniqueInput;
    update?: XOR<
      XOR<
        ApplicantUpdateToOneWithWhereWithoutUserInput,
        ApplicantUpdateWithoutUserInput
      >,
      ApplicantUncheckedUpdateWithoutUserInput
    >;
  };

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      StudentCreateWithoutUserInput,
      StudentUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput;
    upsert?: StudentUpsertWithoutUserInput;
    disconnect?: StudentWhereInput | boolean;
    delete?: StudentWhereInput | boolean;
    connect?: StudentWhereUniqueInput;
    update?: XOR<
      XOR<
        StudentUpdateToOneWithWhereWithoutUserInput,
        StudentUpdateWithoutUserInput
      >,
      StudentUncheckedUpdateWithoutUserInput
    >;
  };

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AuditLogCreateWithoutUserInput,
          AuditLogUncheckedCreateWithoutUserInput
        >
      | AuditLogCreateWithoutUserInput[]
      | AuditLogUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AuditLogCreateOrConnectWithoutUserInput
      | AuditLogCreateOrConnectWithoutUserInput[];
    upsert?:
      | AuditLogUpsertWithWhereUniqueWithoutUserInput
      | AuditLogUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AuditLogCreateManyUserInputEnvelope;
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[];
    update?:
      | AuditLogUpdateWithWhereUniqueWithoutUserInput
      | AuditLogUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AuditLogUpdateManyWithWhereWithoutUserInput
      | AuditLogUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
  };

  export type ProgramCreateNestedManyWithoutDepartmentInput = {
    create?:
      | XOR<
          ProgramCreateWithoutDepartmentInput,
          ProgramUncheckedCreateWithoutDepartmentInput
        >
      | ProgramCreateWithoutDepartmentInput[]
      | ProgramUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?:
      | ProgramCreateOrConnectWithoutDepartmentInput
      | ProgramCreateOrConnectWithoutDepartmentInput[];
    createMany?: ProgramCreateManyDepartmentInputEnvelope;
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[];
  };

  export type ProgramUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?:
      | XOR<
          ProgramCreateWithoutDepartmentInput,
          ProgramUncheckedCreateWithoutDepartmentInput
        >
      | ProgramCreateWithoutDepartmentInput[]
      | ProgramUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?:
      | ProgramCreateOrConnectWithoutDepartmentInput
      | ProgramCreateOrConnectWithoutDepartmentInput[];
    createMany?: ProgramCreateManyDepartmentInputEnvelope;
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[];
  };

  export type ProgramUpdateManyWithoutDepartmentNestedInput = {
    create?:
      | XOR<
          ProgramCreateWithoutDepartmentInput,
          ProgramUncheckedCreateWithoutDepartmentInput
        >
      | ProgramCreateWithoutDepartmentInput[]
      | ProgramUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?:
      | ProgramCreateOrConnectWithoutDepartmentInput
      | ProgramCreateOrConnectWithoutDepartmentInput[];
    upsert?:
      | ProgramUpsertWithWhereUniqueWithoutDepartmentInput
      | ProgramUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: ProgramCreateManyDepartmentInputEnvelope;
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[];
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[];
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[];
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[];
    update?:
      | ProgramUpdateWithWhereUniqueWithoutDepartmentInput
      | ProgramUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?:
      | ProgramUpdateManyWithWhereWithoutDepartmentInput
      | ProgramUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[];
  };

  export type ProgramUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?:
      | XOR<
          ProgramCreateWithoutDepartmentInput,
          ProgramUncheckedCreateWithoutDepartmentInput
        >
      | ProgramCreateWithoutDepartmentInput[]
      | ProgramUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?:
      | ProgramCreateOrConnectWithoutDepartmentInput
      | ProgramCreateOrConnectWithoutDepartmentInput[];
    upsert?:
      | ProgramUpsertWithWhereUniqueWithoutDepartmentInput
      | ProgramUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: ProgramCreateManyDepartmentInputEnvelope;
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[];
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[];
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[];
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[];
    update?:
      | ProgramUpdateWithWhereUniqueWithoutDepartmentInput
      | ProgramUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?:
      | ProgramUpdateManyWithWhereWithoutDepartmentInput
      | ProgramUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[];
  };

  export type DepartmentCreateNestedOneWithoutProgramsInput = {
    create?: XOR<
      DepartmentCreateWithoutProgramsInput,
      DepartmentUncheckedCreateWithoutProgramsInput
    >;
    connectOrCreate?: DepartmentCreateOrConnectWithoutProgramsInput;
    connect?: DepartmentWhereUniqueInput;
  };

  export type IntakeCreateNestedManyWithoutProgramInput = {
    create?:
      | XOR<
          IntakeCreateWithoutProgramInput,
          IntakeUncheckedCreateWithoutProgramInput
        >
      | IntakeCreateWithoutProgramInput[]
      | IntakeUncheckedCreateWithoutProgramInput[];
    connectOrCreate?:
      | IntakeCreateOrConnectWithoutProgramInput
      | IntakeCreateOrConnectWithoutProgramInput[];
    createMany?: IntakeCreateManyProgramInputEnvelope;
    connect?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[];
  };

  export type ApplicantCreateNestedManyWithoutProgramInput = {
    create?:
      | XOR<
          ApplicantCreateWithoutProgramInput,
          ApplicantUncheckedCreateWithoutProgramInput
        >
      | ApplicantCreateWithoutProgramInput[]
      | ApplicantUncheckedCreateWithoutProgramInput[];
    connectOrCreate?:
      | ApplicantCreateOrConnectWithoutProgramInput
      | ApplicantCreateOrConnectWithoutProgramInput[];
    createMany?: ApplicantCreateManyProgramInputEnvelope;
    connect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
  };

  export type FeeStructureCreateNestedManyWithoutProgramInput = {
    create?:
      | XOR<
          FeeStructureCreateWithoutProgramInput,
          FeeStructureUncheckedCreateWithoutProgramInput
        >
      | FeeStructureCreateWithoutProgramInput[]
      | FeeStructureUncheckedCreateWithoutProgramInput[];
    connectOrCreate?:
      | FeeStructureCreateOrConnectWithoutProgramInput
      | FeeStructureCreateOrConnectWithoutProgramInput[];
    createMany?: FeeStructureCreateManyProgramInputEnvelope;
    connect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
  };

  export type NoticeCreateNestedManyWithoutProgramInput = {
    create?:
      | XOR<
          NoticeCreateWithoutProgramInput,
          NoticeUncheckedCreateWithoutProgramInput
        >
      | NoticeCreateWithoutProgramInput[]
      | NoticeUncheckedCreateWithoutProgramInput[];
    connectOrCreate?:
      | NoticeCreateOrConnectWithoutProgramInput
      | NoticeCreateOrConnectWithoutProgramInput[];
    createMany?: NoticeCreateManyProgramInputEnvelope;
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
  };

  export type IntakeUncheckedCreateNestedManyWithoutProgramInput = {
    create?:
      | XOR<
          IntakeCreateWithoutProgramInput,
          IntakeUncheckedCreateWithoutProgramInput
        >
      | IntakeCreateWithoutProgramInput[]
      | IntakeUncheckedCreateWithoutProgramInput[];
    connectOrCreate?:
      | IntakeCreateOrConnectWithoutProgramInput
      | IntakeCreateOrConnectWithoutProgramInput[];
    createMany?: IntakeCreateManyProgramInputEnvelope;
    connect?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[];
  };

  export type ApplicantUncheckedCreateNestedManyWithoutProgramInput = {
    create?:
      | XOR<
          ApplicantCreateWithoutProgramInput,
          ApplicantUncheckedCreateWithoutProgramInput
        >
      | ApplicantCreateWithoutProgramInput[]
      | ApplicantUncheckedCreateWithoutProgramInput[];
    connectOrCreate?:
      | ApplicantCreateOrConnectWithoutProgramInput
      | ApplicantCreateOrConnectWithoutProgramInput[];
    createMany?: ApplicantCreateManyProgramInputEnvelope;
    connect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
  };

  export type FeeStructureUncheckedCreateNestedManyWithoutProgramInput = {
    create?:
      | XOR<
          FeeStructureCreateWithoutProgramInput,
          FeeStructureUncheckedCreateWithoutProgramInput
        >
      | FeeStructureCreateWithoutProgramInput[]
      | FeeStructureUncheckedCreateWithoutProgramInput[];
    connectOrCreate?:
      | FeeStructureCreateOrConnectWithoutProgramInput
      | FeeStructureCreateOrConnectWithoutProgramInput[];
    createMany?: FeeStructureCreateManyProgramInputEnvelope;
    connect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
  };

  export type NoticeUncheckedCreateNestedManyWithoutProgramInput = {
    create?:
      | XOR<
          NoticeCreateWithoutProgramInput,
          NoticeUncheckedCreateWithoutProgramInput
        >
      | NoticeCreateWithoutProgramInput[]
      | NoticeUncheckedCreateWithoutProgramInput[];
    connectOrCreate?:
      | NoticeCreateOrConnectWithoutProgramInput
      | NoticeCreateOrConnectWithoutProgramInput[];
    createMany?: NoticeCreateManyProgramInputEnvelope;
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
  };

  export type DepartmentUpdateOneRequiredWithoutProgramsNestedInput = {
    create?: XOR<
      DepartmentCreateWithoutProgramsInput,
      DepartmentUncheckedCreateWithoutProgramsInput
    >;
    connectOrCreate?: DepartmentCreateOrConnectWithoutProgramsInput;
    upsert?: DepartmentUpsertWithoutProgramsInput;
    connect?: DepartmentWhereUniqueInput;
    update?: XOR<
      XOR<
        DepartmentUpdateToOneWithWhereWithoutProgramsInput,
        DepartmentUpdateWithoutProgramsInput
      >,
      DepartmentUncheckedUpdateWithoutProgramsInput
    >;
  };

  export type IntakeUpdateManyWithoutProgramNestedInput = {
    create?:
      | XOR<
          IntakeCreateWithoutProgramInput,
          IntakeUncheckedCreateWithoutProgramInput
        >
      | IntakeCreateWithoutProgramInput[]
      | IntakeUncheckedCreateWithoutProgramInput[];
    connectOrCreate?:
      | IntakeCreateOrConnectWithoutProgramInput
      | IntakeCreateOrConnectWithoutProgramInput[];
    upsert?:
      | IntakeUpsertWithWhereUniqueWithoutProgramInput
      | IntakeUpsertWithWhereUniqueWithoutProgramInput[];
    createMany?: IntakeCreateManyProgramInputEnvelope;
    set?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[];
    disconnect?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[];
    delete?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[];
    connect?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[];
    update?:
      | IntakeUpdateWithWhereUniqueWithoutProgramInput
      | IntakeUpdateWithWhereUniqueWithoutProgramInput[];
    updateMany?:
      | IntakeUpdateManyWithWhereWithoutProgramInput
      | IntakeUpdateManyWithWhereWithoutProgramInput[];
    deleteMany?: IntakeScalarWhereInput | IntakeScalarWhereInput[];
  };

  export type ApplicantUpdateManyWithoutProgramNestedInput = {
    create?:
      | XOR<
          ApplicantCreateWithoutProgramInput,
          ApplicantUncheckedCreateWithoutProgramInput
        >
      | ApplicantCreateWithoutProgramInput[]
      | ApplicantUncheckedCreateWithoutProgramInput[];
    connectOrCreate?:
      | ApplicantCreateOrConnectWithoutProgramInput
      | ApplicantCreateOrConnectWithoutProgramInput[];
    upsert?:
      | ApplicantUpsertWithWhereUniqueWithoutProgramInput
      | ApplicantUpsertWithWhereUniqueWithoutProgramInput[];
    createMany?: ApplicantCreateManyProgramInputEnvelope;
    set?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    disconnect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    delete?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    connect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    update?:
      | ApplicantUpdateWithWhereUniqueWithoutProgramInput
      | ApplicantUpdateWithWhereUniqueWithoutProgramInput[];
    updateMany?:
      | ApplicantUpdateManyWithWhereWithoutProgramInput
      | ApplicantUpdateManyWithWhereWithoutProgramInput[];
    deleteMany?: ApplicantScalarWhereInput | ApplicantScalarWhereInput[];
  };

  export type FeeStructureUpdateManyWithoutProgramNestedInput = {
    create?:
      | XOR<
          FeeStructureCreateWithoutProgramInput,
          FeeStructureUncheckedCreateWithoutProgramInput
        >
      | FeeStructureCreateWithoutProgramInput[]
      | FeeStructureUncheckedCreateWithoutProgramInput[];
    connectOrCreate?:
      | FeeStructureCreateOrConnectWithoutProgramInput
      | FeeStructureCreateOrConnectWithoutProgramInput[];
    upsert?:
      | FeeStructureUpsertWithWhereUniqueWithoutProgramInput
      | FeeStructureUpsertWithWhereUniqueWithoutProgramInput[];
    createMany?: FeeStructureCreateManyProgramInputEnvelope;
    set?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
    disconnect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
    delete?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
    connect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
    update?:
      | FeeStructureUpdateWithWhereUniqueWithoutProgramInput
      | FeeStructureUpdateWithWhereUniqueWithoutProgramInput[];
    updateMany?:
      | FeeStructureUpdateManyWithWhereWithoutProgramInput
      | FeeStructureUpdateManyWithWhereWithoutProgramInput[];
    deleteMany?: FeeStructureScalarWhereInput | FeeStructureScalarWhereInput[];
  };

  export type NoticeUpdateManyWithoutProgramNestedInput = {
    create?:
      | XOR<
          NoticeCreateWithoutProgramInput,
          NoticeUncheckedCreateWithoutProgramInput
        >
      | NoticeCreateWithoutProgramInput[]
      | NoticeUncheckedCreateWithoutProgramInput[];
    connectOrCreate?:
      | NoticeCreateOrConnectWithoutProgramInput
      | NoticeCreateOrConnectWithoutProgramInput[];
    upsert?:
      | NoticeUpsertWithWhereUniqueWithoutProgramInput
      | NoticeUpsertWithWhereUniqueWithoutProgramInput[];
    createMany?: NoticeCreateManyProgramInputEnvelope;
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
    update?:
      | NoticeUpdateWithWhereUniqueWithoutProgramInput
      | NoticeUpdateWithWhereUniqueWithoutProgramInput[];
    updateMany?:
      | NoticeUpdateManyWithWhereWithoutProgramInput
      | NoticeUpdateManyWithWhereWithoutProgramInput[];
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[];
  };

  export type IntakeUncheckedUpdateManyWithoutProgramNestedInput = {
    create?:
      | XOR<
          IntakeCreateWithoutProgramInput,
          IntakeUncheckedCreateWithoutProgramInput
        >
      | IntakeCreateWithoutProgramInput[]
      | IntakeUncheckedCreateWithoutProgramInput[];
    connectOrCreate?:
      | IntakeCreateOrConnectWithoutProgramInput
      | IntakeCreateOrConnectWithoutProgramInput[];
    upsert?:
      | IntakeUpsertWithWhereUniqueWithoutProgramInput
      | IntakeUpsertWithWhereUniqueWithoutProgramInput[];
    createMany?: IntakeCreateManyProgramInputEnvelope;
    set?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[];
    disconnect?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[];
    delete?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[];
    connect?: IntakeWhereUniqueInput | IntakeWhereUniqueInput[];
    update?:
      | IntakeUpdateWithWhereUniqueWithoutProgramInput
      | IntakeUpdateWithWhereUniqueWithoutProgramInput[];
    updateMany?:
      | IntakeUpdateManyWithWhereWithoutProgramInput
      | IntakeUpdateManyWithWhereWithoutProgramInput[];
    deleteMany?: IntakeScalarWhereInput | IntakeScalarWhereInput[];
  };

  export type ApplicantUncheckedUpdateManyWithoutProgramNestedInput = {
    create?:
      | XOR<
          ApplicantCreateWithoutProgramInput,
          ApplicantUncheckedCreateWithoutProgramInput
        >
      | ApplicantCreateWithoutProgramInput[]
      | ApplicantUncheckedCreateWithoutProgramInput[];
    connectOrCreate?:
      | ApplicantCreateOrConnectWithoutProgramInput
      | ApplicantCreateOrConnectWithoutProgramInput[];
    upsert?:
      | ApplicantUpsertWithWhereUniqueWithoutProgramInput
      | ApplicantUpsertWithWhereUniqueWithoutProgramInput[];
    createMany?: ApplicantCreateManyProgramInputEnvelope;
    set?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    disconnect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    delete?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    connect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    update?:
      | ApplicantUpdateWithWhereUniqueWithoutProgramInput
      | ApplicantUpdateWithWhereUniqueWithoutProgramInput[];
    updateMany?:
      | ApplicantUpdateManyWithWhereWithoutProgramInput
      | ApplicantUpdateManyWithWhereWithoutProgramInput[];
    deleteMany?: ApplicantScalarWhereInput | ApplicantScalarWhereInput[];
  };

  export type FeeStructureUncheckedUpdateManyWithoutProgramNestedInput = {
    create?:
      | XOR<
          FeeStructureCreateWithoutProgramInput,
          FeeStructureUncheckedCreateWithoutProgramInput
        >
      | FeeStructureCreateWithoutProgramInput[]
      | FeeStructureUncheckedCreateWithoutProgramInput[];
    connectOrCreate?:
      | FeeStructureCreateOrConnectWithoutProgramInput
      | FeeStructureCreateOrConnectWithoutProgramInput[];
    upsert?:
      | FeeStructureUpsertWithWhereUniqueWithoutProgramInput
      | FeeStructureUpsertWithWhereUniqueWithoutProgramInput[];
    createMany?: FeeStructureCreateManyProgramInputEnvelope;
    set?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
    disconnect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
    delete?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
    connect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
    update?:
      | FeeStructureUpdateWithWhereUniqueWithoutProgramInput
      | FeeStructureUpdateWithWhereUniqueWithoutProgramInput[];
    updateMany?:
      | FeeStructureUpdateManyWithWhereWithoutProgramInput
      | FeeStructureUpdateManyWithWhereWithoutProgramInput[];
    deleteMany?: FeeStructureScalarWhereInput | FeeStructureScalarWhereInput[];
  };

  export type NoticeUncheckedUpdateManyWithoutProgramNestedInput = {
    create?:
      | XOR<
          NoticeCreateWithoutProgramInput,
          NoticeUncheckedCreateWithoutProgramInput
        >
      | NoticeCreateWithoutProgramInput[]
      | NoticeUncheckedCreateWithoutProgramInput[];
    connectOrCreate?:
      | NoticeCreateOrConnectWithoutProgramInput
      | NoticeCreateOrConnectWithoutProgramInput[];
    upsert?:
      | NoticeUpsertWithWhereUniqueWithoutProgramInput
      | NoticeUpsertWithWhereUniqueWithoutProgramInput[];
    createMany?: NoticeCreateManyProgramInputEnvelope;
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
    update?:
      | NoticeUpdateWithWhereUniqueWithoutProgramInput
      | NoticeUpdateWithWhereUniqueWithoutProgramInput[];
    updateMany?:
      | NoticeUpdateManyWithWhereWithoutProgramInput
      | NoticeUpdateManyWithWhereWithoutProgramInput[];
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[];
  };

  export type ProgramCreateNestedOneWithoutIntakesInput = {
    create?: XOR<
      ProgramCreateWithoutIntakesInput,
      ProgramUncheckedCreateWithoutIntakesInput
    >;
    connectOrCreate?: ProgramCreateOrConnectWithoutIntakesInput;
    connect?: ProgramWhereUniqueInput;
  };

  export type ApplicantCreateNestedManyWithoutIntakeInput = {
    create?:
      | XOR<
          ApplicantCreateWithoutIntakeInput,
          ApplicantUncheckedCreateWithoutIntakeInput
        >
      | ApplicantCreateWithoutIntakeInput[]
      | ApplicantUncheckedCreateWithoutIntakeInput[];
    connectOrCreate?:
      | ApplicantCreateOrConnectWithoutIntakeInput
      | ApplicantCreateOrConnectWithoutIntakeInput[];
    createMany?: ApplicantCreateManyIntakeInputEnvelope;
    connect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
  };

  export type FeeStructureCreateNestedManyWithoutIntakeInput = {
    create?:
      | XOR<
          FeeStructureCreateWithoutIntakeInput,
          FeeStructureUncheckedCreateWithoutIntakeInput
        >
      | FeeStructureCreateWithoutIntakeInput[]
      | FeeStructureUncheckedCreateWithoutIntakeInput[];
    connectOrCreate?:
      | FeeStructureCreateOrConnectWithoutIntakeInput
      | FeeStructureCreateOrConnectWithoutIntakeInput[];
    createMany?: FeeStructureCreateManyIntakeInputEnvelope;
    connect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
  };

  export type NoticeCreateNestedManyWithoutIntakeInput = {
    create?:
      | XOR<
          NoticeCreateWithoutIntakeInput,
          NoticeUncheckedCreateWithoutIntakeInput
        >
      | NoticeCreateWithoutIntakeInput[]
      | NoticeUncheckedCreateWithoutIntakeInput[];
    connectOrCreate?:
      | NoticeCreateOrConnectWithoutIntakeInput
      | NoticeCreateOrConnectWithoutIntakeInput[];
    createMany?: NoticeCreateManyIntakeInputEnvelope;
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
  };

  export type ApplicantUncheckedCreateNestedManyWithoutIntakeInput = {
    create?:
      | XOR<
          ApplicantCreateWithoutIntakeInput,
          ApplicantUncheckedCreateWithoutIntakeInput
        >
      | ApplicantCreateWithoutIntakeInput[]
      | ApplicantUncheckedCreateWithoutIntakeInput[];
    connectOrCreate?:
      | ApplicantCreateOrConnectWithoutIntakeInput
      | ApplicantCreateOrConnectWithoutIntakeInput[];
    createMany?: ApplicantCreateManyIntakeInputEnvelope;
    connect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
  };

  export type FeeStructureUncheckedCreateNestedManyWithoutIntakeInput = {
    create?:
      | XOR<
          FeeStructureCreateWithoutIntakeInput,
          FeeStructureUncheckedCreateWithoutIntakeInput
        >
      | FeeStructureCreateWithoutIntakeInput[]
      | FeeStructureUncheckedCreateWithoutIntakeInput[];
    connectOrCreate?:
      | FeeStructureCreateOrConnectWithoutIntakeInput
      | FeeStructureCreateOrConnectWithoutIntakeInput[];
    createMany?: FeeStructureCreateManyIntakeInputEnvelope;
    connect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
  };

  export type NoticeUncheckedCreateNestedManyWithoutIntakeInput = {
    create?:
      | XOR<
          NoticeCreateWithoutIntakeInput,
          NoticeUncheckedCreateWithoutIntakeInput
        >
      | NoticeCreateWithoutIntakeInput[]
      | NoticeUncheckedCreateWithoutIntakeInput[];
    connectOrCreate?:
      | NoticeCreateOrConnectWithoutIntakeInput
      | NoticeCreateOrConnectWithoutIntakeInput[];
    createMany?: NoticeCreateManyIntakeInputEnvelope;
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
  };

  export type EnumIntakeStatusFieldUpdateOperationsInput = {
    set?: $Enums.IntakeStatus;
  };

  export type ProgramUpdateOneRequiredWithoutIntakesNestedInput = {
    create?: XOR<
      ProgramCreateWithoutIntakesInput,
      ProgramUncheckedCreateWithoutIntakesInput
    >;
    connectOrCreate?: ProgramCreateOrConnectWithoutIntakesInput;
    upsert?: ProgramUpsertWithoutIntakesInput;
    connect?: ProgramWhereUniqueInput;
    update?: XOR<
      XOR<
        ProgramUpdateToOneWithWhereWithoutIntakesInput,
        ProgramUpdateWithoutIntakesInput
      >,
      ProgramUncheckedUpdateWithoutIntakesInput
    >;
  };

  export type ApplicantUpdateManyWithoutIntakeNestedInput = {
    create?:
      | XOR<
          ApplicantCreateWithoutIntakeInput,
          ApplicantUncheckedCreateWithoutIntakeInput
        >
      | ApplicantCreateWithoutIntakeInput[]
      | ApplicantUncheckedCreateWithoutIntakeInput[];
    connectOrCreate?:
      | ApplicantCreateOrConnectWithoutIntakeInput
      | ApplicantCreateOrConnectWithoutIntakeInput[];
    upsert?:
      | ApplicantUpsertWithWhereUniqueWithoutIntakeInput
      | ApplicantUpsertWithWhereUniqueWithoutIntakeInput[];
    createMany?: ApplicantCreateManyIntakeInputEnvelope;
    set?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    disconnect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    delete?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    connect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    update?:
      | ApplicantUpdateWithWhereUniqueWithoutIntakeInput
      | ApplicantUpdateWithWhereUniqueWithoutIntakeInput[];
    updateMany?:
      | ApplicantUpdateManyWithWhereWithoutIntakeInput
      | ApplicantUpdateManyWithWhereWithoutIntakeInput[];
    deleteMany?: ApplicantScalarWhereInput | ApplicantScalarWhereInput[];
  };

  export type FeeStructureUpdateManyWithoutIntakeNestedInput = {
    create?:
      | XOR<
          FeeStructureCreateWithoutIntakeInput,
          FeeStructureUncheckedCreateWithoutIntakeInput
        >
      | FeeStructureCreateWithoutIntakeInput[]
      | FeeStructureUncheckedCreateWithoutIntakeInput[];
    connectOrCreate?:
      | FeeStructureCreateOrConnectWithoutIntakeInput
      | FeeStructureCreateOrConnectWithoutIntakeInput[];
    upsert?:
      | FeeStructureUpsertWithWhereUniqueWithoutIntakeInput
      | FeeStructureUpsertWithWhereUniqueWithoutIntakeInput[];
    createMany?: FeeStructureCreateManyIntakeInputEnvelope;
    set?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
    disconnect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
    delete?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
    connect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
    update?:
      | FeeStructureUpdateWithWhereUniqueWithoutIntakeInput
      | FeeStructureUpdateWithWhereUniqueWithoutIntakeInput[];
    updateMany?:
      | FeeStructureUpdateManyWithWhereWithoutIntakeInput
      | FeeStructureUpdateManyWithWhereWithoutIntakeInput[];
    deleteMany?: FeeStructureScalarWhereInput | FeeStructureScalarWhereInput[];
  };

  export type NoticeUpdateManyWithoutIntakeNestedInput = {
    create?:
      | XOR<
          NoticeCreateWithoutIntakeInput,
          NoticeUncheckedCreateWithoutIntakeInput
        >
      | NoticeCreateWithoutIntakeInput[]
      | NoticeUncheckedCreateWithoutIntakeInput[];
    connectOrCreate?:
      | NoticeCreateOrConnectWithoutIntakeInput
      | NoticeCreateOrConnectWithoutIntakeInput[];
    upsert?:
      | NoticeUpsertWithWhereUniqueWithoutIntakeInput
      | NoticeUpsertWithWhereUniqueWithoutIntakeInput[];
    createMany?: NoticeCreateManyIntakeInputEnvelope;
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
    update?:
      | NoticeUpdateWithWhereUniqueWithoutIntakeInput
      | NoticeUpdateWithWhereUniqueWithoutIntakeInput[];
    updateMany?:
      | NoticeUpdateManyWithWhereWithoutIntakeInput
      | NoticeUpdateManyWithWhereWithoutIntakeInput[];
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[];
  };

  export type ApplicantUncheckedUpdateManyWithoutIntakeNestedInput = {
    create?:
      | XOR<
          ApplicantCreateWithoutIntakeInput,
          ApplicantUncheckedCreateWithoutIntakeInput
        >
      | ApplicantCreateWithoutIntakeInput[]
      | ApplicantUncheckedCreateWithoutIntakeInput[];
    connectOrCreate?:
      | ApplicantCreateOrConnectWithoutIntakeInput
      | ApplicantCreateOrConnectWithoutIntakeInput[];
    upsert?:
      | ApplicantUpsertWithWhereUniqueWithoutIntakeInput
      | ApplicantUpsertWithWhereUniqueWithoutIntakeInput[];
    createMany?: ApplicantCreateManyIntakeInputEnvelope;
    set?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    disconnect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    delete?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    connect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[];
    update?:
      | ApplicantUpdateWithWhereUniqueWithoutIntakeInput
      | ApplicantUpdateWithWhereUniqueWithoutIntakeInput[];
    updateMany?:
      | ApplicantUpdateManyWithWhereWithoutIntakeInput
      | ApplicantUpdateManyWithWhereWithoutIntakeInput[];
    deleteMany?: ApplicantScalarWhereInput | ApplicantScalarWhereInput[];
  };

  export type FeeStructureUncheckedUpdateManyWithoutIntakeNestedInput = {
    create?:
      | XOR<
          FeeStructureCreateWithoutIntakeInput,
          FeeStructureUncheckedCreateWithoutIntakeInput
        >
      | FeeStructureCreateWithoutIntakeInput[]
      | FeeStructureUncheckedCreateWithoutIntakeInput[];
    connectOrCreate?:
      | FeeStructureCreateOrConnectWithoutIntakeInput
      | FeeStructureCreateOrConnectWithoutIntakeInput[];
    upsert?:
      | FeeStructureUpsertWithWhereUniqueWithoutIntakeInput
      | FeeStructureUpsertWithWhereUniqueWithoutIntakeInput[];
    createMany?: FeeStructureCreateManyIntakeInputEnvelope;
    set?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
    disconnect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
    delete?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
    connect?: FeeStructureWhereUniqueInput | FeeStructureWhereUniqueInput[];
    update?:
      | FeeStructureUpdateWithWhereUniqueWithoutIntakeInput
      | FeeStructureUpdateWithWhereUniqueWithoutIntakeInput[];
    updateMany?:
      | FeeStructureUpdateManyWithWhereWithoutIntakeInput
      | FeeStructureUpdateManyWithWhereWithoutIntakeInput[];
    deleteMany?: FeeStructureScalarWhereInput | FeeStructureScalarWhereInput[];
  };

  export type NoticeUncheckedUpdateManyWithoutIntakeNestedInput = {
    create?:
      | XOR<
          NoticeCreateWithoutIntakeInput,
          NoticeUncheckedCreateWithoutIntakeInput
        >
      | NoticeCreateWithoutIntakeInput[]
      | NoticeUncheckedCreateWithoutIntakeInput[];
    connectOrCreate?:
      | NoticeCreateOrConnectWithoutIntakeInput
      | NoticeCreateOrConnectWithoutIntakeInput[];
    upsert?:
      | NoticeUpsertWithWhereUniqueWithoutIntakeInput
      | NoticeUpsertWithWhereUniqueWithoutIntakeInput[];
    createMany?: NoticeCreateManyIntakeInputEnvelope;
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[];
    update?:
      | NoticeUpdateWithWhereUniqueWithoutIntakeInput
      | NoticeUpdateWithWhereUniqueWithoutIntakeInput[];
    updateMany?:
      | NoticeUpdateManyWithWhereWithoutIntakeInput
      | NoticeUpdateManyWithWhereWithoutIntakeInput[];
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[];
  };

  export type IntakeCreateNestedOneWithoutApplicantsInput = {
    create?: XOR<
      IntakeCreateWithoutApplicantsInput,
      IntakeUncheckedCreateWithoutApplicantsInput
    >;
    connectOrCreate?: IntakeCreateOrConnectWithoutApplicantsInput;
    connect?: IntakeWhereUniqueInput;
  };

  export type ProgramCreateNestedOneWithoutApplicantsInput = {
    create?: XOR<
      ProgramCreateWithoutApplicantsInput,
      ProgramUncheckedCreateWithoutApplicantsInput
    >;
    connectOrCreate?: ProgramCreateOrConnectWithoutApplicantsInput;
    connect?: ProgramWhereUniqueInput;
  };

  export type StudentCreateNestedOneWithoutApplicantInput = {
    create?: XOR<
      StudentCreateWithoutApplicantInput,
      StudentUncheckedCreateWithoutApplicantInput
    >;
    connectOrCreate?: StudentCreateOrConnectWithoutApplicantInput;
    connect?: StudentWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutApplicantInput = {
    create?: XOR<
      UserCreateWithoutApplicantInput,
      UserUncheckedCreateWithoutApplicantInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutApplicantInput;
    connect?: UserWhereUniqueInput;
  };

  export type StudentUncheckedCreateNestedOneWithoutApplicantInput = {
    create?: XOR<
      StudentCreateWithoutApplicantInput,
      StudentUncheckedCreateWithoutApplicantInput
    >;
    connectOrCreate?: StudentCreateOrConnectWithoutApplicantInput;
    connect?: StudentWhereUniqueInput;
  };

  export type EnumApplicantStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicantStatus;
  };

  export type IntakeUpdateOneRequiredWithoutApplicantsNestedInput = {
    create?: XOR<
      IntakeCreateWithoutApplicantsInput,
      IntakeUncheckedCreateWithoutApplicantsInput
    >;
    connectOrCreate?: IntakeCreateOrConnectWithoutApplicantsInput;
    upsert?: IntakeUpsertWithoutApplicantsInput;
    connect?: IntakeWhereUniqueInput;
    update?: XOR<
      XOR<
        IntakeUpdateToOneWithWhereWithoutApplicantsInput,
        IntakeUpdateWithoutApplicantsInput
      >,
      IntakeUncheckedUpdateWithoutApplicantsInput
    >;
  };

  export type ProgramUpdateOneRequiredWithoutApplicantsNestedInput = {
    create?: XOR<
      ProgramCreateWithoutApplicantsInput,
      ProgramUncheckedCreateWithoutApplicantsInput
    >;
    connectOrCreate?: ProgramCreateOrConnectWithoutApplicantsInput;
    upsert?: ProgramUpsertWithoutApplicantsInput;
    connect?: ProgramWhereUniqueInput;
    update?: XOR<
      XOR<
        ProgramUpdateToOneWithWhereWithoutApplicantsInput,
        ProgramUpdateWithoutApplicantsInput
      >,
      ProgramUncheckedUpdateWithoutApplicantsInput
    >;
  };

  export type StudentUpdateOneWithoutApplicantNestedInput = {
    create?: XOR<
      StudentCreateWithoutApplicantInput,
      StudentUncheckedCreateWithoutApplicantInput
    >;
    connectOrCreate?: StudentCreateOrConnectWithoutApplicantInput;
    upsert?: StudentUpsertWithoutApplicantInput;
    disconnect?: StudentWhereInput | boolean;
    delete?: StudentWhereInput | boolean;
    connect?: StudentWhereUniqueInput;
    update?: XOR<
      XOR<
        StudentUpdateToOneWithWhereWithoutApplicantInput,
        StudentUpdateWithoutApplicantInput
      >,
      StudentUncheckedUpdateWithoutApplicantInput
    >;
  };

  export type UserUpdateOneWithoutApplicantNestedInput = {
    create?: XOR<
      UserCreateWithoutApplicantInput,
      UserUncheckedCreateWithoutApplicantInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutApplicantInput;
    upsert?: UserUpsertWithoutApplicantInput;
    disconnect?: UserWhereInput | boolean;
    delete?: UserWhereInput | boolean;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutApplicantInput,
        UserUpdateWithoutApplicantInput
      >,
      UserUncheckedUpdateWithoutApplicantInput
    >;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type StudentUncheckedUpdateOneWithoutApplicantNestedInput = {
    create?: XOR<
      StudentCreateWithoutApplicantInput,
      StudentUncheckedCreateWithoutApplicantInput
    >;
    connectOrCreate?: StudentCreateOrConnectWithoutApplicantInput;
    upsert?: StudentUpsertWithoutApplicantInput;
    disconnect?: StudentWhereInput | boolean;
    delete?: StudentWhereInput | boolean;
    connect?: StudentWhereUniqueInput;
    update?: XOR<
      XOR<
        StudentUpdateToOneWithWhereWithoutApplicantInput,
        StudentUpdateWithoutApplicantInput
      >,
      StudentUncheckedUpdateWithoutApplicantInput
    >;
  };

  export type ApplicantCreateNestedOneWithoutStudentInput = {
    create?: XOR<
      ApplicantCreateWithoutStudentInput,
      ApplicantUncheckedCreateWithoutStudentInput
    >;
    connectOrCreate?: ApplicantCreateOrConnectWithoutStudentInput;
    connect?: ApplicantWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<
      UserCreateWithoutStudentInput,
      UserUncheckedCreateWithoutStudentInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput;
    connect?: UserWhereUniqueInput;
  };

  export type InvoiceCreateNestedManyWithoutStudentInput = {
    create?:
      | XOR<
          InvoiceCreateWithoutStudentInput,
          InvoiceUncheckedCreateWithoutStudentInput
        >
      | InvoiceCreateWithoutStudentInput[]
      | InvoiceUncheckedCreateWithoutStudentInput[];
    connectOrCreate?:
      | InvoiceCreateOrConnectWithoutStudentInput
      | InvoiceCreateOrConnectWithoutStudentInput[];
    createMany?: InvoiceCreateManyStudentInputEnvelope;
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
  };

  export type InvoiceUncheckedCreateNestedManyWithoutStudentInput = {
    create?:
      | XOR<
          InvoiceCreateWithoutStudentInput,
          InvoiceUncheckedCreateWithoutStudentInput
        >
      | InvoiceCreateWithoutStudentInput[]
      | InvoiceUncheckedCreateWithoutStudentInput[];
    connectOrCreate?:
      | InvoiceCreateOrConnectWithoutStudentInput
      | InvoiceCreateOrConnectWithoutStudentInput[];
    createMany?: InvoiceCreateManyStudentInputEnvelope;
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
  };

  export type ApplicantUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<
      ApplicantCreateWithoutStudentInput,
      ApplicantUncheckedCreateWithoutStudentInput
    >;
    connectOrCreate?: ApplicantCreateOrConnectWithoutStudentInput;
    upsert?: ApplicantUpsertWithoutStudentInput;
    connect?: ApplicantWhereUniqueInput;
    update?: XOR<
      XOR<
        ApplicantUpdateToOneWithWhereWithoutStudentInput,
        ApplicantUpdateWithoutStudentInput
      >,
      ApplicantUncheckedUpdateWithoutStudentInput
    >;
  };

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<
      UserCreateWithoutStudentInput,
      UserUncheckedCreateWithoutStudentInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput;
    upsert?: UserUpsertWithoutStudentInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutStudentInput,
        UserUpdateWithoutStudentInput
      >,
      UserUncheckedUpdateWithoutStudentInput
    >;
  };

  export type InvoiceUpdateManyWithoutStudentNestedInput = {
    create?:
      | XOR<
          InvoiceCreateWithoutStudentInput,
          InvoiceUncheckedCreateWithoutStudentInput
        >
      | InvoiceCreateWithoutStudentInput[]
      | InvoiceUncheckedCreateWithoutStudentInput[];
    connectOrCreate?:
      | InvoiceCreateOrConnectWithoutStudentInput
      | InvoiceCreateOrConnectWithoutStudentInput[];
    upsert?:
      | InvoiceUpsertWithWhereUniqueWithoutStudentInput
      | InvoiceUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: InvoiceCreateManyStudentInputEnvelope;
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
    update?:
      | InvoiceUpdateWithWhereUniqueWithoutStudentInput
      | InvoiceUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?:
      | InvoiceUpdateManyWithWhereWithoutStudentInput
      | InvoiceUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[];
  };

  export type InvoiceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?:
      | XOR<
          InvoiceCreateWithoutStudentInput,
          InvoiceUncheckedCreateWithoutStudentInput
        >
      | InvoiceCreateWithoutStudentInput[]
      | InvoiceUncheckedCreateWithoutStudentInput[];
    connectOrCreate?:
      | InvoiceCreateOrConnectWithoutStudentInput
      | InvoiceCreateOrConnectWithoutStudentInput[];
    upsert?:
      | InvoiceUpsertWithWhereUniqueWithoutStudentInput
      | InvoiceUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: InvoiceCreateManyStudentInputEnvelope;
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
    update?:
      | InvoiceUpdateWithWhereUniqueWithoutStudentInput
      | InvoiceUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?:
      | InvoiceUpdateManyWithWhereWithoutStudentInput
      | InvoiceUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[];
  };

  export type ProgramCreateNestedOneWithoutFeeStructuresInput = {
    create?: XOR<
      ProgramCreateWithoutFeeStructuresInput,
      ProgramUncheckedCreateWithoutFeeStructuresInput
    >;
    connectOrCreate?: ProgramCreateOrConnectWithoutFeeStructuresInput;
    connect?: ProgramWhereUniqueInput;
  };

  export type IntakeCreateNestedOneWithoutFeeStructuresInput = {
    create?: XOR<
      IntakeCreateWithoutFeeStructuresInput,
      IntakeUncheckedCreateWithoutFeeStructuresInput
    >;
    connectOrCreate?: IntakeCreateOrConnectWithoutFeeStructuresInput;
    connect?: IntakeWhereUniqueInput;
  };

  export type InvoiceCreateNestedManyWithoutFeeStructureInput = {
    create?:
      | XOR<
          InvoiceCreateWithoutFeeStructureInput,
          InvoiceUncheckedCreateWithoutFeeStructureInput
        >
      | InvoiceCreateWithoutFeeStructureInput[]
      | InvoiceUncheckedCreateWithoutFeeStructureInput[];
    connectOrCreate?:
      | InvoiceCreateOrConnectWithoutFeeStructureInput
      | InvoiceCreateOrConnectWithoutFeeStructureInput[];
    createMany?: InvoiceCreateManyFeeStructureInputEnvelope;
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
  };

  export type InvoiceUncheckedCreateNestedManyWithoutFeeStructureInput = {
    create?:
      | XOR<
          InvoiceCreateWithoutFeeStructureInput,
          InvoiceUncheckedCreateWithoutFeeStructureInput
        >
      | InvoiceCreateWithoutFeeStructureInput[]
      | InvoiceUncheckedCreateWithoutFeeStructureInput[];
    connectOrCreate?:
      | InvoiceCreateOrConnectWithoutFeeStructureInput
      | InvoiceCreateOrConnectWithoutFeeStructureInput[];
    createMany?: InvoiceCreateManyFeeStructureInputEnvelope;
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type ProgramUpdateOneRequiredWithoutFeeStructuresNestedInput = {
    create?: XOR<
      ProgramCreateWithoutFeeStructuresInput,
      ProgramUncheckedCreateWithoutFeeStructuresInput
    >;
    connectOrCreate?: ProgramCreateOrConnectWithoutFeeStructuresInput;
    upsert?: ProgramUpsertWithoutFeeStructuresInput;
    connect?: ProgramWhereUniqueInput;
    update?: XOR<
      XOR<
        ProgramUpdateToOneWithWhereWithoutFeeStructuresInput,
        ProgramUpdateWithoutFeeStructuresInput
      >,
      ProgramUncheckedUpdateWithoutFeeStructuresInput
    >;
  };

  export type IntakeUpdateOneWithoutFeeStructuresNestedInput = {
    create?: XOR<
      IntakeCreateWithoutFeeStructuresInput,
      IntakeUncheckedCreateWithoutFeeStructuresInput
    >;
    connectOrCreate?: IntakeCreateOrConnectWithoutFeeStructuresInput;
    upsert?: IntakeUpsertWithoutFeeStructuresInput;
    disconnect?: IntakeWhereInput | boolean;
    delete?: IntakeWhereInput | boolean;
    connect?: IntakeWhereUniqueInput;
    update?: XOR<
      XOR<
        IntakeUpdateToOneWithWhereWithoutFeeStructuresInput,
        IntakeUpdateWithoutFeeStructuresInput
      >,
      IntakeUncheckedUpdateWithoutFeeStructuresInput
    >;
  };

  export type InvoiceUpdateManyWithoutFeeStructureNestedInput = {
    create?:
      | XOR<
          InvoiceCreateWithoutFeeStructureInput,
          InvoiceUncheckedCreateWithoutFeeStructureInput
        >
      | InvoiceCreateWithoutFeeStructureInput[]
      | InvoiceUncheckedCreateWithoutFeeStructureInput[];
    connectOrCreate?:
      | InvoiceCreateOrConnectWithoutFeeStructureInput
      | InvoiceCreateOrConnectWithoutFeeStructureInput[];
    upsert?:
      | InvoiceUpsertWithWhereUniqueWithoutFeeStructureInput
      | InvoiceUpsertWithWhereUniqueWithoutFeeStructureInput[];
    createMany?: InvoiceCreateManyFeeStructureInputEnvelope;
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
    update?:
      | InvoiceUpdateWithWhereUniqueWithoutFeeStructureInput
      | InvoiceUpdateWithWhereUniqueWithoutFeeStructureInput[];
    updateMany?:
      | InvoiceUpdateManyWithWhereWithoutFeeStructureInput
      | InvoiceUpdateManyWithWhereWithoutFeeStructureInput[];
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[];
  };

  export type InvoiceUncheckedUpdateManyWithoutFeeStructureNestedInput = {
    create?:
      | XOR<
          InvoiceCreateWithoutFeeStructureInput,
          InvoiceUncheckedCreateWithoutFeeStructureInput
        >
      | InvoiceCreateWithoutFeeStructureInput[]
      | InvoiceUncheckedCreateWithoutFeeStructureInput[];
    connectOrCreate?:
      | InvoiceCreateOrConnectWithoutFeeStructureInput
      | InvoiceCreateOrConnectWithoutFeeStructureInput[];
    upsert?:
      | InvoiceUpsertWithWhereUniqueWithoutFeeStructureInput
      | InvoiceUpsertWithWhereUniqueWithoutFeeStructureInput[];
    createMany?: InvoiceCreateManyFeeStructureInputEnvelope;
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[];
    update?:
      | InvoiceUpdateWithWhereUniqueWithoutFeeStructureInput
      | InvoiceUpdateWithWhereUniqueWithoutFeeStructureInput[];
    updateMany?:
      | InvoiceUpdateManyWithWhereWithoutFeeStructureInput
      | InvoiceUpdateManyWithWhereWithoutFeeStructureInput[];
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[];
  };

  export type StudentCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<
      StudentCreateWithoutInvoicesInput,
      StudentUncheckedCreateWithoutInvoicesInput
    >;
    connectOrCreate?: StudentCreateOrConnectWithoutInvoicesInput;
    connect?: StudentWhereUniqueInput;
  };

  export type FeeStructureCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<
      FeeStructureCreateWithoutInvoicesInput,
      FeeStructureUncheckedCreateWithoutInvoicesInput
    >;
    connectOrCreate?: FeeStructureCreateOrConnectWithoutInvoicesInput;
    connect?: FeeStructureWhereUniqueInput;
  };

  export type PaymentCreateNestedManyWithoutInvoiceInput = {
    create?:
      | XOR<
          PaymentCreateWithoutInvoiceInput,
          PaymentUncheckedCreateWithoutInvoiceInput
        >
      | PaymentCreateWithoutInvoiceInput[]
      | PaymentUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutInvoiceInput
      | PaymentCreateOrConnectWithoutInvoiceInput[];
    createMany?: PaymentCreateManyInvoiceInputEnvelope;
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
  };

  export type PaymentUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?:
      | XOR<
          PaymentCreateWithoutInvoiceInput,
          PaymentUncheckedCreateWithoutInvoiceInput
        >
      | PaymentCreateWithoutInvoiceInput[]
      | PaymentUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutInvoiceInput
      | PaymentCreateOrConnectWithoutInvoiceInput[];
    createMany?: PaymentCreateManyInvoiceInputEnvelope;
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
  };

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus;
  };

  export type StudentUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<
      StudentCreateWithoutInvoicesInput,
      StudentUncheckedCreateWithoutInvoicesInput
    >;
    connectOrCreate?: StudentCreateOrConnectWithoutInvoicesInput;
    upsert?: StudentUpsertWithoutInvoicesInput;
    connect?: StudentWhereUniqueInput;
    update?: XOR<
      XOR<
        StudentUpdateToOneWithWhereWithoutInvoicesInput,
        StudentUpdateWithoutInvoicesInput
      >,
      StudentUncheckedUpdateWithoutInvoicesInput
    >;
  };

  export type FeeStructureUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<
      FeeStructureCreateWithoutInvoicesInput,
      FeeStructureUncheckedCreateWithoutInvoicesInput
    >;
    connectOrCreate?: FeeStructureCreateOrConnectWithoutInvoicesInput;
    upsert?: FeeStructureUpsertWithoutInvoicesInput;
    connect?: FeeStructureWhereUniqueInput;
    update?: XOR<
      XOR<
        FeeStructureUpdateToOneWithWhereWithoutInvoicesInput,
        FeeStructureUpdateWithoutInvoicesInput
      >,
      FeeStructureUncheckedUpdateWithoutInvoicesInput
    >;
  };

  export type PaymentUpdateManyWithoutInvoiceNestedInput = {
    create?:
      | XOR<
          PaymentCreateWithoutInvoiceInput,
          PaymentUncheckedCreateWithoutInvoiceInput
        >
      | PaymentCreateWithoutInvoiceInput[]
      | PaymentUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutInvoiceInput
      | PaymentCreateOrConnectWithoutInvoiceInput[];
    upsert?:
      | PaymentUpsertWithWhereUniqueWithoutInvoiceInput
      | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[];
    createMany?: PaymentCreateManyInvoiceInputEnvelope;
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    update?:
      | PaymentUpdateWithWhereUniqueWithoutInvoiceInput
      | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[];
    updateMany?:
      | PaymentUpdateManyWithWhereWithoutInvoiceInput
      | PaymentUpdateManyWithWhereWithoutInvoiceInput[];
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
  };

  export type PaymentUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?:
      | XOR<
          PaymentCreateWithoutInvoiceInput,
          PaymentUncheckedCreateWithoutInvoiceInput
        >
      | PaymentCreateWithoutInvoiceInput[]
      | PaymentUncheckedCreateWithoutInvoiceInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutInvoiceInput
      | PaymentCreateOrConnectWithoutInvoiceInput[];
    upsert?:
      | PaymentUpsertWithWhereUniqueWithoutInvoiceInput
      | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[];
    createMany?: PaymentCreateManyInvoiceInputEnvelope;
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    update?:
      | PaymentUpdateWithWhereUniqueWithoutInvoiceInput
      | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[];
    updateMany?:
      | PaymentUpdateManyWithWhereWithoutInvoiceInput
      | PaymentUpdateManyWithWhereWithoutInvoiceInput[];
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
  };

  export type InvoiceCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<
      InvoiceCreateWithoutPaymentsInput,
      InvoiceUncheckedCreateWithoutPaymentsInput
    >;
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput;
    connect?: InvoiceWhereUniqueInput;
  };

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus;
  };

  export type InvoiceUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<
      InvoiceCreateWithoutPaymentsInput,
      InvoiceUncheckedCreateWithoutPaymentsInput
    >;
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput;
    upsert?: InvoiceUpsertWithoutPaymentsInput;
    connect?: InvoiceWhereUniqueInput;
    update?: XOR<
      XOR<
        InvoiceUpdateToOneWithWhereWithoutPaymentsInput,
        InvoiceUpdateWithoutPaymentsInput
      >,
      InvoiceUncheckedUpdateWithoutPaymentsInput
    >;
  };

  export type ProgramCreateNestedOneWithoutNoticesInput = {
    create?: XOR<
      ProgramCreateWithoutNoticesInput,
      ProgramUncheckedCreateWithoutNoticesInput
    >;
    connectOrCreate?: ProgramCreateOrConnectWithoutNoticesInput;
    connect?: ProgramWhereUniqueInput;
  };

  export type IntakeCreateNestedOneWithoutNoticesInput = {
    create?: XOR<
      IntakeCreateWithoutNoticesInput,
      IntakeUncheckedCreateWithoutNoticesInput
    >;
    connectOrCreate?: IntakeCreateOrConnectWithoutNoticesInput;
    connect?: IntakeWhereUniqueInput;
  };

  export type EnumNoticeAudienceFieldUpdateOperationsInput = {
    set?: $Enums.NoticeAudience;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type ProgramUpdateOneWithoutNoticesNestedInput = {
    create?: XOR<
      ProgramCreateWithoutNoticesInput,
      ProgramUncheckedCreateWithoutNoticesInput
    >;
    connectOrCreate?: ProgramCreateOrConnectWithoutNoticesInput;
    upsert?: ProgramUpsertWithoutNoticesInput;
    disconnect?: ProgramWhereInput | boolean;
    delete?: ProgramWhereInput | boolean;
    connect?: ProgramWhereUniqueInput;
    update?: XOR<
      XOR<
        ProgramUpdateToOneWithWhereWithoutNoticesInput,
        ProgramUpdateWithoutNoticesInput
      >,
      ProgramUncheckedUpdateWithoutNoticesInput
    >;
  };

  export type IntakeUpdateOneWithoutNoticesNestedInput = {
    create?: XOR<
      IntakeCreateWithoutNoticesInput,
      IntakeUncheckedCreateWithoutNoticesInput
    >;
    connectOrCreate?: IntakeCreateOrConnectWithoutNoticesInput;
    upsert?: IntakeUpsertWithoutNoticesInput;
    disconnect?: IntakeWhereInput | boolean;
    delete?: IntakeWhereInput | boolean;
    connect?: IntakeWhereUniqueInput;
    update?: XOR<
      XOR<
        IntakeUpdateToOneWithWhereWithoutNoticesInput,
        IntakeUpdateWithoutNoticesInput
      >,
      IntakeUncheckedUpdateWithoutNoticesInput
    >;
  };

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<
      UserCreateWithoutAuditLogsInput,
      UserUncheckedCreateWithoutAuditLogsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<
      UserCreateWithoutAuditLogsInput,
      UserUncheckedCreateWithoutAuditLogsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput;
    upsert?: UserUpsertWithoutAuditLogsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutAuditLogsInput,
        UserUpdateWithoutAuditLogsInput
      >,
      UserUncheckedUpdateWithoutAuditLogsInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumUserStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.UserStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumUserStatusFilter<$PrismaModel>;
    _max?: NestedEnumUserStatusFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedEnumIntakeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IntakeStatus | EnumIntakeStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.IntakeStatus[]
      | ListEnumIntakeStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.IntakeStatus[]
      | ListEnumIntakeStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumIntakeStatusFilter<$PrismaModel> | $Enums.IntakeStatus;
  };

  export type NestedEnumIntakeStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.IntakeStatus
        | EnumIntakeStatusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.IntakeStatus[]
        | ListEnumIntakeStatusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.IntakeStatus[]
        | ListEnumIntakeStatusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumIntakeStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.IntakeStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumIntakeStatusFilter<$PrismaModel>;
      _max?: NestedEnumIntakeStatusFilter<$PrismaModel>;
    };

  export type NestedEnumApplicantStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ApplicantStatus
      | EnumApplicantStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ApplicantStatus[]
      | ListEnumApplicantStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ApplicantStatus[]
      | ListEnumApplicantStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumApplicantStatusFilter<$PrismaModel>
      | $Enums.ApplicantStatus;
  };

  export type NestedEnumApplicantStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.ApplicantStatus
      | EnumApplicantStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ApplicantStatus[]
      | ListEnumApplicantStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ApplicantStatus[]
      | ListEnumApplicantStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumApplicantStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.ApplicantStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumApplicantStatusFilter<$PrismaModel>;
    _max?: NestedEnumApplicantStatusFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.InvoiceStatus
      | EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.InvoiceStatus[]
      | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.InvoiceStatus[]
      | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus;
  };

  export type NestedEnumInvoiceStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.InvoiceStatus
      | EnumInvoiceStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.InvoiceStatus[]
      | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.InvoiceStatus[]
      | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.InvoiceStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>;
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>;
  };

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
  };

  export type NestedEnumPaymentStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.PaymentStatus
      | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.PaymentStatus[]
      | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.PaymentStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>;
  };

  export type NestedEnumNoticeAudienceFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.NoticeAudience
      | EnumNoticeAudienceFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.NoticeAudience[]
      | ListEnumNoticeAudienceFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.NoticeAudience[]
      | ListEnumNoticeAudienceFieldRefInput<$PrismaModel>;
    not?: NestedEnumNoticeAudienceFilter<$PrismaModel> | $Enums.NoticeAudience;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedEnumNoticeAudienceWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.NoticeAudience
      | EnumNoticeAudienceFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.NoticeAudience[]
      | ListEnumNoticeAudienceFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.NoticeAudience[]
      | ListEnumNoticeAudienceFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumNoticeAudienceWithAggregatesFilter<$PrismaModel>
      | $Enums.NoticeAudience;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumNoticeAudienceFilter<$PrismaModel>;
    _max?: NestedEnumNoticeAudienceFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type ApplicantCreateWithoutUserInput = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth?: Date | string | null;
    address?: string | null;
    nationality?: string | null;
    previousEdu?: string | null;
    status?: $Enums.ApplicantStatus;
    rejectionNote?: string | null;
    submittedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    intake: IntakeCreateNestedOneWithoutApplicantsInput;
    program: ProgramCreateNestedOneWithoutApplicantsInput;
    student?: StudentCreateNestedOneWithoutApplicantInput;
  };

  export type ApplicantUncheckedCreateWithoutUserInput = {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth?: Date | string | null;
    address?: string | null;
    nationality?: string | null;
    previousEdu?: string | null;
    intakeId: number;
    programId: number;
    status?: $Enums.ApplicantStatus;
    rejectionNote?: string | null;
    submittedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student?: StudentUncheckedCreateNestedOneWithoutApplicantInput;
  };

  export type ApplicantCreateOrConnectWithoutUserInput = {
    where: ApplicantWhereUniqueInput;
    create: XOR<
      ApplicantCreateWithoutUserInput,
      ApplicantUncheckedCreateWithoutUserInput
    >;
  };

  export type StudentCreateWithoutUserInput = {
    studentId: string;
    enrolledAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant: ApplicantCreateNestedOneWithoutStudentInput;
    invoices?: InvoiceCreateNestedManyWithoutStudentInput;
  };

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: number;
    studentId: string;
    applicantId: number;
    enrolledAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invoices?: InvoiceUncheckedCreateNestedManyWithoutStudentInput;
  };

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput;
    create: XOR<
      StudentCreateWithoutUserInput,
      StudentUncheckedCreateWithoutUserInput
    >;
  };

  export type AuditLogCreateWithoutUserInput = {
    action: string;
    entity: string;
    entityId: string;
    details?: string | null;
    ipAddress?: string | null;
    timestamp?: Date | string;
  };

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: number;
    action: string;
    entity: string;
    entityId: string;
    details?: string | null;
    ipAddress?: string | null;
    timestamp?: Date | string;
  };

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput;
    create: XOR<
      AuditLogCreateWithoutUserInput,
      AuditLogUncheckedCreateWithoutUserInput
    >;
  };

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ApplicantUpsertWithoutUserInput = {
    update: XOR<
      ApplicantUpdateWithoutUserInput,
      ApplicantUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ApplicantCreateWithoutUserInput,
      ApplicantUncheckedCreateWithoutUserInput
    >;
    where?: ApplicantWhereInput;
  };

  export type ApplicantUpdateToOneWithWhereWithoutUserInput = {
    where?: ApplicantWhereInput;
    data: XOR<
      ApplicantUpdateWithoutUserInput,
      ApplicantUncheckedUpdateWithoutUserInput
    >;
  };

  export type ApplicantUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    previousEdu?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | EnumApplicantStatusFieldUpdateOperationsInput
      | $Enums.ApplicantStatus;
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    intake?: IntakeUpdateOneRequiredWithoutApplicantsNestedInput;
    program?: ProgramUpdateOneRequiredWithoutApplicantsNestedInput;
    student?: StudentUpdateOneWithoutApplicantNestedInput;
  };

  export type ApplicantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    previousEdu?: NullableStringFieldUpdateOperationsInput | string | null;
    intakeId?: IntFieldUpdateOperationsInput | number;
    programId?: IntFieldUpdateOperationsInput | number;
    status?:
      | EnumApplicantStatusFieldUpdateOperationsInput
      | $Enums.ApplicantStatus;
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: StudentUncheckedUpdateOneWithoutApplicantNestedInput;
  };

  export type StudentUpsertWithoutUserInput = {
    update: XOR<
      StudentUpdateWithoutUserInput,
      StudentUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      StudentCreateWithoutUserInput,
      StudentUncheckedCreateWithoutUserInput
    >;
    where?: StudentWhereInput;
  };

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput;
    data: XOR<
      StudentUpdateWithoutUserInput,
      StudentUncheckedUpdateWithoutUserInput
    >;
  };

  export type StudentUpdateWithoutUserInput = {
    studentId?: StringFieldUpdateOperationsInput | string;
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: ApplicantUpdateOneRequiredWithoutStudentNestedInput;
    invoices?: InvoiceUpdateManyWithoutStudentNestedInput;
  };

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    studentId?: StringFieldUpdateOperationsInput | string;
    applicantId?: IntFieldUpdateOperationsInput | number;
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: InvoiceUncheckedUpdateManyWithoutStudentNestedInput;
  };

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput;
    update: XOR<
      AuditLogUpdateWithoutUserInput,
      AuditLogUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      AuditLogCreateWithoutUserInput,
      AuditLogUncheckedCreateWithoutUserInput
    >;
  };

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput;
    data: XOR<
      AuditLogUpdateWithoutUserInput,
      AuditLogUncheckedUpdateWithoutUserInput
    >;
  };

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput;
    data: XOR<
      AuditLogUpdateManyMutationInput,
      AuditLogUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
    OR?: AuditLogScalarWhereInput[];
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[];
    id?: IntFilter<'AuditLog'> | number;
    userId?: IntFilter<'AuditLog'> | number;
    action?: StringFilter<'AuditLog'> | string;
    entity?: StringFilter<'AuditLog'> | string;
    entityId?: StringFilter<'AuditLog'> | string;
    details?: StringNullableFilter<'AuditLog'> | string | null;
    ipAddress?: StringNullableFilter<'AuditLog'> | string | null;
    timestamp?: DateTimeFilter<'AuditLog'> | Date | string;
  };

  export type ProgramCreateWithoutDepartmentInput = {
    name: string;
    code: string;
    description?: string | null;
    duration?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    intakes?: IntakeCreateNestedManyWithoutProgramInput;
    applicants?: ApplicantCreateNestedManyWithoutProgramInput;
    feeStructures?: FeeStructureCreateNestedManyWithoutProgramInput;
    notices?: NoticeCreateNestedManyWithoutProgramInput;
  };

  export type ProgramUncheckedCreateWithoutDepartmentInput = {
    id?: number;
    name: string;
    code: string;
    description?: string | null;
    duration?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    intakes?: IntakeUncheckedCreateNestedManyWithoutProgramInput;
    applicants?: ApplicantUncheckedCreateNestedManyWithoutProgramInput;
    feeStructures?: FeeStructureUncheckedCreateNestedManyWithoutProgramInput;
    notices?: NoticeUncheckedCreateNestedManyWithoutProgramInput;
  };

  export type ProgramCreateOrConnectWithoutDepartmentInput = {
    where: ProgramWhereUniqueInput;
    create: XOR<
      ProgramCreateWithoutDepartmentInput,
      ProgramUncheckedCreateWithoutDepartmentInput
    >;
  };

  export type ProgramCreateManyDepartmentInputEnvelope = {
    data: ProgramCreateManyDepartmentInput | ProgramCreateManyDepartmentInput[];
    skipDuplicates?: boolean;
  };

  export type ProgramUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: ProgramWhereUniqueInput;
    update: XOR<
      ProgramUpdateWithoutDepartmentInput,
      ProgramUncheckedUpdateWithoutDepartmentInput
    >;
    create: XOR<
      ProgramCreateWithoutDepartmentInput,
      ProgramUncheckedCreateWithoutDepartmentInput
    >;
  };

  export type ProgramUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: ProgramWhereUniqueInput;
    data: XOR<
      ProgramUpdateWithoutDepartmentInput,
      ProgramUncheckedUpdateWithoutDepartmentInput
    >;
  };

  export type ProgramUpdateManyWithWhereWithoutDepartmentInput = {
    where: ProgramScalarWhereInput;
    data: XOR<
      ProgramUpdateManyMutationInput,
      ProgramUncheckedUpdateManyWithoutDepartmentInput
    >;
  };

  export type ProgramScalarWhereInput = {
    AND?: ProgramScalarWhereInput | ProgramScalarWhereInput[];
    OR?: ProgramScalarWhereInput[];
    NOT?: ProgramScalarWhereInput | ProgramScalarWhereInput[];
    id?: IntFilter<'Program'> | number;
    name?: StringFilter<'Program'> | string;
    code?: StringFilter<'Program'> | string;
    description?: StringNullableFilter<'Program'> | string | null;
    duration?: StringNullableFilter<'Program'> | string | null;
    departmentId?: IntFilter<'Program'> | number;
    createdAt?: DateTimeFilter<'Program'> | Date | string;
    updatedAt?: DateTimeFilter<'Program'> | Date | string;
  };

  export type DepartmentCreateWithoutProgramsInput = {
    name: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type DepartmentUncheckedCreateWithoutProgramsInput = {
    id?: number;
    name: string;
    code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type DepartmentCreateOrConnectWithoutProgramsInput = {
    where: DepartmentWhereUniqueInput;
    create: XOR<
      DepartmentCreateWithoutProgramsInput,
      DepartmentUncheckedCreateWithoutProgramsInput
    >;
  };

  export type IntakeCreateWithoutProgramInput = {
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    applicationDeadline: Date | string;
    maxCapacity?: number;
    status?: $Enums.IntakeStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicants?: ApplicantCreateNestedManyWithoutIntakeInput;
    feeStructures?: FeeStructureCreateNestedManyWithoutIntakeInput;
    notices?: NoticeCreateNestedManyWithoutIntakeInput;
  };

  export type IntakeUncheckedCreateWithoutProgramInput = {
    id?: number;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    applicationDeadline: Date | string;
    maxCapacity?: number;
    status?: $Enums.IntakeStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicants?: ApplicantUncheckedCreateNestedManyWithoutIntakeInput;
    feeStructures?: FeeStructureUncheckedCreateNestedManyWithoutIntakeInput;
    notices?: NoticeUncheckedCreateNestedManyWithoutIntakeInput;
  };

  export type IntakeCreateOrConnectWithoutProgramInput = {
    where: IntakeWhereUniqueInput;
    create: XOR<
      IntakeCreateWithoutProgramInput,
      IntakeUncheckedCreateWithoutProgramInput
    >;
  };

  export type IntakeCreateManyProgramInputEnvelope = {
    data: IntakeCreateManyProgramInput | IntakeCreateManyProgramInput[];
    skipDuplicates?: boolean;
  };

  export type ApplicantCreateWithoutProgramInput = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth?: Date | string | null;
    address?: string | null;
    nationality?: string | null;
    previousEdu?: string | null;
    status?: $Enums.ApplicantStatus;
    rejectionNote?: string | null;
    submittedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    intake: IntakeCreateNestedOneWithoutApplicantsInput;
    student?: StudentCreateNestedOneWithoutApplicantInput;
    user?: UserCreateNestedOneWithoutApplicantInput;
  };

  export type ApplicantUncheckedCreateWithoutProgramInput = {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth?: Date | string | null;
    address?: string | null;
    nationality?: string | null;
    previousEdu?: string | null;
    intakeId: number;
    status?: $Enums.ApplicantStatus;
    rejectionNote?: string | null;
    submittedAt?: Date | string;
    userId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student?: StudentUncheckedCreateNestedOneWithoutApplicantInput;
  };

  export type ApplicantCreateOrConnectWithoutProgramInput = {
    where: ApplicantWhereUniqueInput;
    create: XOR<
      ApplicantCreateWithoutProgramInput,
      ApplicantUncheckedCreateWithoutProgramInput
    >;
  };

  export type ApplicantCreateManyProgramInputEnvelope = {
    data: ApplicantCreateManyProgramInput | ApplicantCreateManyProgramInput[];
    skipDuplicates?: boolean;
  };

  export type FeeStructureCreateWithoutProgramInput = {
    name: string;
    amount: number;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    intake?: IntakeCreateNestedOneWithoutFeeStructuresInput;
    invoices?: InvoiceCreateNestedManyWithoutFeeStructureInput;
  };

  export type FeeStructureUncheckedCreateWithoutProgramInput = {
    id?: number;
    name: string;
    amount: number;
    currency?: string;
    intakeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invoices?: InvoiceUncheckedCreateNestedManyWithoutFeeStructureInput;
  };

  export type FeeStructureCreateOrConnectWithoutProgramInput = {
    where: FeeStructureWhereUniqueInput;
    create: XOR<
      FeeStructureCreateWithoutProgramInput,
      FeeStructureUncheckedCreateWithoutProgramInput
    >;
  };

  export type FeeStructureCreateManyProgramInputEnvelope = {
    data:
      | FeeStructureCreateManyProgramInput
      | FeeStructureCreateManyProgramInput[];
    skipDuplicates?: boolean;
  };

  export type NoticeCreateWithoutProgramInput = {
    title: string;
    content: string;
    audience?: $Enums.NoticeAudience;
    isPublished?: boolean;
    expiryDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    intake?: IntakeCreateNestedOneWithoutNoticesInput;
  };

  export type NoticeUncheckedCreateWithoutProgramInput = {
    id?: number;
    title: string;
    content: string;
    audience?: $Enums.NoticeAudience;
    intakeId?: number | null;
    isPublished?: boolean;
    expiryDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NoticeCreateOrConnectWithoutProgramInput = {
    where: NoticeWhereUniqueInput;
    create: XOR<
      NoticeCreateWithoutProgramInput,
      NoticeUncheckedCreateWithoutProgramInput
    >;
  };

  export type NoticeCreateManyProgramInputEnvelope = {
    data: NoticeCreateManyProgramInput | NoticeCreateManyProgramInput[];
    skipDuplicates?: boolean;
  };

  export type DepartmentUpsertWithoutProgramsInput = {
    update: XOR<
      DepartmentUpdateWithoutProgramsInput,
      DepartmentUncheckedUpdateWithoutProgramsInput
    >;
    create: XOR<
      DepartmentCreateWithoutProgramsInput,
      DepartmentUncheckedCreateWithoutProgramsInput
    >;
    where?: DepartmentWhereInput;
  };

  export type DepartmentUpdateToOneWithWhereWithoutProgramsInput = {
    where?: DepartmentWhereInput;
    data: XOR<
      DepartmentUpdateWithoutProgramsInput,
      DepartmentUncheckedUpdateWithoutProgramsInput
    >;
  };

  export type DepartmentUpdateWithoutProgramsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type DepartmentUncheckedUpdateWithoutProgramsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntakeUpsertWithWhereUniqueWithoutProgramInput = {
    where: IntakeWhereUniqueInput;
    update: XOR<
      IntakeUpdateWithoutProgramInput,
      IntakeUncheckedUpdateWithoutProgramInput
    >;
    create: XOR<
      IntakeCreateWithoutProgramInput,
      IntakeUncheckedCreateWithoutProgramInput
    >;
  };

  export type IntakeUpdateWithWhereUniqueWithoutProgramInput = {
    where: IntakeWhereUniqueInput;
    data: XOR<
      IntakeUpdateWithoutProgramInput,
      IntakeUncheckedUpdateWithoutProgramInput
    >;
  };

  export type IntakeUpdateManyWithWhereWithoutProgramInput = {
    where: IntakeScalarWhereInput;
    data: XOR<
      IntakeUpdateManyMutationInput,
      IntakeUncheckedUpdateManyWithoutProgramInput
    >;
  };

  export type IntakeScalarWhereInput = {
    AND?: IntakeScalarWhereInput | IntakeScalarWhereInput[];
    OR?: IntakeScalarWhereInput[];
    NOT?: IntakeScalarWhereInput | IntakeScalarWhereInput[];
    id?: IntFilter<'Intake'> | number;
    name?: StringFilter<'Intake'> | string;
    programId?: IntFilter<'Intake'> | number;
    startDate?: DateTimeFilter<'Intake'> | Date | string;
    endDate?: DateTimeFilter<'Intake'> | Date | string;
    applicationDeadline?: DateTimeFilter<'Intake'> | Date | string;
    maxCapacity?: IntFilter<'Intake'> | number;
    status?: EnumIntakeStatusFilter<'Intake'> | $Enums.IntakeStatus;
    createdAt?: DateTimeFilter<'Intake'> | Date | string;
    updatedAt?: DateTimeFilter<'Intake'> | Date | string;
  };

  export type ApplicantUpsertWithWhereUniqueWithoutProgramInput = {
    where: ApplicantWhereUniqueInput;
    update: XOR<
      ApplicantUpdateWithoutProgramInput,
      ApplicantUncheckedUpdateWithoutProgramInput
    >;
    create: XOR<
      ApplicantCreateWithoutProgramInput,
      ApplicantUncheckedCreateWithoutProgramInput
    >;
  };

  export type ApplicantUpdateWithWhereUniqueWithoutProgramInput = {
    where: ApplicantWhereUniqueInput;
    data: XOR<
      ApplicantUpdateWithoutProgramInput,
      ApplicantUncheckedUpdateWithoutProgramInput
    >;
  };

  export type ApplicantUpdateManyWithWhereWithoutProgramInput = {
    where: ApplicantScalarWhereInput;
    data: XOR<
      ApplicantUpdateManyMutationInput,
      ApplicantUncheckedUpdateManyWithoutProgramInput
    >;
  };

  export type ApplicantScalarWhereInput = {
    AND?: ApplicantScalarWhereInput | ApplicantScalarWhereInput[];
    OR?: ApplicantScalarWhereInput[];
    NOT?: ApplicantScalarWhereInput | ApplicantScalarWhereInput[];
    id?: IntFilter<'Applicant'> | number;
    firstName?: StringFilter<'Applicant'> | string;
    lastName?: StringFilter<'Applicant'> | string;
    email?: StringFilter<'Applicant'> | string;
    phone?: StringFilter<'Applicant'> | string;
    dateOfBirth?: DateTimeNullableFilter<'Applicant'> | Date | string | null;
    address?: StringNullableFilter<'Applicant'> | string | null;
    nationality?: StringNullableFilter<'Applicant'> | string | null;
    previousEdu?: StringNullableFilter<'Applicant'> | string | null;
    intakeId?: IntFilter<'Applicant'> | number;
    programId?: IntFilter<'Applicant'> | number;
    status?: EnumApplicantStatusFilter<'Applicant'> | $Enums.ApplicantStatus;
    rejectionNote?: StringNullableFilter<'Applicant'> | string | null;
    submittedAt?: DateTimeFilter<'Applicant'> | Date | string;
    userId?: IntNullableFilter<'Applicant'> | number | null;
    createdAt?: DateTimeFilter<'Applicant'> | Date | string;
    updatedAt?: DateTimeFilter<'Applicant'> | Date | string;
  };

  export type FeeStructureUpsertWithWhereUniqueWithoutProgramInput = {
    where: FeeStructureWhereUniqueInput;
    update: XOR<
      FeeStructureUpdateWithoutProgramInput,
      FeeStructureUncheckedUpdateWithoutProgramInput
    >;
    create: XOR<
      FeeStructureCreateWithoutProgramInput,
      FeeStructureUncheckedCreateWithoutProgramInput
    >;
  };

  export type FeeStructureUpdateWithWhereUniqueWithoutProgramInput = {
    where: FeeStructureWhereUniqueInput;
    data: XOR<
      FeeStructureUpdateWithoutProgramInput,
      FeeStructureUncheckedUpdateWithoutProgramInput
    >;
  };

  export type FeeStructureUpdateManyWithWhereWithoutProgramInput = {
    where: FeeStructureScalarWhereInput;
    data: XOR<
      FeeStructureUpdateManyMutationInput,
      FeeStructureUncheckedUpdateManyWithoutProgramInput
    >;
  };

  export type FeeStructureScalarWhereInput = {
    AND?: FeeStructureScalarWhereInput | FeeStructureScalarWhereInput[];
    OR?: FeeStructureScalarWhereInput[];
    NOT?: FeeStructureScalarWhereInput | FeeStructureScalarWhereInput[];
    id?: IntFilter<'FeeStructure'> | number;
    name?: StringFilter<'FeeStructure'> | string;
    amount?: FloatFilter<'FeeStructure'> | number;
    currency?: StringFilter<'FeeStructure'> | string;
    programId?: IntFilter<'FeeStructure'> | number;
    intakeId?: IntNullableFilter<'FeeStructure'> | number | null;
    createdAt?: DateTimeFilter<'FeeStructure'> | Date | string;
    updatedAt?: DateTimeFilter<'FeeStructure'> | Date | string;
  };

  export type NoticeUpsertWithWhereUniqueWithoutProgramInput = {
    where: NoticeWhereUniqueInput;
    update: XOR<
      NoticeUpdateWithoutProgramInput,
      NoticeUncheckedUpdateWithoutProgramInput
    >;
    create: XOR<
      NoticeCreateWithoutProgramInput,
      NoticeUncheckedCreateWithoutProgramInput
    >;
  };

  export type NoticeUpdateWithWhereUniqueWithoutProgramInput = {
    where: NoticeWhereUniqueInput;
    data: XOR<
      NoticeUpdateWithoutProgramInput,
      NoticeUncheckedUpdateWithoutProgramInput
    >;
  };

  export type NoticeUpdateManyWithWhereWithoutProgramInput = {
    where: NoticeScalarWhereInput;
    data: XOR<
      NoticeUpdateManyMutationInput,
      NoticeUncheckedUpdateManyWithoutProgramInput
    >;
  };

  export type NoticeScalarWhereInput = {
    AND?: NoticeScalarWhereInput | NoticeScalarWhereInput[];
    OR?: NoticeScalarWhereInput[];
    NOT?: NoticeScalarWhereInput | NoticeScalarWhereInput[];
    id?: IntFilter<'Notice'> | number;
    title?: StringFilter<'Notice'> | string;
    content?: StringFilter<'Notice'> | string;
    audience?: EnumNoticeAudienceFilter<'Notice'> | $Enums.NoticeAudience;
    programId?: IntNullableFilter<'Notice'> | number | null;
    intakeId?: IntNullableFilter<'Notice'> | number | null;
    isPublished?: BoolFilter<'Notice'> | boolean;
    expiryDate?: DateTimeNullableFilter<'Notice'> | Date | string | null;
    createdAt?: DateTimeFilter<'Notice'> | Date | string;
    updatedAt?: DateTimeFilter<'Notice'> | Date | string;
  };

  export type ProgramCreateWithoutIntakesInput = {
    name: string;
    code: string;
    description?: string | null;
    duration?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department: DepartmentCreateNestedOneWithoutProgramsInput;
    applicants?: ApplicantCreateNestedManyWithoutProgramInput;
    feeStructures?: FeeStructureCreateNestedManyWithoutProgramInput;
    notices?: NoticeCreateNestedManyWithoutProgramInput;
  };

  export type ProgramUncheckedCreateWithoutIntakesInput = {
    id?: number;
    name: string;
    code: string;
    description?: string | null;
    duration?: string | null;
    departmentId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicants?: ApplicantUncheckedCreateNestedManyWithoutProgramInput;
    feeStructures?: FeeStructureUncheckedCreateNestedManyWithoutProgramInput;
    notices?: NoticeUncheckedCreateNestedManyWithoutProgramInput;
  };

  export type ProgramCreateOrConnectWithoutIntakesInput = {
    where: ProgramWhereUniqueInput;
    create: XOR<
      ProgramCreateWithoutIntakesInput,
      ProgramUncheckedCreateWithoutIntakesInput
    >;
  };

  export type ApplicantCreateWithoutIntakeInput = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth?: Date | string | null;
    address?: string | null;
    nationality?: string | null;
    previousEdu?: string | null;
    status?: $Enums.ApplicantStatus;
    rejectionNote?: string | null;
    submittedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    program: ProgramCreateNestedOneWithoutApplicantsInput;
    student?: StudentCreateNestedOneWithoutApplicantInput;
    user?: UserCreateNestedOneWithoutApplicantInput;
  };

  export type ApplicantUncheckedCreateWithoutIntakeInput = {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth?: Date | string | null;
    address?: string | null;
    nationality?: string | null;
    previousEdu?: string | null;
    programId: number;
    status?: $Enums.ApplicantStatus;
    rejectionNote?: string | null;
    submittedAt?: Date | string;
    userId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student?: StudentUncheckedCreateNestedOneWithoutApplicantInput;
  };

  export type ApplicantCreateOrConnectWithoutIntakeInput = {
    where: ApplicantWhereUniqueInput;
    create: XOR<
      ApplicantCreateWithoutIntakeInput,
      ApplicantUncheckedCreateWithoutIntakeInput
    >;
  };

  export type ApplicantCreateManyIntakeInputEnvelope = {
    data: ApplicantCreateManyIntakeInput | ApplicantCreateManyIntakeInput[];
    skipDuplicates?: boolean;
  };

  export type FeeStructureCreateWithoutIntakeInput = {
    name: string;
    amount: number;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    program: ProgramCreateNestedOneWithoutFeeStructuresInput;
    invoices?: InvoiceCreateNestedManyWithoutFeeStructureInput;
  };

  export type FeeStructureUncheckedCreateWithoutIntakeInput = {
    id?: number;
    name: string;
    amount: number;
    currency?: string;
    programId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invoices?: InvoiceUncheckedCreateNestedManyWithoutFeeStructureInput;
  };

  export type FeeStructureCreateOrConnectWithoutIntakeInput = {
    where: FeeStructureWhereUniqueInput;
    create: XOR<
      FeeStructureCreateWithoutIntakeInput,
      FeeStructureUncheckedCreateWithoutIntakeInput
    >;
  };

  export type FeeStructureCreateManyIntakeInputEnvelope = {
    data:
      | FeeStructureCreateManyIntakeInput
      | FeeStructureCreateManyIntakeInput[];
    skipDuplicates?: boolean;
  };

  export type NoticeCreateWithoutIntakeInput = {
    title: string;
    content: string;
    audience?: $Enums.NoticeAudience;
    isPublished?: boolean;
    expiryDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    program?: ProgramCreateNestedOneWithoutNoticesInput;
  };

  export type NoticeUncheckedCreateWithoutIntakeInput = {
    id?: number;
    title: string;
    content: string;
    audience?: $Enums.NoticeAudience;
    programId?: number | null;
    isPublished?: boolean;
    expiryDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NoticeCreateOrConnectWithoutIntakeInput = {
    where: NoticeWhereUniqueInput;
    create: XOR<
      NoticeCreateWithoutIntakeInput,
      NoticeUncheckedCreateWithoutIntakeInput
    >;
  };

  export type NoticeCreateManyIntakeInputEnvelope = {
    data: NoticeCreateManyIntakeInput | NoticeCreateManyIntakeInput[];
    skipDuplicates?: boolean;
  };

  export type ProgramUpsertWithoutIntakesInput = {
    update: XOR<
      ProgramUpdateWithoutIntakesInput,
      ProgramUncheckedUpdateWithoutIntakesInput
    >;
    create: XOR<
      ProgramCreateWithoutIntakesInput,
      ProgramUncheckedCreateWithoutIntakesInput
    >;
    where?: ProgramWhereInput;
  };

  export type ProgramUpdateToOneWithWhereWithoutIntakesInput = {
    where?: ProgramWhereInput;
    data: XOR<
      ProgramUpdateWithoutIntakesInput,
      ProgramUncheckedUpdateWithoutIntakesInput
    >;
  };

  export type ProgramUpdateWithoutIntakesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    department?: DepartmentUpdateOneRequiredWithoutProgramsNestedInput;
    applicants?: ApplicantUpdateManyWithoutProgramNestedInput;
    feeStructures?: FeeStructureUpdateManyWithoutProgramNestedInput;
    notices?: NoticeUpdateManyWithoutProgramNestedInput;
  };

  export type ProgramUncheckedUpdateWithoutIntakesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableStringFieldUpdateOperationsInput | string | null;
    departmentId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicants?: ApplicantUncheckedUpdateManyWithoutProgramNestedInput;
    feeStructures?: FeeStructureUncheckedUpdateManyWithoutProgramNestedInput;
    notices?: NoticeUncheckedUpdateManyWithoutProgramNestedInput;
  };

  export type ApplicantUpsertWithWhereUniqueWithoutIntakeInput = {
    where: ApplicantWhereUniqueInput;
    update: XOR<
      ApplicantUpdateWithoutIntakeInput,
      ApplicantUncheckedUpdateWithoutIntakeInput
    >;
    create: XOR<
      ApplicantCreateWithoutIntakeInput,
      ApplicantUncheckedCreateWithoutIntakeInput
    >;
  };

  export type ApplicantUpdateWithWhereUniqueWithoutIntakeInput = {
    where: ApplicantWhereUniqueInput;
    data: XOR<
      ApplicantUpdateWithoutIntakeInput,
      ApplicantUncheckedUpdateWithoutIntakeInput
    >;
  };

  export type ApplicantUpdateManyWithWhereWithoutIntakeInput = {
    where: ApplicantScalarWhereInput;
    data: XOR<
      ApplicantUpdateManyMutationInput,
      ApplicantUncheckedUpdateManyWithoutIntakeInput
    >;
  };

  export type FeeStructureUpsertWithWhereUniqueWithoutIntakeInput = {
    where: FeeStructureWhereUniqueInput;
    update: XOR<
      FeeStructureUpdateWithoutIntakeInput,
      FeeStructureUncheckedUpdateWithoutIntakeInput
    >;
    create: XOR<
      FeeStructureCreateWithoutIntakeInput,
      FeeStructureUncheckedCreateWithoutIntakeInput
    >;
  };

  export type FeeStructureUpdateWithWhereUniqueWithoutIntakeInput = {
    where: FeeStructureWhereUniqueInput;
    data: XOR<
      FeeStructureUpdateWithoutIntakeInput,
      FeeStructureUncheckedUpdateWithoutIntakeInput
    >;
  };

  export type FeeStructureUpdateManyWithWhereWithoutIntakeInput = {
    where: FeeStructureScalarWhereInput;
    data: XOR<
      FeeStructureUpdateManyMutationInput,
      FeeStructureUncheckedUpdateManyWithoutIntakeInput
    >;
  };

  export type NoticeUpsertWithWhereUniqueWithoutIntakeInput = {
    where: NoticeWhereUniqueInput;
    update: XOR<
      NoticeUpdateWithoutIntakeInput,
      NoticeUncheckedUpdateWithoutIntakeInput
    >;
    create: XOR<
      NoticeCreateWithoutIntakeInput,
      NoticeUncheckedCreateWithoutIntakeInput
    >;
  };

  export type NoticeUpdateWithWhereUniqueWithoutIntakeInput = {
    where: NoticeWhereUniqueInput;
    data: XOR<
      NoticeUpdateWithoutIntakeInput,
      NoticeUncheckedUpdateWithoutIntakeInput
    >;
  };

  export type NoticeUpdateManyWithWhereWithoutIntakeInput = {
    where: NoticeScalarWhereInput;
    data: XOR<
      NoticeUpdateManyMutationInput,
      NoticeUncheckedUpdateManyWithoutIntakeInput
    >;
  };

  export type IntakeCreateWithoutApplicantsInput = {
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    applicationDeadline: Date | string;
    maxCapacity?: number;
    status?: $Enums.IntakeStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    program: ProgramCreateNestedOneWithoutIntakesInput;
    feeStructures?: FeeStructureCreateNestedManyWithoutIntakeInput;
    notices?: NoticeCreateNestedManyWithoutIntakeInput;
  };

  export type IntakeUncheckedCreateWithoutApplicantsInput = {
    id?: number;
    name: string;
    programId: number;
    startDate: Date | string;
    endDate: Date | string;
    applicationDeadline: Date | string;
    maxCapacity?: number;
    status?: $Enums.IntakeStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    feeStructures?: FeeStructureUncheckedCreateNestedManyWithoutIntakeInput;
    notices?: NoticeUncheckedCreateNestedManyWithoutIntakeInput;
  };

  export type IntakeCreateOrConnectWithoutApplicantsInput = {
    where: IntakeWhereUniqueInput;
    create: XOR<
      IntakeCreateWithoutApplicantsInput,
      IntakeUncheckedCreateWithoutApplicantsInput
    >;
  };

  export type ProgramCreateWithoutApplicantsInput = {
    name: string;
    code: string;
    description?: string | null;
    duration?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department: DepartmentCreateNestedOneWithoutProgramsInput;
    intakes?: IntakeCreateNestedManyWithoutProgramInput;
    feeStructures?: FeeStructureCreateNestedManyWithoutProgramInput;
    notices?: NoticeCreateNestedManyWithoutProgramInput;
  };

  export type ProgramUncheckedCreateWithoutApplicantsInput = {
    id?: number;
    name: string;
    code: string;
    description?: string | null;
    duration?: string | null;
    departmentId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    intakes?: IntakeUncheckedCreateNestedManyWithoutProgramInput;
    feeStructures?: FeeStructureUncheckedCreateNestedManyWithoutProgramInput;
    notices?: NoticeUncheckedCreateNestedManyWithoutProgramInput;
  };

  export type ProgramCreateOrConnectWithoutApplicantsInput = {
    where: ProgramWhereUniqueInput;
    create: XOR<
      ProgramCreateWithoutApplicantsInput,
      ProgramUncheckedCreateWithoutApplicantsInput
    >;
  };

  export type StudentCreateWithoutApplicantInput = {
    studentId: string;
    enrolledAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutStudentInput;
    invoices?: InvoiceCreateNestedManyWithoutStudentInput;
  };

  export type StudentUncheckedCreateWithoutApplicantInput = {
    id?: number;
    studentId: string;
    userId: number;
    enrolledAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    invoices?: InvoiceUncheckedCreateNestedManyWithoutStudentInput;
  };

  export type StudentCreateOrConnectWithoutApplicantInput = {
    where: StudentWhereUniqueInput;
    create: XOR<
      StudentCreateWithoutApplicantInput,
      StudentUncheckedCreateWithoutApplicantInput
    >;
  };

  export type UserCreateWithoutApplicantInput = {
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    refreshToken?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student?: StudentCreateNestedOneWithoutUserInput;
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutApplicantInput = {
    id?: number;
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    refreshToken?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student?: StudentUncheckedCreateNestedOneWithoutUserInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutApplicantInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutApplicantInput,
      UserUncheckedCreateWithoutApplicantInput
    >;
  };

  export type IntakeUpsertWithoutApplicantsInput = {
    update: XOR<
      IntakeUpdateWithoutApplicantsInput,
      IntakeUncheckedUpdateWithoutApplicantsInput
    >;
    create: XOR<
      IntakeCreateWithoutApplicantsInput,
      IntakeUncheckedCreateWithoutApplicantsInput
    >;
    where?: IntakeWhereInput;
  };

  export type IntakeUpdateToOneWithWhereWithoutApplicantsInput = {
    where?: IntakeWhereInput;
    data: XOR<
      IntakeUpdateWithoutApplicantsInput,
      IntakeUncheckedUpdateWithoutApplicantsInput
    >;
  };

  export type IntakeUpdateWithoutApplicantsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicationDeadline?: DateTimeFieldUpdateOperationsInput | Date | string;
    maxCapacity?: IntFieldUpdateOperationsInput | number;
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    program?: ProgramUpdateOneRequiredWithoutIntakesNestedInput;
    feeStructures?: FeeStructureUpdateManyWithoutIntakeNestedInput;
    notices?: NoticeUpdateManyWithoutIntakeNestedInput;
  };

  export type IntakeUncheckedUpdateWithoutApplicantsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    programId?: IntFieldUpdateOperationsInput | number;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicationDeadline?: DateTimeFieldUpdateOperationsInput | Date | string;
    maxCapacity?: IntFieldUpdateOperationsInput | number;
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    feeStructures?: FeeStructureUncheckedUpdateManyWithoutIntakeNestedInput;
    notices?: NoticeUncheckedUpdateManyWithoutIntakeNestedInput;
  };

  export type ProgramUpsertWithoutApplicantsInput = {
    update: XOR<
      ProgramUpdateWithoutApplicantsInput,
      ProgramUncheckedUpdateWithoutApplicantsInput
    >;
    create: XOR<
      ProgramCreateWithoutApplicantsInput,
      ProgramUncheckedCreateWithoutApplicantsInput
    >;
    where?: ProgramWhereInput;
  };

  export type ProgramUpdateToOneWithWhereWithoutApplicantsInput = {
    where?: ProgramWhereInput;
    data: XOR<
      ProgramUpdateWithoutApplicantsInput,
      ProgramUncheckedUpdateWithoutApplicantsInput
    >;
  };

  export type ProgramUpdateWithoutApplicantsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    department?: DepartmentUpdateOneRequiredWithoutProgramsNestedInput;
    intakes?: IntakeUpdateManyWithoutProgramNestedInput;
    feeStructures?: FeeStructureUpdateManyWithoutProgramNestedInput;
    notices?: NoticeUpdateManyWithoutProgramNestedInput;
  };

  export type ProgramUncheckedUpdateWithoutApplicantsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableStringFieldUpdateOperationsInput | string | null;
    departmentId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    intakes?: IntakeUncheckedUpdateManyWithoutProgramNestedInput;
    feeStructures?: FeeStructureUncheckedUpdateManyWithoutProgramNestedInput;
    notices?: NoticeUncheckedUpdateManyWithoutProgramNestedInput;
  };

  export type StudentUpsertWithoutApplicantInput = {
    update: XOR<
      StudentUpdateWithoutApplicantInput,
      StudentUncheckedUpdateWithoutApplicantInput
    >;
    create: XOR<
      StudentCreateWithoutApplicantInput,
      StudentUncheckedCreateWithoutApplicantInput
    >;
    where?: StudentWhereInput;
  };

  export type StudentUpdateToOneWithWhereWithoutApplicantInput = {
    where?: StudentWhereInput;
    data: XOR<
      StudentUpdateWithoutApplicantInput,
      StudentUncheckedUpdateWithoutApplicantInput
    >;
  };

  export type StudentUpdateWithoutApplicantInput = {
    studentId?: StringFieldUpdateOperationsInput | string;
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutStudentNestedInput;
    invoices?: InvoiceUpdateManyWithoutStudentNestedInput;
  };

  export type StudentUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number;
    studentId?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: InvoiceUncheckedUpdateManyWithoutStudentNestedInput;
  };

  export type UserUpsertWithoutApplicantInput = {
    update: XOR<
      UserUpdateWithoutApplicantInput,
      UserUncheckedUpdateWithoutApplicantInput
    >;
    create: XOR<
      UserCreateWithoutApplicantInput,
      UserUncheckedCreateWithoutApplicantInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutApplicantInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutApplicantInput,
      UserUncheckedUpdateWithoutApplicantInput
    >;
  };

  export type UserUpdateWithoutApplicantInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: StudentUpdateOneWithoutUserNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type ApplicantCreateWithoutStudentInput = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth?: Date | string | null;
    address?: string | null;
    nationality?: string | null;
    previousEdu?: string | null;
    status?: $Enums.ApplicantStatus;
    rejectionNote?: string | null;
    submittedAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    intake: IntakeCreateNestedOneWithoutApplicantsInput;
    program: ProgramCreateNestedOneWithoutApplicantsInput;
    user?: UserCreateNestedOneWithoutApplicantInput;
  };

  export type ApplicantUncheckedCreateWithoutStudentInput = {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth?: Date | string | null;
    address?: string | null;
    nationality?: string | null;
    previousEdu?: string | null;
    intakeId: number;
    programId: number;
    status?: $Enums.ApplicantStatus;
    rejectionNote?: string | null;
    submittedAt?: Date | string;
    userId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ApplicantCreateOrConnectWithoutStudentInput = {
    where: ApplicantWhereUniqueInput;
    create: XOR<
      ApplicantCreateWithoutStudentInput,
      ApplicantUncheckedCreateWithoutStudentInput
    >;
  };

  export type UserCreateWithoutStudentInput = {
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    refreshToken?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant?: ApplicantCreateNestedOneWithoutUserInput;
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: number;
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    refreshToken?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant?: ApplicantUncheckedCreateNestedOneWithoutUserInput;
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutStudentInput,
      UserUncheckedCreateWithoutStudentInput
    >;
  };

  export type InvoiceCreateWithoutStudentInput = {
    invoiceNumber: string;
    amount: number;
    paidAmount?: number;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    feeStructure: FeeStructureCreateNestedOneWithoutInvoicesInput;
    payments?: PaymentCreateNestedManyWithoutInvoiceInput;
  };

  export type InvoiceUncheckedCreateWithoutStudentInput = {
    id?: number;
    invoiceNumber: string;
    feeStructureId: number;
    amount: number;
    paidAmount?: number;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput;
  };

  export type InvoiceCreateOrConnectWithoutStudentInput = {
    where: InvoiceWhereUniqueInput;
    create: XOR<
      InvoiceCreateWithoutStudentInput,
      InvoiceUncheckedCreateWithoutStudentInput
    >;
  };

  export type InvoiceCreateManyStudentInputEnvelope = {
    data: InvoiceCreateManyStudentInput | InvoiceCreateManyStudentInput[];
    skipDuplicates?: boolean;
  };

  export type ApplicantUpsertWithoutStudentInput = {
    update: XOR<
      ApplicantUpdateWithoutStudentInput,
      ApplicantUncheckedUpdateWithoutStudentInput
    >;
    create: XOR<
      ApplicantCreateWithoutStudentInput,
      ApplicantUncheckedCreateWithoutStudentInput
    >;
    where?: ApplicantWhereInput;
  };

  export type ApplicantUpdateToOneWithWhereWithoutStudentInput = {
    where?: ApplicantWhereInput;
    data: XOR<
      ApplicantUpdateWithoutStudentInput,
      ApplicantUncheckedUpdateWithoutStudentInput
    >;
  };

  export type ApplicantUpdateWithoutStudentInput = {
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    previousEdu?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | EnumApplicantStatusFieldUpdateOperationsInput
      | $Enums.ApplicantStatus;
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    intake?: IntakeUpdateOneRequiredWithoutApplicantsNestedInput;
    program?: ProgramUpdateOneRequiredWithoutApplicantsNestedInput;
    user?: UserUpdateOneWithoutApplicantNestedInput;
  };

  export type ApplicantUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    previousEdu?: NullableStringFieldUpdateOperationsInput | string | null;
    intakeId?: IntFieldUpdateOperationsInput | number;
    programId?: IntFieldUpdateOperationsInput | number;
    status?:
      | EnumApplicantStatusFieldUpdateOperationsInput
      | $Enums.ApplicantStatus;
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUpsertWithoutStudentInput = {
    update: XOR<
      UserUpdateWithoutStudentInput,
      UserUncheckedUpdateWithoutStudentInput
    >;
    create: XOR<
      UserCreateWithoutStudentInput,
      UserUncheckedCreateWithoutStudentInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutStudentInput,
      UserUncheckedUpdateWithoutStudentInput
    >;
  };

  export type UserUpdateWithoutStudentInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: ApplicantUpdateOneWithoutUserNestedInput;
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: ApplicantUncheckedUpdateOneWithoutUserNestedInput;
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type InvoiceUpsertWithWhereUniqueWithoutStudentInput = {
    where: InvoiceWhereUniqueInput;
    update: XOR<
      InvoiceUpdateWithoutStudentInput,
      InvoiceUncheckedUpdateWithoutStudentInput
    >;
    create: XOR<
      InvoiceCreateWithoutStudentInput,
      InvoiceUncheckedCreateWithoutStudentInput
    >;
  };

  export type InvoiceUpdateWithWhereUniqueWithoutStudentInput = {
    where: InvoiceWhereUniqueInput;
    data: XOR<
      InvoiceUpdateWithoutStudentInput,
      InvoiceUncheckedUpdateWithoutStudentInput
    >;
  };

  export type InvoiceUpdateManyWithWhereWithoutStudentInput = {
    where: InvoiceScalarWhereInput;
    data: XOR<
      InvoiceUpdateManyMutationInput,
      InvoiceUncheckedUpdateManyWithoutStudentInput
    >;
  };

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[];
    OR?: InvoiceScalarWhereInput[];
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[];
    id?: IntFilter<'Invoice'> | number;
    invoiceNumber?: StringFilter<'Invoice'> | string;
    studentId?: IntFilter<'Invoice'> | number;
    feeStructureId?: IntFilter<'Invoice'> | number;
    amount?: FloatFilter<'Invoice'> | number;
    paidAmount?: FloatFilter<'Invoice'> | number;
    dueDate?: DateTimeFilter<'Invoice'> | Date | string;
    status?: EnumInvoiceStatusFilter<'Invoice'> | $Enums.InvoiceStatus;
    createdAt?: DateTimeFilter<'Invoice'> | Date | string;
    updatedAt?: DateTimeFilter<'Invoice'> | Date | string;
  };

  export type ProgramCreateWithoutFeeStructuresInput = {
    name: string;
    code: string;
    description?: string | null;
    duration?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department: DepartmentCreateNestedOneWithoutProgramsInput;
    intakes?: IntakeCreateNestedManyWithoutProgramInput;
    applicants?: ApplicantCreateNestedManyWithoutProgramInput;
    notices?: NoticeCreateNestedManyWithoutProgramInput;
  };

  export type ProgramUncheckedCreateWithoutFeeStructuresInput = {
    id?: number;
    name: string;
    code: string;
    description?: string | null;
    duration?: string | null;
    departmentId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    intakes?: IntakeUncheckedCreateNestedManyWithoutProgramInput;
    applicants?: ApplicantUncheckedCreateNestedManyWithoutProgramInput;
    notices?: NoticeUncheckedCreateNestedManyWithoutProgramInput;
  };

  export type ProgramCreateOrConnectWithoutFeeStructuresInput = {
    where: ProgramWhereUniqueInput;
    create: XOR<
      ProgramCreateWithoutFeeStructuresInput,
      ProgramUncheckedCreateWithoutFeeStructuresInput
    >;
  };

  export type IntakeCreateWithoutFeeStructuresInput = {
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    applicationDeadline: Date | string;
    maxCapacity?: number;
    status?: $Enums.IntakeStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    program: ProgramCreateNestedOneWithoutIntakesInput;
    applicants?: ApplicantCreateNestedManyWithoutIntakeInput;
    notices?: NoticeCreateNestedManyWithoutIntakeInput;
  };

  export type IntakeUncheckedCreateWithoutFeeStructuresInput = {
    id?: number;
    name: string;
    programId: number;
    startDate: Date | string;
    endDate: Date | string;
    applicationDeadline: Date | string;
    maxCapacity?: number;
    status?: $Enums.IntakeStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicants?: ApplicantUncheckedCreateNestedManyWithoutIntakeInput;
    notices?: NoticeUncheckedCreateNestedManyWithoutIntakeInput;
  };

  export type IntakeCreateOrConnectWithoutFeeStructuresInput = {
    where: IntakeWhereUniqueInput;
    create: XOR<
      IntakeCreateWithoutFeeStructuresInput,
      IntakeUncheckedCreateWithoutFeeStructuresInput
    >;
  };

  export type InvoiceCreateWithoutFeeStructureInput = {
    invoiceNumber: string;
    amount: number;
    paidAmount?: number;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: StudentCreateNestedOneWithoutInvoicesInput;
    payments?: PaymentCreateNestedManyWithoutInvoiceInput;
  };

  export type InvoiceUncheckedCreateWithoutFeeStructureInput = {
    id?: number;
    invoiceNumber: string;
    studentId: number;
    amount: number;
    paidAmount?: number;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput;
  };

  export type InvoiceCreateOrConnectWithoutFeeStructureInput = {
    where: InvoiceWhereUniqueInput;
    create: XOR<
      InvoiceCreateWithoutFeeStructureInput,
      InvoiceUncheckedCreateWithoutFeeStructureInput
    >;
  };

  export type InvoiceCreateManyFeeStructureInputEnvelope = {
    data:
      | InvoiceCreateManyFeeStructureInput
      | InvoiceCreateManyFeeStructureInput[];
    skipDuplicates?: boolean;
  };

  export type ProgramUpsertWithoutFeeStructuresInput = {
    update: XOR<
      ProgramUpdateWithoutFeeStructuresInput,
      ProgramUncheckedUpdateWithoutFeeStructuresInput
    >;
    create: XOR<
      ProgramCreateWithoutFeeStructuresInput,
      ProgramUncheckedCreateWithoutFeeStructuresInput
    >;
    where?: ProgramWhereInput;
  };

  export type ProgramUpdateToOneWithWhereWithoutFeeStructuresInput = {
    where?: ProgramWhereInput;
    data: XOR<
      ProgramUpdateWithoutFeeStructuresInput,
      ProgramUncheckedUpdateWithoutFeeStructuresInput
    >;
  };

  export type ProgramUpdateWithoutFeeStructuresInput = {
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    department?: DepartmentUpdateOneRequiredWithoutProgramsNestedInput;
    intakes?: IntakeUpdateManyWithoutProgramNestedInput;
    applicants?: ApplicantUpdateManyWithoutProgramNestedInput;
    notices?: NoticeUpdateManyWithoutProgramNestedInput;
  };

  export type ProgramUncheckedUpdateWithoutFeeStructuresInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableStringFieldUpdateOperationsInput | string | null;
    departmentId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    intakes?: IntakeUncheckedUpdateManyWithoutProgramNestedInput;
    applicants?: ApplicantUncheckedUpdateManyWithoutProgramNestedInput;
    notices?: NoticeUncheckedUpdateManyWithoutProgramNestedInput;
  };

  export type IntakeUpsertWithoutFeeStructuresInput = {
    update: XOR<
      IntakeUpdateWithoutFeeStructuresInput,
      IntakeUncheckedUpdateWithoutFeeStructuresInput
    >;
    create: XOR<
      IntakeCreateWithoutFeeStructuresInput,
      IntakeUncheckedCreateWithoutFeeStructuresInput
    >;
    where?: IntakeWhereInput;
  };

  export type IntakeUpdateToOneWithWhereWithoutFeeStructuresInput = {
    where?: IntakeWhereInput;
    data: XOR<
      IntakeUpdateWithoutFeeStructuresInput,
      IntakeUncheckedUpdateWithoutFeeStructuresInput
    >;
  };

  export type IntakeUpdateWithoutFeeStructuresInput = {
    name?: StringFieldUpdateOperationsInput | string;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicationDeadline?: DateTimeFieldUpdateOperationsInput | Date | string;
    maxCapacity?: IntFieldUpdateOperationsInput | number;
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    program?: ProgramUpdateOneRequiredWithoutIntakesNestedInput;
    applicants?: ApplicantUpdateManyWithoutIntakeNestedInput;
    notices?: NoticeUpdateManyWithoutIntakeNestedInput;
  };

  export type IntakeUncheckedUpdateWithoutFeeStructuresInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    programId?: IntFieldUpdateOperationsInput | number;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicationDeadline?: DateTimeFieldUpdateOperationsInput | Date | string;
    maxCapacity?: IntFieldUpdateOperationsInput | number;
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicants?: ApplicantUncheckedUpdateManyWithoutIntakeNestedInput;
    notices?: NoticeUncheckedUpdateManyWithoutIntakeNestedInput;
  };

  export type InvoiceUpsertWithWhereUniqueWithoutFeeStructureInput = {
    where: InvoiceWhereUniqueInput;
    update: XOR<
      InvoiceUpdateWithoutFeeStructureInput,
      InvoiceUncheckedUpdateWithoutFeeStructureInput
    >;
    create: XOR<
      InvoiceCreateWithoutFeeStructureInput,
      InvoiceUncheckedCreateWithoutFeeStructureInput
    >;
  };

  export type InvoiceUpdateWithWhereUniqueWithoutFeeStructureInput = {
    where: InvoiceWhereUniqueInput;
    data: XOR<
      InvoiceUpdateWithoutFeeStructureInput,
      InvoiceUncheckedUpdateWithoutFeeStructureInput
    >;
  };

  export type InvoiceUpdateManyWithWhereWithoutFeeStructureInput = {
    where: InvoiceScalarWhereInput;
    data: XOR<
      InvoiceUpdateManyMutationInput,
      InvoiceUncheckedUpdateManyWithoutFeeStructureInput
    >;
  };

  export type StudentCreateWithoutInvoicesInput = {
    studentId: string;
    enrolledAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant: ApplicantCreateNestedOneWithoutStudentInput;
    user: UserCreateNestedOneWithoutStudentInput;
  };

  export type StudentUncheckedCreateWithoutInvoicesInput = {
    id?: number;
    studentId: string;
    applicantId: number;
    userId: number;
    enrolledAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type StudentCreateOrConnectWithoutInvoicesInput = {
    where: StudentWhereUniqueInput;
    create: XOR<
      StudentCreateWithoutInvoicesInput,
      StudentUncheckedCreateWithoutInvoicesInput
    >;
  };

  export type FeeStructureCreateWithoutInvoicesInput = {
    name: string;
    amount: number;
    currency?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    program: ProgramCreateNestedOneWithoutFeeStructuresInput;
    intake?: IntakeCreateNestedOneWithoutFeeStructuresInput;
  };

  export type FeeStructureUncheckedCreateWithoutInvoicesInput = {
    id?: number;
    name: string;
    amount: number;
    currency?: string;
    programId: number;
    intakeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type FeeStructureCreateOrConnectWithoutInvoicesInput = {
    where: FeeStructureWhereUniqueInput;
    create: XOR<
      FeeStructureCreateWithoutInvoicesInput,
      FeeStructureUncheckedCreateWithoutInvoicesInput
    >;
  };

  export type PaymentCreateWithoutInvoiceInput = {
    amount: number;
    method: string;
    proofUrl?: string | null;
    reference?: string | null;
    status?: $Enums.PaymentStatus;
    notes?: string | null;
    verifiedAt?: Date | string | null;
    paymentDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PaymentUncheckedCreateWithoutInvoiceInput = {
    id?: number;
    amount: number;
    method: string;
    proofUrl?: string | null;
    reference?: string | null;
    status?: $Enums.PaymentStatus;
    notes?: string | null;
    verifiedAt?: Date | string | null;
    paymentDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PaymentCreateOrConnectWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput;
    create: XOR<
      PaymentCreateWithoutInvoiceInput,
      PaymentUncheckedCreateWithoutInvoiceInput
    >;
  };

  export type PaymentCreateManyInvoiceInputEnvelope = {
    data: PaymentCreateManyInvoiceInput | PaymentCreateManyInvoiceInput[];
    skipDuplicates?: boolean;
  };

  export type StudentUpsertWithoutInvoicesInput = {
    update: XOR<
      StudentUpdateWithoutInvoicesInput,
      StudentUncheckedUpdateWithoutInvoicesInput
    >;
    create: XOR<
      StudentCreateWithoutInvoicesInput,
      StudentUncheckedCreateWithoutInvoicesInput
    >;
    where?: StudentWhereInput;
  };

  export type StudentUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: StudentWhereInput;
    data: XOR<
      StudentUpdateWithoutInvoicesInput,
      StudentUncheckedUpdateWithoutInvoicesInput
    >;
  };

  export type StudentUpdateWithoutInvoicesInput = {
    studentId?: StringFieldUpdateOperationsInput | string;
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: ApplicantUpdateOneRequiredWithoutStudentNestedInput;
    user?: UserUpdateOneRequiredWithoutStudentNestedInput;
  };

  export type StudentUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    studentId?: StringFieldUpdateOperationsInput | string;
    applicantId?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeeStructureUpsertWithoutInvoicesInput = {
    update: XOR<
      FeeStructureUpdateWithoutInvoicesInput,
      FeeStructureUncheckedUpdateWithoutInvoicesInput
    >;
    create: XOR<
      FeeStructureCreateWithoutInvoicesInput,
      FeeStructureUncheckedCreateWithoutInvoicesInput
    >;
    where?: FeeStructureWhereInput;
  };

  export type FeeStructureUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: FeeStructureWhereInput;
    data: XOR<
      FeeStructureUpdateWithoutInvoicesInput,
      FeeStructureUncheckedUpdateWithoutInvoicesInput
    >;
  };

  export type FeeStructureUpdateWithoutInvoicesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    program?: ProgramUpdateOneRequiredWithoutFeeStructuresNestedInput;
    intake?: IntakeUpdateOneWithoutFeeStructuresNestedInput;
  };

  export type FeeStructureUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    programId?: IntFieldUpdateOperationsInput | number;
    intakeId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput;
    update: XOR<
      PaymentUpdateWithoutInvoiceInput,
      PaymentUncheckedUpdateWithoutInvoiceInput
    >;
    create: XOR<
      PaymentCreateWithoutInvoiceInput,
      PaymentUncheckedCreateWithoutInvoiceInput
    >;
  };

  export type PaymentUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput;
    data: XOR<
      PaymentUpdateWithoutInvoiceInput,
      PaymentUncheckedUpdateWithoutInvoiceInput
    >;
  };

  export type PaymentUpdateManyWithWhereWithoutInvoiceInput = {
    where: PaymentScalarWhereInput;
    data: XOR<
      PaymentUpdateManyMutationInput,
      PaymentUncheckedUpdateManyWithoutInvoiceInput
    >;
  };

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
    OR?: PaymentScalarWhereInput[];
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
    id?: IntFilter<'Payment'> | number;
    invoiceId?: IntFilter<'Payment'> | number;
    amount?: FloatFilter<'Payment'> | number;
    method?: StringFilter<'Payment'> | string;
    proofUrl?: StringNullableFilter<'Payment'> | string | null;
    reference?: StringNullableFilter<'Payment'> | string | null;
    status?: EnumPaymentStatusFilter<'Payment'> | $Enums.PaymentStatus;
    notes?: StringNullableFilter<'Payment'> | string | null;
    verifiedAt?: DateTimeNullableFilter<'Payment'> | Date | string | null;
    paymentDate?: DateTimeFilter<'Payment'> | Date | string;
    createdAt?: DateTimeFilter<'Payment'> | Date | string;
    updatedAt?: DateTimeFilter<'Payment'> | Date | string;
  };

  export type InvoiceCreateWithoutPaymentsInput = {
    invoiceNumber: string;
    amount: number;
    paidAmount?: number;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    student: StudentCreateNestedOneWithoutInvoicesInput;
    feeStructure: FeeStructureCreateNestedOneWithoutInvoicesInput;
  };

  export type InvoiceUncheckedCreateWithoutPaymentsInput = {
    id?: number;
    invoiceNumber: string;
    studentId: number;
    feeStructureId: number;
    amount: number;
    paidAmount?: number;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InvoiceCreateOrConnectWithoutPaymentsInput = {
    where: InvoiceWhereUniqueInput;
    create: XOR<
      InvoiceCreateWithoutPaymentsInput,
      InvoiceUncheckedCreateWithoutPaymentsInput
    >;
  };

  export type InvoiceUpsertWithoutPaymentsInput = {
    update: XOR<
      InvoiceUpdateWithoutPaymentsInput,
      InvoiceUncheckedUpdateWithoutPaymentsInput
    >;
    create: XOR<
      InvoiceCreateWithoutPaymentsInput,
      InvoiceUncheckedCreateWithoutPaymentsInput
    >;
    where?: InvoiceWhereInput;
  };

  export type InvoiceUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: InvoiceWhereInput;
    data: XOR<
      InvoiceUpdateWithoutPaymentsInput,
      InvoiceUncheckedUpdateWithoutPaymentsInput
    >;
  };

  export type InvoiceUpdateWithoutPaymentsInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    paidAmount?: FloatFieldUpdateOperationsInput | number;
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: StudentUpdateOneRequiredWithoutInvoicesNestedInput;
    feeStructure?: FeeStructureUpdateOneRequiredWithoutInvoicesNestedInput;
  };

  export type InvoiceUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    invoiceNumber?: StringFieldUpdateOperationsInput | string;
    studentId?: IntFieldUpdateOperationsInput | number;
    feeStructureId?: IntFieldUpdateOperationsInput | number;
    amount?: FloatFieldUpdateOperationsInput | number;
    paidAmount?: FloatFieldUpdateOperationsInput | number;
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProgramCreateWithoutNoticesInput = {
    name: string;
    code: string;
    description?: string | null;
    duration?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department: DepartmentCreateNestedOneWithoutProgramsInput;
    intakes?: IntakeCreateNestedManyWithoutProgramInput;
    applicants?: ApplicantCreateNestedManyWithoutProgramInput;
    feeStructures?: FeeStructureCreateNestedManyWithoutProgramInput;
  };

  export type ProgramUncheckedCreateWithoutNoticesInput = {
    id?: number;
    name: string;
    code: string;
    description?: string | null;
    duration?: string | null;
    departmentId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    intakes?: IntakeUncheckedCreateNestedManyWithoutProgramInput;
    applicants?: ApplicantUncheckedCreateNestedManyWithoutProgramInput;
    feeStructures?: FeeStructureUncheckedCreateNestedManyWithoutProgramInput;
  };

  export type ProgramCreateOrConnectWithoutNoticesInput = {
    where: ProgramWhereUniqueInput;
    create: XOR<
      ProgramCreateWithoutNoticesInput,
      ProgramUncheckedCreateWithoutNoticesInput
    >;
  };

  export type IntakeCreateWithoutNoticesInput = {
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    applicationDeadline: Date | string;
    maxCapacity?: number;
    status?: $Enums.IntakeStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    program: ProgramCreateNestedOneWithoutIntakesInput;
    applicants?: ApplicantCreateNestedManyWithoutIntakeInput;
    feeStructures?: FeeStructureCreateNestedManyWithoutIntakeInput;
  };

  export type IntakeUncheckedCreateWithoutNoticesInput = {
    id?: number;
    name: string;
    programId: number;
    startDate: Date | string;
    endDate: Date | string;
    applicationDeadline: Date | string;
    maxCapacity?: number;
    status?: $Enums.IntakeStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicants?: ApplicantUncheckedCreateNestedManyWithoutIntakeInput;
    feeStructures?: FeeStructureUncheckedCreateNestedManyWithoutIntakeInput;
  };

  export type IntakeCreateOrConnectWithoutNoticesInput = {
    where: IntakeWhereUniqueInput;
    create: XOR<
      IntakeCreateWithoutNoticesInput,
      IntakeUncheckedCreateWithoutNoticesInput
    >;
  };

  export type ProgramUpsertWithoutNoticesInput = {
    update: XOR<
      ProgramUpdateWithoutNoticesInput,
      ProgramUncheckedUpdateWithoutNoticesInput
    >;
    create: XOR<
      ProgramCreateWithoutNoticesInput,
      ProgramUncheckedCreateWithoutNoticesInput
    >;
    where?: ProgramWhereInput;
  };

  export type ProgramUpdateToOneWithWhereWithoutNoticesInput = {
    where?: ProgramWhereInput;
    data: XOR<
      ProgramUpdateWithoutNoticesInput,
      ProgramUncheckedUpdateWithoutNoticesInput
    >;
  };

  export type ProgramUpdateWithoutNoticesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    department?: DepartmentUpdateOneRequiredWithoutProgramsNestedInput;
    intakes?: IntakeUpdateManyWithoutProgramNestedInput;
    applicants?: ApplicantUpdateManyWithoutProgramNestedInput;
    feeStructures?: FeeStructureUpdateManyWithoutProgramNestedInput;
  };

  export type ProgramUncheckedUpdateWithoutNoticesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableStringFieldUpdateOperationsInput | string | null;
    departmentId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    intakes?: IntakeUncheckedUpdateManyWithoutProgramNestedInput;
    applicants?: ApplicantUncheckedUpdateManyWithoutProgramNestedInput;
    feeStructures?: FeeStructureUncheckedUpdateManyWithoutProgramNestedInput;
  };

  export type IntakeUpsertWithoutNoticesInput = {
    update: XOR<
      IntakeUpdateWithoutNoticesInput,
      IntakeUncheckedUpdateWithoutNoticesInput
    >;
    create: XOR<
      IntakeCreateWithoutNoticesInput,
      IntakeUncheckedCreateWithoutNoticesInput
    >;
    where?: IntakeWhereInput;
  };

  export type IntakeUpdateToOneWithWhereWithoutNoticesInput = {
    where?: IntakeWhereInput;
    data: XOR<
      IntakeUpdateWithoutNoticesInput,
      IntakeUncheckedUpdateWithoutNoticesInput
    >;
  };

  export type IntakeUpdateWithoutNoticesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicationDeadline?: DateTimeFieldUpdateOperationsInput | Date | string;
    maxCapacity?: IntFieldUpdateOperationsInput | number;
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    program?: ProgramUpdateOneRequiredWithoutIntakesNestedInput;
    applicants?: ApplicantUpdateManyWithoutIntakeNestedInput;
    feeStructures?: FeeStructureUpdateManyWithoutIntakeNestedInput;
  };

  export type IntakeUncheckedUpdateWithoutNoticesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    programId?: IntFieldUpdateOperationsInput | number;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicationDeadline?: DateTimeFieldUpdateOperationsInput | Date | string;
    maxCapacity?: IntFieldUpdateOperationsInput | number;
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicants?: ApplicantUncheckedUpdateManyWithoutIntakeNestedInput;
    feeStructures?: FeeStructureUncheckedUpdateManyWithoutIntakeNestedInput;
  };

  export type UserCreateWithoutAuditLogsInput = {
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    refreshToken?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant?: ApplicantCreateNestedOneWithoutUserInput;
    student?: StudentCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: number;
    email: string;
    name?: string | null;
    password: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    refreshToken?: string | null;
    resetToken?: string | null;
    resetTokenExpiry?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant?: ApplicantUncheckedCreateNestedOneWithoutUserInput;
    student?: StudentUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutAuditLogsInput,
      UserUncheckedCreateWithoutAuditLogsInput
    >;
  };

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<
      UserUpdateWithoutAuditLogsInput,
      UserUncheckedUpdateWithoutAuditLogsInput
    >;
    create: XOR<
      UserCreateWithoutAuditLogsInput,
      UserUncheckedCreateWithoutAuditLogsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutAuditLogsInput,
      UserUncheckedUpdateWithoutAuditLogsInput
    >;
  };

  export type UserUpdateWithoutAuditLogsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: ApplicantUpdateOneWithoutUserNestedInput;
    student?: StudentUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null;
    resetTokenExpiry?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: ApplicantUncheckedUpdateOneWithoutUserNestedInput;
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type AuditLogCreateManyUserInput = {
    id?: number;
    action: string;
    entity: string;
    entityId: string;
    details?: string | null;
    ipAddress?: string | null;
    timestamp?: Date | string;
  };

  export type AuditLogUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string;
    entity?: StringFieldUpdateOperationsInput | string;
    entityId?: StringFieldUpdateOperationsInput | string;
    details?: NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    action?: StringFieldUpdateOperationsInput | string;
    entity?: StringFieldUpdateOperationsInput | string;
    entityId?: StringFieldUpdateOperationsInput | string;
    details?: NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    action?: StringFieldUpdateOperationsInput | string;
    entity?: StringFieldUpdateOperationsInput | string;
    entityId?: StringFieldUpdateOperationsInput | string;
    details?: NullableStringFieldUpdateOperationsInput | string | null;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProgramCreateManyDepartmentInput = {
    id?: number;
    name: string;
    code: string;
    description?: string | null;
    duration?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProgramUpdateWithoutDepartmentInput = {
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    intakes?: IntakeUpdateManyWithoutProgramNestedInput;
    applicants?: ApplicantUpdateManyWithoutProgramNestedInput;
    feeStructures?: FeeStructureUpdateManyWithoutProgramNestedInput;
    notices?: NoticeUpdateManyWithoutProgramNestedInput;
  };

  export type ProgramUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    intakes?: IntakeUncheckedUpdateManyWithoutProgramNestedInput;
    applicants?: ApplicantUncheckedUpdateManyWithoutProgramNestedInput;
    feeStructures?: FeeStructureUncheckedUpdateManyWithoutProgramNestedInput;
    notices?: NoticeUncheckedUpdateManyWithoutProgramNestedInput;
  };

  export type ProgramUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    code?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    duration?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntakeCreateManyProgramInput = {
    id?: number;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    applicationDeadline: Date | string;
    maxCapacity?: number;
    status?: $Enums.IntakeStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ApplicantCreateManyProgramInput = {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth?: Date | string | null;
    address?: string | null;
    nationality?: string | null;
    previousEdu?: string | null;
    intakeId: number;
    status?: $Enums.ApplicantStatus;
    rejectionNote?: string | null;
    submittedAt?: Date | string;
    userId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type FeeStructureCreateManyProgramInput = {
    id?: number;
    name: string;
    amount: number;
    currency?: string;
    intakeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NoticeCreateManyProgramInput = {
    id?: number;
    title: string;
    content: string;
    audience?: $Enums.NoticeAudience;
    intakeId?: number | null;
    isPublished?: boolean;
    expiryDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type IntakeUpdateWithoutProgramInput = {
    name?: StringFieldUpdateOperationsInput | string;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicationDeadline?: DateTimeFieldUpdateOperationsInput | Date | string;
    maxCapacity?: IntFieldUpdateOperationsInput | number;
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicants?: ApplicantUpdateManyWithoutIntakeNestedInput;
    feeStructures?: FeeStructureUpdateManyWithoutIntakeNestedInput;
    notices?: NoticeUpdateManyWithoutIntakeNestedInput;
  };

  export type IntakeUncheckedUpdateWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicationDeadline?: DateTimeFieldUpdateOperationsInput | Date | string;
    maxCapacity?: IntFieldUpdateOperationsInput | number;
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicants?: ApplicantUncheckedUpdateManyWithoutIntakeNestedInput;
    feeStructures?: FeeStructureUncheckedUpdateManyWithoutIntakeNestedInput;
    notices?: NoticeUncheckedUpdateManyWithoutIntakeNestedInput;
  };

  export type IntakeUncheckedUpdateManyWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicationDeadline?: DateTimeFieldUpdateOperationsInput | Date | string;
    maxCapacity?: IntFieldUpdateOperationsInput | number;
    status?: EnumIntakeStatusFieldUpdateOperationsInput | $Enums.IntakeStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicantUpdateWithoutProgramInput = {
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    previousEdu?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | EnumApplicantStatusFieldUpdateOperationsInput
      | $Enums.ApplicantStatus;
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    intake?: IntakeUpdateOneRequiredWithoutApplicantsNestedInput;
    student?: StudentUpdateOneWithoutApplicantNestedInput;
    user?: UserUpdateOneWithoutApplicantNestedInput;
  };

  export type ApplicantUncheckedUpdateWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    previousEdu?: NullableStringFieldUpdateOperationsInput | string | null;
    intakeId?: IntFieldUpdateOperationsInput | number;
    status?:
      | EnumApplicantStatusFieldUpdateOperationsInput
      | $Enums.ApplicantStatus;
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: StudentUncheckedUpdateOneWithoutApplicantNestedInput;
  };

  export type ApplicantUncheckedUpdateManyWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    previousEdu?: NullableStringFieldUpdateOperationsInput | string | null;
    intakeId?: IntFieldUpdateOperationsInput | number;
    status?:
      | EnumApplicantStatusFieldUpdateOperationsInput
      | $Enums.ApplicantStatus;
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeeStructureUpdateWithoutProgramInput = {
    name?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    intake?: IntakeUpdateOneWithoutFeeStructuresNestedInput;
    invoices?: InvoiceUpdateManyWithoutFeeStructureNestedInput;
  };

  export type FeeStructureUncheckedUpdateWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    intakeId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: InvoiceUncheckedUpdateManyWithoutFeeStructureNestedInput;
  };

  export type FeeStructureUncheckedUpdateManyWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    intakeId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NoticeUpdateWithoutProgramInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    audience?:
      | EnumNoticeAudienceFieldUpdateOperationsInput
      | $Enums.NoticeAudience;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    intake?: IntakeUpdateOneWithoutNoticesNestedInput;
  };

  export type NoticeUncheckedUpdateWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    audience?:
      | EnumNoticeAudienceFieldUpdateOperationsInput
      | $Enums.NoticeAudience;
    intakeId?: NullableIntFieldUpdateOperationsInput | number | null;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NoticeUncheckedUpdateManyWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    audience?:
      | EnumNoticeAudienceFieldUpdateOperationsInput
      | $Enums.NoticeAudience;
    intakeId?: NullableIntFieldUpdateOperationsInput | number | null;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicantCreateManyIntakeInput = {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth?: Date | string | null;
    address?: string | null;
    nationality?: string | null;
    previousEdu?: string | null;
    programId: number;
    status?: $Enums.ApplicantStatus;
    rejectionNote?: string | null;
    submittedAt?: Date | string;
    userId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type FeeStructureCreateManyIntakeInput = {
    id?: number;
    name: string;
    amount: number;
    currency?: string;
    programId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NoticeCreateManyIntakeInput = {
    id?: number;
    title: string;
    content: string;
    audience?: $Enums.NoticeAudience;
    programId?: number | null;
    isPublished?: boolean;
    expiryDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ApplicantUpdateWithoutIntakeInput = {
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    previousEdu?: NullableStringFieldUpdateOperationsInput | string | null;
    status?:
      | EnumApplicantStatusFieldUpdateOperationsInput
      | $Enums.ApplicantStatus;
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    program?: ProgramUpdateOneRequiredWithoutApplicantsNestedInput;
    student?: StudentUpdateOneWithoutApplicantNestedInput;
    user?: UserUpdateOneWithoutApplicantNestedInput;
  };

  export type ApplicantUncheckedUpdateWithoutIntakeInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    previousEdu?: NullableStringFieldUpdateOperationsInput | string | null;
    programId?: IntFieldUpdateOperationsInput | number;
    status?:
      | EnumApplicantStatusFieldUpdateOperationsInput
      | $Enums.ApplicantStatus;
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: StudentUncheckedUpdateOneWithoutApplicantNestedInput;
  };

  export type ApplicantUncheckedUpdateManyWithoutIntakeInput = {
    id?: IntFieldUpdateOperationsInput | number;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    dateOfBirth?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: NullableStringFieldUpdateOperationsInput | string | null;
    previousEdu?: NullableStringFieldUpdateOperationsInput | string | null;
    programId?: IntFieldUpdateOperationsInput | number;
    status?:
      | EnumApplicantStatusFieldUpdateOperationsInput
      | $Enums.ApplicantStatus;
    rejectionNote?: NullableStringFieldUpdateOperationsInput | string | null;
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FeeStructureUpdateWithoutIntakeInput = {
    name?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    program?: ProgramUpdateOneRequiredWithoutFeeStructuresNestedInput;
    invoices?: InvoiceUpdateManyWithoutFeeStructureNestedInput;
  };

  export type FeeStructureUncheckedUpdateWithoutIntakeInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    programId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: InvoiceUncheckedUpdateManyWithoutFeeStructureNestedInput;
  };

  export type FeeStructureUncheckedUpdateManyWithoutIntakeInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    currency?: StringFieldUpdateOperationsInput | string;
    programId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NoticeUpdateWithoutIntakeInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    audience?:
      | EnumNoticeAudienceFieldUpdateOperationsInput
      | $Enums.NoticeAudience;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    program?: ProgramUpdateOneWithoutNoticesNestedInput;
  };

  export type NoticeUncheckedUpdateWithoutIntakeInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    audience?:
      | EnumNoticeAudienceFieldUpdateOperationsInput
      | $Enums.NoticeAudience;
    programId?: NullableIntFieldUpdateOperationsInput | number | null;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NoticeUncheckedUpdateManyWithoutIntakeInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    audience?:
      | EnumNoticeAudienceFieldUpdateOperationsInput
      | $Enums.NoticeAudience;
    programId?: NullableIntFieldUpdateOperationsInput | number | null;
    isPublished?: BoolFieldUpdateOperationsInput | boolean;
    expiryDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvoiceCreateManyStudentInput = {
    id?: number;
    invoiceNumber: string;
    feeStructureId: number;
    amount: number;
    paidAmount?: number;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InvoiceUpdateWithoutStudentInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    paidAmount?: FloatFieldUpdateOperationsInput | number;
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    feeStructure?: FeeStructureUpdateOneRequiredWithoutInvoicesNestedInput;
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput;
  };

  export type InvoiceUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number;
    invoiceNumber?: StringFieldUpdateOperationsInput | string;
    feeStructureId?: IntFieldUpdateOperationsInput | number;
    amount?: FloatFieldUpdateOperationsInput | number;
    paidAmount?: FloatFieldUpdateOperationsInput | number;
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput;
  };

  export type InvoiceUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number;
    invoiceNumber?: StringFieldUpdateOperationsInput | string;
    feeStructureId?: IntFieldUpdateOperationsInput | number;
    amount?: FloatFieldUpdateOperationsInput | number;
    paidAmount?: FloatFieldUpdateOperationsInput | number;
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvoiceCreateManyFeeStructureInput = {
    id?: number;
    invoiceNumber: string;
    studentId: number;
    amount: number;
    paidAmount?: number;
    dueDate: Date | string;
    status?: $Enums.InvoiceStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InvoiceUpdateWithoutFeeStructureInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string;
    amount?: FloatFieldUpdateOperationsInput | number;
    paidAmount?: FloatFieldUpdateOperationsInput | number;
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: StudentUpdateOneRequiredWithoutInvoicesNestedInput;
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput;
  };

  export type InvoiceUncheckedUpdateWithoutFeeStructureInput = {
    id?: IntFieldUpdateOperationsInput | number;
    invoiceNumber?: StringFieldUpdateOperationsInput | string;
    studentId?: IntFieldUpdateOperationsInput | number;
    amount?: FloatFieldUpdateOperationsInput | number;
    paidAmount?: FloatFieldUpdateOperationsInput | number;
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput;
  };

  export type InvoiceUncheckedUpdateManyWithoutFeeStructureInput = {
    id?: IntFieldUpdateOperationsInput | number;
    invoiceNumber?: StringFieldUpdateOperationsInput | string;
    studentId?: IntFieldUpdateOperationsInput | number;
    amount?: FloatFieldUpdateOperationsInput | number;
    paidAmount?: FloatFieldUpdateOperationsInput | number;
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentCreateManyInvoiceInput = {
    id?: number;
    amount: number;
    method: string;
    proofUrl?: string | null;
    reference?: string | null;
    status?: $Enums.PaymentStatus;
    notes?: string | null;
    verifiedAt?: Date | string | null;
    paymentDate?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PaymentUpdateWithoutInvoiceInput = {
    amount?: FloatFieldUpdateOperationsInput | number;
    method?: StringFieldUpdateOperationsInput | string;
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    reference?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentUncheckedUpdateWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number;
    amount?: FloatFieldUpdateOperationsInput | number;
    method?: StringFieldUpdateOperationsInput | string;
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    reference?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentUncheckedUpdateManyWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number;
    amount?: FloatFieldUpdateOperationsInput | number;
    method?: StringFieldUpdateOperationsInput | string;
    proofUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    reference?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    verifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use DepartmentCountOutputTypeDefaultArgs instead
   */
  export type DepartmentCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = DepartmentCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ProgramCountOutputTypeDefaultArgs instead
   */
  export type ProgramCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ProgramCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use IntakeCountOutputTypeDefaultArgs instead
   */
  export type IntakeCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = IntakeCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use StudentCountOutputTypeDefaultArgs instead
   */
  export type StudentCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = StudentCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use FeeStructureCountOutputTypeDefaultArgs instead
   */
  export type FeeStructureCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = FeeStructureCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use InvoiceCountOutputTypeDefaultArgs instead
   */
  export type InvoiceCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = InvoiceCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserDefaultArgs instead
   */
  export type UserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = UserDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use DepartmentDefaultArgs instead
   */
  export type DepartmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = DepartmentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ProgramDefaultArgs instead
   */
  export type ProgramArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ProgramDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use IntakeDefaultArgs instead
   */
  export type IntakeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = IntakeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ApplicantDefaultArgs instead
   */
  export type ApplicantArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = ApplicantDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use StudentDefaultArgs instead
   */
  export type StudentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = StudentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use FeeStructureDefaultArgs instead
   */
  export type FeeStructureArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = FeeStructureDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use InvoiceDefaultArgs instead
   */
  export type InvoiceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = InvoiceDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use PaymentDefaultArgs instead
   */
  export type PaymentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = PaymentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use NoticeDefaultArgs instead
   */
  export type NoticeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = NoticeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AuditLogDefaultArgs instead
   */
  export type AuditLogArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = AuditLogDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
