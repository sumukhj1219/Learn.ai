
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Courses
 * 
 */
export type Courses = $Result.DefaultSelection<Prisma.$CoursesPayload>
/**
 * Model Educators
 * 
 */
export type Educators = $Result.DefaultSelection<Prisma.$EducatorsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courses`: Exposes CRUD operations for the **Courses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.courses.findMany()
    * ```
    */
  get courses(): Prisma.CoursesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.educators`: Exposes CRUD operations for the **Educators** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educators
    * const educators = await prisma.educators.findMany()
    * ```
    */
  get educators(): Prisma.EducatorsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Student: 'Student',
    Courses: 'Courses',
    Educators: 'Educators'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "student" | "courses" | "educators"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Courses: {
        payload: Prisma.$CoursesPayload<ExtArgs>
        fields: Prisma.CoursesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoursesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoursesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          findFirst: {
            args: Prisma.CoursesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoursesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          findMany: {
            args: Prisma.CoursesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>[]
          }
          create: {
            args: Prisma.CoursesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          createMany: {
            args: Prisma.CoursesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoursesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>[]
          }
          delete: {
            args: Prisma.CoursesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          update: {
            args: Prisma.CoursesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          deleteMany: {
            args: Prisma.CoursesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoursesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoursesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>[]
          }
          upsert: {
            args: Prisma.CoursesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          aggregate: {
            args: Prisma.CoursesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourses>
          }
          groupBy: {
            args: Prisma.CoursesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoursesCountArgs<ExtArgs>
            result: $Utils.Optional<CoursesCountAggregateOutputType> | number
          }
        }
      }
      Educators: {
        payload: Prisma.$EducatorsPayload<ExtArgs>
        fields: Prisma.EducatorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducatorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducatorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducatorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducatorsPayload>
          }
          findFirst: {
            args: Prisma.EducatorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducatorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducatorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducatorsPayload>
          }
          findMany: {
            args: Prisma.EducatorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducatorsPayload>[]
          }
          create: {
            args: Prisma.EducatorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducatorsPayload>
          }
          createMany: {
            args: Prisma.EducatorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducatorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducatorsPayload>[]
          }
          delete: {
            args: Prisma.EducatorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducatorsPayload>
          }
          update: {
            args: Prisma.EducatorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducatorsPayload>
          }
          deleteMany: {
            args: Prisma.EducatorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducatorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducatorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducatorsPayload>[]
          }
          upsert: {
            args: Prisma.EducatorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducatorsPayload>
          }
          aggregate: {
            args: Prisma.EducatorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducators>
          }
          groupBy: {
            args: Prisma.EducatorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducatorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducatorsCountArgs<ExtArgs>
            result: $Utils.Optional<EducatorsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    student?: StudentOmit
    courses?: CoursesOmit
    educators?: EducatorsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    courses: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | StudentCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursesWhereInput
  }


  /**
   * Count Type EducatorsCountOutputType
   */

  export type EducatorsCountOutputType = {
    courses: number
  }

  export type EducatorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | EducatorsCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * EducatorsCountOutputType without action
   */
  export type EducatorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducatorsCountOutputType
     */
    select?: EducatorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EducatorsCountOutputType without action
   */
  export type EducatorsCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    courseCompleted: number | null
    Points: number | null
  }

  export type StudentSumAggregateOutputType = {
    courseCompleted: number | null
    Points: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    srn: string | null
    age: string | null
    dob: string | null
    intrest: string | null
    goal: string | null
    courseCompleted: number | null
    Points: number | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    srn: string | null
    age: string | null
    dob: string | null
    intrest: string | null
    goal: string | null
    courseCompleted: number | null
    Points: number | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    email: number
    srn: number
    age: number
    dob: number
    intrest: number
    goal: number
    courseCompleted: number
    Points: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    courseCompleted?: true
    Points?: true
  }

  export type StudentSumAggregateInputType = {
    courseCompleted?: true
    Points?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    srn?: true
    age?: true
    dob?: true
    intrest?: true
    goal?: true
    courseCompleted?: true
    Points?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    srn?: true
    age?: true
    dob?: true
    intrest?: true
    goal?: true
    courseCompleted?: true
    Points?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    srn?: true
    age?: true
    dob?: true
    intrest?: true
    goal?: true
    courseCompleted?: true
    Points?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    srn: string | null
    age: string | null
    dob: string | null
    intrest: string | null
    goal: string | null
    courseCompleted: number | null
    Points: number | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    srn?: boolean
    age?: boolean
    dob?: boolean
    intrest?: boolean
    goal?: boolean
    courseCompleted?: boolean
    Points?: boolean
    courses?: boolean | Student$coursesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    srn?: boolean
    age?: boolean
    dob?: boolean
    intrest?: boolean
    goal?: boolean
    courseCompleted?: boolean
    Points?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    srn?: boolean
    age?: boolean
    dob?: boolean
    intrest?: boolean
    goal?: boolean
    courseCompleted?: boolean
    Points?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    srn?: boolean
    age?: boolean
    dob?: boolean
    intrest?: boolean
    goal?: boolean
    courseCompleted?: boolean
    Points?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "srn" | "age" | "dob" | "intrest" | "goal" | "courseCompleted" | "Points", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | Student$coursesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      courses: Prisma.$CoursesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      srn: string | null
      age: string | null
      dob: string | null
      intrest: string | null
      goal: string | null
      courseCompleted: number | null
      Points: number | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
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
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    >

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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

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
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends Student$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Student$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly srn: FieldRef<"Student", 'String'>
    readonly age: FieldRef<"Student", 'String'>
    readonly dob: FieldRef<"Student", 'String'>
    readonly intrest: FieldRef<"Student", 'String'>
    readonly goal: FieldRef<"Student", 'String'>
    readonly courseCompleted: FieldRef<"Student", 'Int'>
    readonly Points: FieldRef<"Student", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data?: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.courses
   */
  export type Student$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    where?: CoursesWhereInput
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    cursor?: CoursesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Courses
   */

  export type AggregateCourses = {
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  export type CoursesAvgAggregateOutputType = {
    enrolled: number | null
  }

  export type CoursesSumAggregateOutputType = {
    enrolled: number | null
  }

  export type CoursesMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    duration: string | null
    completion: string | null
    isCompleted: boolean | null
    studentId: string | null
    educatorId: string | null
    enrolled: number | null
  }

  export type CoursesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    duration: string | null
    completion: string | null
    isCompleted: boolean | null
    studentId: string | null
    educatorId: string | null
    enrolled: number | null
  }

  export type CoursesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    duration: number
    completion: number
    isCompleted: number
    studentId: number
    educatorId: number
    enrolled: number
    _all: number
  }


  export type CoursesAvgAggregateInputType = {
    enrolled?: true
  }

  export type CoursesSumAggregateInputType = {
    enrolled?: true
  }

  export type CoursesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    duration?: true
    completion?: true
    isCompleted?: true
    studentId?: true
    educatorId?: true
    enrolled?: true
  }

  export type CoursesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    duration?: true
    completion?: true
    isCompleted?: true
    studentId?: true
    educatorId?: true
    enrolled?: true
  }

  export type CoursesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    duration?: true
    completion?: true
    isCompleted?: true
    studentId?: true
    educatorId?: true
    enrolled?: true
    _all?: true
  }

  export type CoursesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to aggregate.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CoursesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursesMaxAggregateInputType
  }

  export type GetCoursesAggregateType<T extends CoursesAggregateArgs> = {
        [P in keyof T & keyof AggregateCourses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourses[P]>
      : GetScalarType<T[P], AggregateCourses[P]>
  }




  export type CoursesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursesWhereInput
    orderBy?: CoursesOrderByWithAggregationInput | CoursesOrderByWithAggregationInput[]
    by: CoursesScalarFieldEnum[] | CoursesScalarFieldEnum
    having?: CoursesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursesCountAggregateInputType | true
    _avg?: CoursesAvgAggregateInputType
    _sum?: CoursesSumAggregateInputType
    _min?: CoursesMinAggregateInputType
    _max?: CoursesMaxAggregateInputType
  }

  export type CoursesGroupByOutputType = {
    id: string
    name: string | null
    description: string | null
    duration: string | null
    completion: string | null
    isCompleted: boolean
    studentId: string
    educatorId: string
    enrolled: number | null
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  type GetCoursesGroupByPayload<T extends CoursesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursesGroupByOutputType[P]>
            : GetScalarType<T[P], CoursesGroupByOutputType[P]>
        }
      >
    >


  export type CoursesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    duration?: boolean
    completion?: boolean
    isCompleted?: boolean
    studentId?: boolean
    educatorId?: boolean
    enrolled?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    educator?: boolean | EducatorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type CoursesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    duration?: boolean
    completion?: boolean
    isCompleted?: boolean
    studentId?: boolean
    educatorId?: boolean
    enrolled?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    educator?: boolean | EducatorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type CoursesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    duration?: boolean
    completion?: boolean
    isCompleted?: boolean
    studentId?: boolean
    educatorId?: boolean
    enrolled?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    educator?: boolean | EducatorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type CoursesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    duration?: boolean
    completion?: boolean
    isCompleted?: boolean
    studentId?: boolean
    educatorId?: boolean
    enrolled?: boolean
  }

  export type CoursesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "duration" | "completion" | "isCompleted" | "studentId" | "educatorId" | "enrolled", ExtArgs["result"]["courses"]>
  export type CoursesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    educator?: boolean | EducatorsDefaultArgs<ExtArgs>
  }
  export type CoursesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    educator?: boolean | EducatorsDefaultArgs<ExtArgs>
  }
  export type CoursesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    educator?: boolean | EducatorsDefaultArgs<ExtArgs>
  }

  export type $CoursesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Courses"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      educator: Prisma.$EducatorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      description: string | null
      duration: string | null
      completion: string | null
      isCompleted: boolean
      studentId: string
      educatorId: string
      enrolled: number | null
    }, ExtArgs["result"]["courses"]>
    composites: {}
  }

  type CoursesGetPayload<S extends boolean | null | undefined | CoursesDefaultArgs> = $Result.GetResult<Prisma.$CoursesPayload, S>

  type CoursesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoursesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursesCountAggregateInputType | true
    }

  export interface CoursesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Courses'], meta: { name: 'Courses' } }
    /**
     * Find zero or one Courses that matches the filter.
     * @param {CoursesFindUniqueArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoursesFindUniqueArgs>(args: SelectSubset<T, CoursesFindUniqueArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Courses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoursesFindUniqueOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoursesFindUniqueOrThrowArgs>(args: SelectSubset<T, CoursesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindFirstArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoursesFindFirstArgs>(args?: SelectSubset<T, CoursesFindFirstArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindFirstOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoursesFindFirstOrThrowArgs>(args?: SelectSubset<T, CoursesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.courses.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.courses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursesWithIdOnly = await prisma.courses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoursesFindManyArgs>(args?: SelectSubset<T, CoursesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Courses.
     * @param {CoursesCreateArgs} args - Arguments to create a Courses.
     * @example
     * // Create one Courses
     * const Courses = await prisma.courses.create({
     *   data: {
     *     // ... data to create a Courses
     *   }
     * })
     * 
     */
    create<T extends CoursesCreateArgs>(args: SelectSubset<T, CoursesCreateArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CoursesCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoursesCreateManyArgs>(args?: SelectSubset<T, CoursesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CoursesCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const coursesWithIdOnly = await prisma.courses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoursesCreateManyAndReturnArgs>(args?: SelectSubset<T, CoursesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Courses.
     * @param {CoursesDeleteArgs} args - Arguments to delete one Courses.
     * @example
     * // Delete one Courses
     * const Courses = await prisma.courses.delete({
     *   where: {
     *     // ... filter to delete one Courses
     *   }
     * })
     * 
     */
    delete<T extends CoursesDeleteArgs>(args: SelectSubset<T, CoursesDeleteArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Courses.
     * @param {CoursesUpdateArgs} args - Arguments to update one Courses.
     * @example
     * // Update one Courses
     * const courses = await prisma.courses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoursesUpdateArgs>(args: SelectSubset<T, CoursesUpdateArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CoursesDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.courses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoursesDeleteManyArgs>(args?: SelectSubset<T, CoursesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoursesUpdateManyArgs>(args: SelectSubset<T, CoursesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CoursesUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const coursesWithIdOnly = await prisma.courses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoursesUpdateManyAndReturnArgs>(args: SelectSubset<T, CoursesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Courses.
     * @param {CoursesUpsertArgs} args - Arguments to update or create a Courses.
     * @example
     * // Update or create a Courses
     * const courses = await prisma.courses.upsert({
     *   create: {
     *     // ... data to create a Courses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courses we want to update
     *   }
     * })
     */
    upsert<T extends CoursesUpsertArgs>(args: SelectSubset<T, CoursesUpsertArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.courses.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CoursesCountArgs>(
      args?: Subset<T, CoursesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoursesAggregateArgs>(args: Subset<T, CoursesAggregateArgs>): Prisma.PrismaPromise<GetCoursesAggregateType<T>>

    /**
     * Group by Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesGroupByArgs} args - Group by arguments.
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
      T extends CoursesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoursesGroupByArgs['orderBy'] }
        : { orderBy?: CoursesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoursesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Courses model
   */
  readonly fields: CoursesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Courses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoursesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    educator<T extends EducatorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EducatorsDefaultArgs<ExtArgs>>): Prisma__EducatorsClient<$Result.GetResult<Prisma.$EducatorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Courses model
   */
  interface CoursesFieldRefs {
    readonly id: FieldRef<"Courses", 'String'>
    readonly name: FieldRef<"Courses", 'String'>
    readonly description: FieldRef<"Courses", 'String'>
    readonly duration: FieldRef<"Courses", 'String'>
    readonly completion: FieldRef<"Courses", 'String'>
    readonly isCompleted: FieldRef<"Courses", 'Boolean'>
    readonly studentId: FieldRef<"Courses", 'String'>
    readonly educatorId: FieldRef<"Courses", 'String'>
    readonly enrolled: FieldRef<"Courses", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Courses findUnique
   */
  export type CoursesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses findUniqueOrThrow
   */
  export type CoursesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses findFirst
   */
  export type CoursesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses findFirstOrThrow
   */
  export type CoursesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses findMany
   */
  export type CoursesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses create
   */
  export type CoursesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The data needed to create a Courses.
     */
    data: XOR<CoursesCreateInput, CoursesUncheckedCreateInput>
  }

  /**
   * Courses createMany
   */
  export type CoursesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CoursesCreateManyInput | CoursesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Courses createManyAndReturn
   */
  export type CoursesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CoursesCreateManyInput | CoursesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Courses update
   */
  export type CoursesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The data needed to update a Courses.
     */
    data: XOR<CoursesUpdateInput, CoursesUncheckedUpdateInput>
    /**
     * Choose, which Courses to update.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses updateMany
   */
  export type CoursesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CoursesUpdateManyMutationInput, CoursesUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CoursesWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Courses updateManyAndReturn
   */
  export type CoursesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CoursesUpdateManyMutationInput, CoursesUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CoursesWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Courses upsert
   */
  export type CoursesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The filter to search for the Courses to update in case it exists.
     */
    where: CoursesWhereUniqueInput
    /**
     * In case the Courses found by the `where` argument doesn't exist, create a new Courses with this data.
     */
    create: XOR<CoursesCreateInput, CoursesUncheckedCreateInput>
    /**
     * In case the Courses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoursesUpdateInput, CoursesUncheckedUpdateInput>
  }

  /**
   * Courses delete
   */
  export type CoursesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter which Courses to delete.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses deleteMany
   */
  export type CoursesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CoursesWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Courses without action
   */
  export type CoursesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
  }


  /**
   * Model Educators
   */

  export type AggregateEducators = {
    _count: EducatorsCountAggregateOutputType | null
    _min: EducatorsMinAggregateOutputType | null
    _max: EducatorsMaxAggregateOutputType | null
  }

  export type EducatorsMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
  }

  export type EducatorsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
  }

  export type EducatorsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type EducatorsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type EducatorsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type EducatorsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type EducatorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educators to aggregate.
     */
    where?: EducatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educators to fetch.
     */
    orderBy?: EducatorsOrderByWithRelationInput | EducatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educators
    **/
    _count?: true | EducatorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducatorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducatorsMaxAggregateInputType
  }

  export type GetEducatorsAggregateType<T extends EducatorsAggregateArgs> = {
        [P in keyof T & keyof AggregateEducators]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducators[P]>
      : GetScalarType<T[P], AggregateEducators[P]>
  }




  export type EducatorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducatorsWhereInput
    orderBy?: EducatorsOrderByWithAggregationInput | EducatorsOrderByWithAggregationInput[]
    by: EducatorsScalarFieldEnum[] | EducatorsScalarFieldEnum
    having?: EducatorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducatorsCountAggregateInputType | true
    _min?: EducatorsMinAggregateInputType
    _max?: EducatorsMaxAggregateInputType
  }

  export type EducatorsGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    _count: EducatorsCountAggregateOutputType | null
    _min: EducatorsMinAggregateOutputType | null
    _max: EducatorsMaxAggregateOutputType | null
  }

  type GetEducatorsGroupByPayload<T extends EducatorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducatorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducatorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducatorsGroupByOutputType[P]>
            : GetScalarType<T[P], EducatorsGroupByOutputType[P]>
        }
      >
    >


  export type EducatorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    courses?: boolean | Educators$coursesArgs<ExtArgs>
    _count?: boolean | EducatorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["educators"]>

  export type EducatorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["educators"]>

  export type EducatorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["educators"]>

  export type EducatorsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type EducatorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email", ExtArgs["result"]["educators"]>
  export type EducatorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | Educators$coursesArgs<ExtArgs>
    _count?: boolean | EducatorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EducatorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EducatorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EducatorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Educators"
    objects: {
      courses: Prisma.$CoursesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
    }, ExtArgs["result"]["educators"]>
    composites: {}
  }

  type EducatorsGetPayload<S extends boolean | null | undefined | EducatorsDefaultArgs> = $Result.GetResult<Prisma.$EducatorsPayload, S>

  type EducatorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducatorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducatorsCountAggregateInputType | true
    }

  export interface EducatorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Educators'], meta: { name: 'Educators' } }
    /**
     * Find zero or one Educators that matches the filter.
     * @param {EducatorsFindUniqueArgs} args - Arguments to find a Educators
     * @example
     * // Get one Educators
     * const educators = await prisma.educators.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducatorsFindUniqueArgs>(args: SelectSubset<T, EducatorsFindUniqueArgs<ExtArgs>>): Prisma__EducatorsClient<$Result.GetResult<Prisma.$EducatorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Educators that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducatorsFindUniqueOrThrowArgs} args - Arguments to find a Educators
     * @example
     * // Get one Educators
     * const educators = await prisma.educators.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducatorsFindUniqueOrThrowArgs>(args: SelectSubset<T, EducatorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducatorsClient<$Result.GetResult<Prisma.$EducatorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Educators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducatorsFindFirstArgs} args - Arguments to find a Educators
     * @example
     * // Get one Educators
     * const educators = await prisma.educators.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducatorsFindFirstArgs>(args?: SelectSubset<T, EducatorsFindFirstArgs<ExtArgs>>): Prisma__EducatorsClient<$Result.GetResult<Prisma.$EducatorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Educators that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducatorsFindFirstOrThrowArgs} args - Arguments to find a Educators
     * @example
     * // Get one Educators
     * const educators = await prisma.educators.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducatorsFindFirstOrThrowArgs>(args?: SelectSubset<T, EducatorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducatorsClient<$Result.GetResult<Prisma.$EducatorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducatorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educators
     * const educators = await prisma.educators.findMany()
     * 
     * // Get first 10 Educators
     * const educators = await prisma.educators.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educatorsWithIdOnly = await prisma.educators.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducatorsFindManyArgs>(args?: SelectSubset<T, EducatorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducatorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Educators.
     * @param {EducatorsCreateArgs} args - Arguments to create a Educators.
     * @example
     * // Create one Educators
     * const Educators = await prisma.educators.create({
     *   data: {
     *     // ... data to create a Educators
     *   }
     * })
     * 
     */
    create<T extends EducatorsCreateArgs>(args: SelectSubset<T, EducatorsCreateArgs<ExtArgs>>): Prisma__EducatorsClient<$Result.GetResult<Prisma.$EducatorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educators.
     * @param {EducatorsCreateManyArgs} args - Arguments to create many Educators.
     * @example
     * // Create many Educators
     * const educators = await prisma.educators.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducatorsCreateManyArgs>(args?: SelectSubset<T, EducatorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educators and returns the data saved in the database.
     * @param {EducatorsCreateManyAndReturnArgs} args - Arguments to create many Educators.
     * @example
     * // Create many Educators
     * const educators = await prisma.educators.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educators and only return the `id`
     * const educatorsWithIdOnly = await prisma.educators.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducatorsCreateManyAndReturnArgs>(args?: SelectSubset<T, EducatorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducatorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Educators.
     * @param {EducatorsDeleteArgs} args - Arguments to delete one Educators.
     * @example
     * // Delete one Educators
     * const Educators = await prisma.educators.delete({
     *   where: {
     *     // ... filter to delete one Educators
     *   }
     * })
     * 
     */
    delete<T extends EducatorsDeleteArgs>(args: SelectSubset<T, EducatorsDeleteArgs<ExtArgs>>): Prisma__EducatorsClient<$Result.GetResult<Prisma.$EducatorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Educators.
     * @param {EducatorsUpdateArgs} args - Arguments to update one Educators.
     * @example
     * // Update one Educators
     * const educators = await prisma.educators.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducatorsUpdateArgs>(args: SelectSubset<T, EducatorsUpdateArgs<ExtArgs>>): Prisma__EducatorsClient<$Result.GetResult<Prisma.$EducatorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educators.
     * @param {EducatorsDeleteManyArgs} args - Arguments to filter Educators to delete.
     * @example
     * // Delete a few Educators
     * const { count } = await prisma.educators.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducatorsDeleteManyArgs>(args?: SelectSubset<T, EducatorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducatorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educators
     * const educators = await prisma.educators.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducatorsUpdateManyArgs>(args: SelectSubset<T, EducatorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educators and returns the data updated in the database.
     * @param {EducatorsUpdateManyAndReturnArgs} args - Arguments to update many Educators.
     * @example
     * // Update many Educators
     * const educators = await prisma.educators.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Educators and only return the `id`
     * const educatorsWithIdOnly = await prisma.educators.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EducatorsUpdateManyAndReturnArgs>(args: SelectSubset<T, EducatorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducatorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Educators.
     * @param {EducatorsUpsertArgs} args - Arguments to update or create a Educators.
     * @example
     * // Update or create a Educators
     * const educators = await prisma.educators.upsert({
     *   create: {
     *     // ... data to create a Educators
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Educators we want to update
     *   }
     * })
     */
    upsert<T extends EducatorsUpsertArgs>(args: SelectSubset<T, EducatorsUpsertArgs<ExtArgs>>): Prisma__EducatorsClient<$Result.GetResult<Prisma.$EducatorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducatorsCountArgs} args - Arguments to filter Educators to count.
     * @example
     * // Count the number of Educators
     * const count = await prisma.educators.count({
     *   where: {
     *     // ... the filter for the Educators we want to count
     *   }
     * })
    **/
    count<T extends EducatorsCountArgs>(
      args?: Subset<T, EducatorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducatorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Educators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducatorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EducatorsAggregateArgs>(args: Subset<T, EducatorsAggregateArgs>): Prisma.PrismaPromise<GetEducatorsAggregateType<T>>

    /**
     * Group by Educators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducatorsGroupByArgs} args - Group by arguments.
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
      T extends EducatorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducatorsGroupByArgs['orderBy'] }
        : { orderBy?: EducatorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducatorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducatorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Educators model
   */
  readonly fields: EducatorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Educators.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducatorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends Educators$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Educators$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Educators model
   */
  interface EducatorsFieldRefs {
    readonly id: FieldRef<"Educators", 'String'>
    readonly name: FieldRef<"Educators", 'String'>
    readonly email: FieldRef<"Educators", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Educators findUnique
   */
  export type EducatorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Educators
     */
    select?: EducatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Educators
     */
    omit?: EducatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducatorsInclude<ExtArgs> | null
    /**
     * Filter, which Educators to fetch.
     */
    where: EducatorsWhereUniqueInput
  }

  /**
   * Educators findUniqueOrThrow
   */
  export type EducatorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Educators
     */
    select?: EducatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Educators
     */
    omit?: EducatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducatorsInclude<ExtArgs> | null
    /**
     * Filter, which Educators to fetch.
     */
    where: EducatorsWhereUniqueInput
  }

  /**
   * Educators findFirst
   */
  export type EducatorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Educators
     */
    select?: EducatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Educators
     */
    omit?: EducatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducatorsInclude<ExtArgs> | null
    /**
     * Filter, which Educators to fetch.
     */
    where?: EducatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educators to fetch.
     */
    orderBy?: EducatorsOrderByWithRelationInput | EducatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educators.
     */
    cursor?: EducatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educators.
     */
    distinct?: EducatorsScalarFieldEnum | EducatorsScalarFieldEnum[]
  }

  /**
   * Educators findFirstOrThrow
   */
  export type EducatorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Educators
     */
    select?: EducatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Educators
     */
    omit?: EducatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducatorsInclude<ExtArgs> | null
    /**
     * Filter, which Educators to fetch.
     */
    where?: EducatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educators to fetch.
     */
    orderBy?: EducatorsOrderByWithRelationInput | EducatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educators.
     */
    cursor?: EducatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educators.
     */
    distinct?: EducatorsScalarFieldEnum | EducatorsScalarFieldEnum[]
  }

  /**
   * Educators findMany
   */
  export type EducatorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Educators
     */
    select?: EducatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Educators
     */
    omit?: EducatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducatorsInclude<ExtArgs> | null
    /**
     * Filter, which Educators to fetch.
     */
    where?: EducatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educators to fetch.
     */
    orderBy?: EducatorsOrderByWithRelationInput | EducatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educators.
     */
    cursor?: EducatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educators.
     */
    skip?: number
    distinct?: EducatorsScalarFieldEnum | EducatorsScalarFieldEnum[]
  }

  /**
   * Educators create
   */
  export type EducatorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Educators
     */
    select?: EducatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Educators
     */
    omit?: EducatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducatorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Educators.
     */
    data?: XOR<EducatorsCreateInput, EducatorsUncheckedCreateInput>
  }

  /**
   * Educators createMany
   */
  export type EducatorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educators.
     */
    data: EducatorsCreateManyInput | EducatorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Educators createManyAndReturn
   */
  export type EducatorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Educators
     */
    select?: EducatorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Educators
     */
    omit?: EducatorsOmit<ExtArgs> | null
    /**
     * The data used to create many Educators.
     */
    data: EducatorsCreateManyInput | EducatorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Educators update
   */
  export type EducatorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Educators
     */
    select?: EducatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Educators
     */
    omit?: EducatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducatorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Educators.
     */
    data: XOR<EducatorsUpdateInput, EducatorsUncheckedUpdateInput>
    /**
     * Choose, which Educators to update.
     */
    where: EducatorsWhereUniqueInput
  }

  /**
   * Educators updateMany
   */
  export type EducatorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educators.
     */
    data: XOR<EducatorsUpdateManyMutationInput, EducatorsUncheckedUpdateManyInput>
    /**
     * Filter which Educators to update
     */
    where?: EducatorsWhereInput
    /**
     * Limit how many Educators to update.
     */
    limit?: number
  }

  /**
   * Educators updateManyAndReturn
   */
  export type EducatorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Educators
     */
    select?: EducatorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Educators
     */
    omit?: EducatorsOmit<ExtArgs> | null
    /**
     * The data used to update Educators.
     */
    data: XOR<EducatorsUpdateManyMutationInput, EducatorsUncheckedUpdateManyInput>
    /**
     * Filter which Educators to update
     */
    where?: EducatorsWhereInput
    /**
     * Limit how many Educators to update.
     */
    limit?: number
  }

  /**
   * Educators upsert
   */
  export type EducatorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Educators
     */
    select?: EducatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Educators
     */
    omit?: EducatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducatorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Educators to update in case it exists.
     */
    where: EducatorsWhereUniqueInput
    /**
     * In case the Educators found by the `where` argument doesn't exist, create a new Educators with this data.
     */
    create: XOR<EducatorsCreateInput, EducatorsUncheckedCreateInput>
    /**
     * In case the Educators was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducatorsUpdateInput, EducatorsUncheckedUpdateInput>
  }

  /**
   * Educators delete
   */
  export type EducatorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Educators
     */
    select?: EducatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Educators
     */
    omit?: EducatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducatorsInclude<ExtArgs> | null
    /**
     * Filter which Educators to delete.
     */
    where: EducatorsWhereUniqueInput
  }

  /**
   * Educators deleteMany
   */
  export type EducatorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educators to delete
     */
    where?: EducatorsWhereInput
    /**
     * Limit how many Educators to delete.
     */
    limit?: number
  }

  /**
   * Educators.courses
   */
  export type Educators$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    where?: CoursesWhereInput
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    cursor?: CoursesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Educators without action
   */
  export type EducatorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Educators
     */
    select?: EducatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Educators
     */
    omit?: EducatorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducatorsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    srn: 'srn',
    age: 'age',
    dob: 'dob',
    intrest: 'intrest',
    goal: 'goal',
    courseCompleted: 'courseCompleted',
    Points: 'Points'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const CoursesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    duration: 'duration',
    completion: 'completion',
    isCompleted: 'isCompleted',
    studentId: 'studentId',
    educatorId: 'educatorId',
    enrolled: 'enrolled'
  };

  export type CoursesScalarFieldEnum = (typeof CoursesScalarFieldEnum)[keyof typeof CoursesScalarFieldEnum]


  export const EducatorsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type EducatorsScalarFieldEnum = (typeof EducatorsScalarFieldEnum)[keyof typeof EducatorsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringNullableFilter<"Student"> | string | null
    email?: StringNullableFilter<"Student"> | string | null
    srn?: StringNullableFilter<"Student"> | string | null
    age?: StringNullableFilter<"Student"> | string | null
    dob?: StringNullableFilter<"Student"> | string | null
    intrest?: StringNullableFilter<"Student"> | string | null
    goal?: StringNullableFilter<"Student"> | string | null
    courseCompleted?: IntNullableFilter<"Student"> | number | null
    Points?: IntNullableFilter<"Student"> | number | null
    courses?: CoursesListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    srn?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    intrest?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    courseCompleted?: SortOrderInput | SortOrder
    Points?: SortOrderInput | SortOrder
    courses?: CoursesOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    srn?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringNullableFilter<"Student"> | string | null
    age?: StringNullableFilter<"Student"> | string | null
    dob?: StringNullableFilter<"Student"> | string | null
    intrest?: StringNullableFilter<"Student"> | string | null
    goal?: StringNullableFilter<"Student"> | string | null
    courseCompleted?: IntNullableFilter<"Student"> | number | null
    Points?: IntNullableFilter<"Student"> | number | null
    courses?: CoursesListRelationFilter
  }, "id" | "email" | "srn">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    srn?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    intrest?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    courseCompleted?: SortOrderInput | SortOrder
    Points?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    name?: StringNullableWithAggregatesFilter<"Student"> | string | null
    email?: StringNullableWithAggregatesFilter<"Student"> | string | null
    srn?: StringNullableWithAggregatesFilter<"Student"> | string | null
    age?: StringNullableWithAggregatesFilter<"Student"> | string | null
    dob?: StringNullableWithAggregatesFilter<"Student"> | string | null
    intrest?: StringNullableWithAggregatesFilter<"Student"> | string | null
    goal?: StringNullableWithAggregatesFilter<"Student"> | string | null
    courseCompleted?: IntNullableWithAggregatesFilter<"Student"> | number | null
    Points?: IntNullableWithAggregatesFilter<"Student"> | number | null
  }

  export type CoursesWhereInput = {
    AND?: CoursesWhereInput | CoursesWhereInput[]
    OR?: CoursesWhereInput[]
    NOT?: CoursesWhereInput | CoursesWhereInput[]
    id?: StringFilter<"Courses"> | string
    name?: StringNullableFilter<"Courses"> | string | null
    description?: StringNullableFilter<"Courses"> | string | null
    duration?: StringNullableFilter<"Courses"> | string | null
    completion?: StringNullableFilter<"Courses"> | string | null
    isCompleted?: BoolFilter<"Courses"> | boolean
    studentId?: StringFilter<"Courses"> | string
    educatorId?: StringFilter<"Courses"> | string
    enrolled?: IntNullableFilter<"Courses"> | number | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    educator?: XOR<EducatorsScalarRelationFilter, EducatorsWhereInput>
  }

  export type CoursesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    completion?: SortOrderInput | SortOrder
    isCompleted?: SortOrder
    studentId?: SortOrder
    educatorId?: SortOrder
    enrolled?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    educator?: EducatorsOrderByWithRelationInput
  }

  export type CoursesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CoursesWhereInput | CoursesWhereInput[]
    OR?: CoursesWhereInput[]
    NOT?: CoursesWhereInput | CoursesWhereInput[]
    name?: StringNullableFilter<"Courses"> | string | null
    description?: StringNullableFilter<"Courses"> | string | null
    duration?: StringNullableFilter<"Courses"> | string | null
    completion?: StringNullableFilter<"Courses"> | string | null
    isCompleted?: BoolFilter<"Courses"> | boolean
    studentId?: StringFilter<"Courses"> | string
    educatorId?: StringFilter<"Courses"> | string
    enrolled?: IntNullableFilter<"Courses"> | number | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    educator?: XOR<EducatorsScalarRelationFilter, EducatorsWhereInput>
  }, "id">

  export type CoursesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    completion?: SortOrderInput | SortOrder
    isCompleted?: SortOrder
    studentId?: SortOrder
    educatorId?: SortOrder
    enrolled?: SortOrderInput | SortOrder
    _count?: CoursesCountOrderByAggregateInput
    _avg?: CoursesAvgOrderByAggregateInput
    _max?: CoursesMaxOrderByAggregateInput
    _min?: CoursesMinOrderByAggregateInput
    _sum?: CoursesSumOrderByAggregateInput
  }

  export type CoursesScalarWhereWithAggregatesInput = {
    AND?: CoursesScalarWhereWithAggregatesInput | CoursesScalarWhereWithAggregatesInput[]
    OR?: CoursesScalarWhereWithAggregatesInput[]
    NOT?: CoursesScalarWhereWithAggregatesInput | CoursesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Courses"> | string
    name?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    description?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    duration?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    completion?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    isCompleted?: BoolWithAggregatesFilter<"Courses"> | boolean
    studentId?: StringWithAggregatesFilter<"Courses"> | string
    educatorId?: StringWithAggregatesFilter<"Courses"> | string
    enrolled?: IntNullableWithAggregatesFilter<"Courses"> | number | null
  }

  export type EducatorsWhereInput = {
    AND?: EducatorsWhereInput | EducatorsWhereInput[]
    OR?: EducatorsWhereInput[]
    NOT?: EducatorsWhereInput | EducatorsWhereInput[]
    id?: StringFilter<"Educators"> | string
    name?: StringNullableFilter<"Educators"> | string | null
    email?: StringNullableFilter<"Educators"> | string | null
    courses?: CoursesListRelationFilter
  }

  export type EducatorsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    courses?: CoursesOrderByRelationAggregateInput
  }

  export type EducatorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: EducatorsWhereInput | EducatorsWhereInput[]
    OR?: EducatorsWhereInput[]
    NOT?: EducatorsWhereInput | EducatorsWhereInput[]
    name?: StringNullableFilter<"Educators"> | string | null
    courses?: CoursesListRelationFilter
  }, "id" | "email">

  export type EducatorsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: EducatorsCountOrderByAggregateInput
    _max?: EducatorsMaxOrderByAggregateInput
    _min?: EducatorsMinOrderByAggregateInput
  }

  export type EducatorsScalarWhereWithAggregatesInput = {
    AND?: EducatorsScalarWhereWithAggregatesInput | EducatorsScalarWhereWithAggregatesInput[]
    OR?: EducatorsScalarWhereWithAggregatesInput[]
    NOT?: EducatorsScalarWhereWithAggregatesInput | EducatorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Educators"> | string
    name?: StringNullableWithAggregatesFilter<"Educators"> | string | null
    email?: StringNullableWithAggregatesFilter<"Educators"> | string | null
  }

  export type StudentCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    srn?: string | null
    age?: string | null
    dob?: string | null
    intrest?: string | null
    goal?: string | null
    courseCompleted?: number | null
    Points?: number | null
    courses?: CoursesCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    srn?: string | null
    age?: string | null
    dob?: string | null
    intrest?: string | null
    goal?: string | null
    courseCompleted?: number | null
    Points?: number | null
    courses?: CoursesUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    srn?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    intrest?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    Points?: NullableIntFieldUpdateOperationsInput | number | null
    courses?: CoursesUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    srn?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    intrest?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    Points?: NullableIntFieldUpdateOperationsInput | number | null
    courses?: CoursesUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    srn?: string | null
    age?: string | null
    dob?: string | null
    intrest?: string | null
    goal?: string | null
    courseCompleted?: number | null
    Points?: number | null
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    srn?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    intrest?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    Points?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    srn?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    intrest?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    Points?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CoursesCreateInput = {
    id?: string
    name?: string | null
    description?: string | null
    duration?: string | null
    completion?: string | null
    isCompleted?: boolean
    enrolled?: number | null
    student: StudentCreateNestedOneWithoutCoursesInput
    educator: EducatorsCreateNestedOneWithoutCoursesInput
  }

  export type CoursesUncheckedCreateInput = {
    id?: string
    name?: string | null
    description?: string | null
    duration?: string | null
    completion?: string | null
    isCompleted?: boolean
    studentId: string
    educatorId: string
    enrolled?: number | null
  }

  export type CoursesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    completion?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    enrolled?: NullableIntFieldUpdateOperationsInput | number | null
    student?: StudentUpdateOneRequiredWithoutCoursesNestedInput
    educator?: EducatorsUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CoursesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    completion?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    studentId?: StringFieldUpdateOperationsInput | string
    educatorId?: StringFieldUpdateOperationsInput | string
    enrolled?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CoursesCreateManyInput = {
    id?: string
    name?: string | null
    description?: string | null
    duration?: string | null
    completion?: string | null
    isCompleted?: boolean
    studentId: string
    educatorId: string
    enrolled?: number | null
  }

  export type CoursesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    completion?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    enrolled?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CoursesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    completion?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    studentId?: StringFieldUpdateOperationsInput | string
    educatorId?: StringFieldUpdateOperationsInput | string
    enrolled?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EducatorsCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    courses?: CoursesCreateNestedManyWithoutEducatorInput
  }

  export type EducatorsUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    courses?: CoursesUncheckedCreateNestedManyWithoutEducatorInput
  }

  export type EducatorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: CoursesUpdateManyWithoutEducatorNestedInput
  }

  export type EducatorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: CoursesUncheckedUpdateManyWithoutEducatorNestedInput
  }

  export type EducatorsCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
  }

  export type EducatorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducatorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CoursesListRelationFilter = {
    every?: CoursesWhereInput
    some?: CoursesWhereInput
    none?: CoursesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CoursesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    srn?: SortOrder
    age?: SortOrder
    dob?: SortOrder
    intrest?: SortOrder
    goal?: SortOrder
    courseCompleted?: SortOrder
    Points?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    courseCompleted?: SortOrder
    Points?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    srn?: SortOrder
    age?: SortOrder
    dob?: SortOrder
    intrest?: SortOrder
    goal?: SortOrder
    courseCompleted?: SortOrder
    Points?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    srn?: SortOrder
    age?: SortOrder
    dob?: SortOrder
    intrest?: SortOrder
    goal?: SortOrder
    courseCompleted?: SortOrder
    Points?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    courseCompleted?: SortOrder
    Points?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type EducatorsScalarRelationFilter = {
    is?: EducatorsWhereInput
    isNot?: EducatorsWhereInput
  }

  export type CoursesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    completion?: SortOrder
    isCompleted?: SortOrder
    studentId?: SortOrder
    educatorId?: SortOrder
    enrolled?: SortOrder
  }

  export type CoursesAvgOrderByAggregateInput = {
    enrolled?: SortOrder
  }

  export type CoursesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    completion?: SortOrder
    isCompleted?: SortOrder
    studentId?: SortOrder
    educatorId?: SortOrder
    enrolled?: SortOrder
  }

  export type CoursesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    completion?: SortOrder
    isCompleted?: SortOrder
    studentId?: SortOrder
    educatorId?: SortOrder
    enrolled?: SortOrder
  }

  export type CoursesSumOrderByAggregateInput = {
    enrolled?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EducatorsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type EducatorsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type EducatorsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type CoursesCreateNestedManyWithoutStudentInput = {
    create?: XOR<CoursesCreateWithoutStudentInput, CoursesUncheckedCreateWithoutStudentInput> | CoursesCreateWithoutStudentInput[] | CoursesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CoursesCreateOrConnectWithoutStudentInput | CoursesCreateOrConnectWithoutStudentInput[]
    createMany?: CoursesCreateManyStudentInputEnvelope
    connect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
  }

  export type CoursesUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<CoursesCreateWithoutStudentInput, CoursesUncheckedCreateWithoutStudentInput> | CoursesCreateWithoutStudentInput[] | CoursesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CoursesCreateOrConnectWithoutStudentInput | CoursesCreateOrConnectWithoutStudentInput[]
    createMany?: CoursesCreateManyStudentInputEnvelope
    connect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CoursesUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CoursesCreateWithoutStudentInput, CoursesUncheckedCreateWithoutStudentInput> | CoursesCreateWithoutStudentInput[] | CoursesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CoursesCreateOrConnectWithoutStudentInput | CoursesCreateOrConnectWithoutStudentInput[]
    upsert?: CoursesUpsertWithWhereUniqueWithoutStudentInput | CoursesUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CoursesCreateManyStudentInputEnvelope
    set?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    disconnect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    delete?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    connect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    update?: CoursesUpdateWithWhereUniqueWithoutStudentInput | CoursesUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CoursesUpdateManyWithWhereWithoutStudentInput | CoursesUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CoursesScalarWhereInput | CoursesScalarWhereInput[]
  }

  export type CoursesUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CoursesCreateWithoutStudentInput, CoursesUncheckedCreateWithoutStudentInput> | CoursesCreateWithoutStudentInput[] | CoursesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CoursesCreateOrConnectWithoutStudentInput | CoursesCreateOrConnectWithoutStudentInput[]
    upsert?: CoursesUpsertWithWhereUniqueWithoutStudentInput | CoursesUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CoursesCreateManyStudentInputEnvelope
    set?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    disconnect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    delete?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    connect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    update?: CoursesUpdateWithWhereUniqueWithoutStudentInput | CoursesUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CoursesUpdateManyWithWhereWithoutStudentInput | CoursesUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CoursesScalarWhereInput | CoursesScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutCoursesInput = {
    create?: XOR<StudentCreateWithoutCoursesInput, StudentUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCoursesInput
    connect?: StudentWhereUniqueInput
  }

  export type EducatorsCreateNestedOneWithoutCoursesInput = {
    create?: XOR<EducatorsCreateWithoutCoursesInput, EducatorsUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: EducatorsCreateOrConnectWithoutCoursesInput
    connect?: EducatorsWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StudentUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<StudentCreateWithoutCoursesInput, StudentUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCoursesInput
    upsert?: StudentUpsertWithoutCoursesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutCoursesInput, StudentUpdateWithoutCoursesInput>, StudentUncheckedUpdateWithoutCoursesInput>
  }

  export type EducatorsUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<EducatorsCreateWithoutCoursesInput, EducatorsUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: EducatorsCreateOrConnectWithoutCoursesInput
    upsert?: EducatorsUpsertWithoutCoursesInput
    connect?: EducatorsWhereUniqueInput
    update?: XOR<XOR<EducatorsUpdateToOneWithWhereWithoutCoursesInput, EducatorsUpdateWithoutCoursesInput>, EducatorsUncheckedUpdateWithoutCoursesInput>
  }

  export type CoursesCreateNestedManyWithoutEducatorInput = {
    create?: XOR<CoursesCreateWithoutEducatorInput, CoursesUncheckedCreateWithoutEducatorInput> | CoursesCreateWithoutEducatorInput[] | CoursesUncheckedCreateWithoutEducatorInput[]
    connectOrCreate?: CoursesCreateOrConnectWithoutEducatorInput | CoursesCreateOrConnectWithoutEducatorInput[]
    createMany?: CoursesCreateManyEducatorInputEnvelope
    connect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
  }

  export type CoursesUncheckedCreateNestedManyWithoutEducatorInput = {
    create?: XOR<CoursesCreateWithoutEducatorInput, CoursesUncheckedCreateWithoutEducatorInput> | CoursesCreateWithoutEducatorInput[] | CoursesUncheckedCreateWithoutEducatorInput[]
    connectOrCreate?: CoursesCreateOrConnectWithoutEducatorInput | CoursesCreateOrConnectWithoutEducatorInput[]
    createMany?: CoursesCreateManyEducatorInputEnvelope
    connect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
  }

  export type CoursesUpdateManyWithoutEducatorNestedInput = {
    create?: XOR<CoursesCreateWithoutEducatorInput, CoursesUncheckedCreateWithoutEducatorInput> | CoursesCreateWithoutEducatorInput[] | CoursesUncheckedCreateWithoutEducatorInput[]
    connectOrCreate?: CoursesCreateOrConnectWithoutEducatorInput | CoursesCreateOrConnectWithoutEducatorInput[]
    upsert?: CoursesUpsertWithWhereUniqueWithoutEducatorInput | CoursesUpsertWithWhereUniqueWithoutEducatorInput[]
    createMany?: CoursesCreateManyEducatorInputEnvelope
    set?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    disconnect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    delete?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    connect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    update?: CoursesUpdateWithWhereUniqueWithoutEducatorInput | CoursesUpdateWithWhereUniqueWithoutEducatorInput[]
    updateMany?: CoursesUpdateManyWithWhereWithoutEducatorInput | CoursesUpdateManyWithWhereWithoutEducatorInput[]
    deleteMany?: CoursesScalarWhereInput | CoursesScalarWhereInput[]
  }

  export type CoursesUncheckedUpdateManyWithoutEducatorNestedInput = {
    create?: XOR<CoursesCreateWithoutEducatorInput, CoursesUncheckedCreateWithoutEducatorInput> | CoursesCreateWithoutEducatorInput[] | CoursesUncheckedCreateWithoutEducatorInput[]
    connectOrCreate?: CoursesCreateOrConnectWithoutEducatorInput | CoursesCreateOrConnectWithoutEducatorInput[]
    upsert?: CoursesUpsertWithWhereUniqueWithoutEducatorInput | CoursesUpsertWithWhereUniqueWithoutEducatorInput[]
    createMany?: CoursesCreateManyEducatorInputEnvelope
    set?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    disconnect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    delete?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    connect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    update?: CoursesUpdateWithWhereUniqueWithoutEducatorInput | CoursesUpdateWithWhereUniqueWithoutEducatorInput[]
    updateMany?: CoursesUpdateManyWithWhereWithoutEducatorInput | CoursesUpdateManyWithWhereWithoutEducatorInput[]
    deleteMany?: CoursesScalarWhereInput | CoursesScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CoursesCreateWithoutStudentInput = {
    id?: string
    name?: string | null
    description?: string | null
    duration?: string | null
    completion?: string | null
    isCompleted?: boolean
    enrolled?: number | null
    educator: EducatorsCreateNestedOneWithoutCoursesInput
  }

  export type CoursesUncheckedCreateWithoutStudentInput = {
    id?: string
    name?: string | null
    description?: string | null
    duration?: string | null
    completion?: string | null
    isCompleted?: boolean
    educatorId: string
    enrolled?: number | null
  }

  export type CoursesCreateOrConnectWithoutStudentInput = {
    where: CoursesWhereUniqueInput
    create: XOR<CoursesCreateWithoutStudentInput, CoursesUncheckedCreateWithoutStudentInput>
  }

  export type CoursesCreateManyStudentInputEnvelope = {
    data: CoursesCreateManyStudentInput | CoursesCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type CoursesUpsertWithWhereUniqueWithoutStudentInput = {
    where: CoursesWhereUniqueInput
    update: XOR<CoursesUpdateWithoutStudentInput, CoursesUncheckedUpdateWithoutStudentInput>
    create: XOR<CoursesCreateWithoutStudentInput, CoursesUncheckedCreateWithoutStudentInput>
  }

  export type CoursesUpdateWithWhereUniqueWithoutStudentInput = {
    where: CoursesWhereUniqueInput
    data: XOR<CoursesUpdateWithoutStudentInput, CoursesUncheckedUpdateWithoutStudentInput>
  }

  export type CoursesUpdateManyWithWhereWithoutStudentInput = {
    where: CoursesScalarWhereInput
    data: XOR<CoursesUpdateManyMutationInput, CoursesUncheckedUpdateManyWithoutStudentInput>
  }

  export type CoursesScalarWhereInput = {
    AND?: CoursesScalarWhereInput | CoursesScalarWhereInput[]
    OR?: CoursesScalarWhereInput[]
    NOT?: CoursesScalarWhereInput | CoursesScalarWhereInput[]
    id?: StringFilter<"Courses"> | string
    name?: StringNullableFilter<"Courses"> | string | null
    description?: StringNullableFilter<"Courses"> | string | null
    duration?: StringNullableFilter<"Courses"> | string | null
    completion?: StringNullableFilter<"Courses"> | string | null
    isCompleted?: BoolFilter<"Courses"> | boolean
    studentId?: StringFilter<"Courses"> | string
    educatorId?: StringFilter<"Courses"> | string
    enrolled?: IntNullableFilter<"Courses"> | number | null
  }

  export type StudentCreateWithoutCoursesInput = {
    id?: string
    name?: string | null
    email?: string | null
    srn?: string | null
    age?: string | null
    dob?: string | null
    intrest?: string | null
    goal?: string | null
    courseCompleted?: number | null
    Points?: number | null
  }

  export type StudentUncheckedCreateWithoutCoursesInput = {
    id?: string
    name?: string | null
    email?: string | null
    srn?: string | null
    age?: string | null
    dob?: string | null
    intrest?: string | null
    goal?: string | null
    courseCompleted?: number | null
    Points?: number | null
  }

  export type StudentCreateOrConnectWithoutCoursesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutCoursesInput, StudentUncheckedCreateWithoutCoursesInput>
  }

  export type EducatorsCreateWithoutCoursesInput = {
    id?: string
    name?: string | null
    email?: string | null
  }

  export type EducatorsUncheckedCreateWithoutCoursesInput = {
    id?: string
    name?: string | null
    email?: string | null
  }

  export type EducatorsCreateOrConnectWithoutCoursesInput = {
    where: EducatorsWhereUniqueInput
    create: XOR<EducatorsCreateWithoutCoursesInput, EducatorsUncheckedCreateWithoutCoursesInput>
  }

  export type StudentUpsertWithoutCoursesInput = {
    update: XOR<StudentUpdateWithoutCoursesInput, StudentUncheckedUpdateWithoutCoursesInput>
    create: XOR<StudentCreateWithoutCoursesInput, StudentUncheckedCreateWithoutCoursesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutCoursesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutCoursesInput, StudentUncheckedUpdateWithoutCoursesInput>
  }

  export type StudentUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    srn?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    intrest?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    Points?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StudentUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    srn?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    intrest?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: NullableIntFieldUpdateOperationsInput | number | null
    Points?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EducatorsUpsertWithoutCoursesInput = {
    update: XOR<EducatorsUpdateWithoutCoursesInput, EducatorsUncheckedUpdateWithoutCoursesInput>
    create: XOR<EducatorsCreateWithoutCoursesInput, EducatorsUncheckedCreateWithoutCoursesInput>
    where?: EducatorsWhereInput
  }

  export type EducatorsUpdateToOneWithWhereWithoutCoursesInput = {
    where?: EducatorsWhereInput
    data: XOR<EducatorsUpdateWithoutCoursesInput, EducatorsUncheckedUpdateWithoutCoursesInput>
  }

  export type EducatorsUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducatorsUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoursesCreateWithoutEducatorInput = {
    id?: string
    name?: string | null
    description?: string | null
    duration?: string | null
    completion?: string | null
    isCompleted?: boolean
    enrolled?: number | null
    student: StudentCreateNestedOneWithoutCoursesInput
  }

  export type CoursesUncheckedCreateWithoutEducatorInput = {
    id?: string
    name?: string | null
    description?: string | null
    duration?: string | null
    completion?: string | null
    isCompleted?: boolean
    studentId: string
    enrolled?: number | null
  }

  export type CoursesCreateOrConnectWithoutEducatorInput = {
    where: CoursesWhereUniqueInput
    create: XOR<CoursesCreateWithoutEducatorInput, CoursesUncheckedCreateWithoutEducatorInput>
  }

  export type CoursesCreateManyEducatorInputEnvelope = {
    data: CoursesCreateManyEducatorInput | CoursesCreateManyEducatorInput[]
    skipDuplicates?: boolean
  }

  export type CoursesUpsertWithWhereUniqueWithoutEducatorInput = {
    where: CoursesWhereUniqueInput
    update: XOR<CoursesUpdateWithoutEducatorInput, CoursesUncheckedUpdateWithoutEducatorInput>
    create: XOR<CoursesCreateWithoutEducatorInput, CoursesUncheckedCreateWithoutEducatorInput>
  }

  export type CoursesUpdateWithWhereUniqueWithoutEducatorInput = {
    where: CoursesWhereUniqueInput
    data: XOR<CoursesUpdateWithoutEducatorInput, CoursesUncheckedUpdateWithoutEducatorInput>
  }

  export type CoursesUpdateManyWithWhereWithoutEducatorInput = {
    where: CoursesScalarWhereInput
    data: XOR<CoursesUpdateManyMutationInput, CoursesUncheckedUpdateManyWithoutEducatorInput>
  }

  export type CoursesCreateManyStudentInput = {
    id?: string
    name?: string | null
    description?: string | null
    duration?: string | null
    completion?: string | null
    isCompleted?: boolean
    educatorId: string
    enrolled?: number | null
  }

  export type CoursesUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    completion?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    enrolled?: NullableIntFieldUpdateOperationsInput | number | null
    educator?: EducatorsUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CoursesUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    completion?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    educatorId?: StringFieldUpdateOperationsInput | string
    enrolled?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CoursesUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    completion?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    educatorId?: StringFieldUpdateOperationsInput | string
    enrolled?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CoursesCreateManyEducatorInput = {
    id?: string
    name?: string | null
    description?: string | null
    duration?: string | null
    completion?: string | null
    isCompleted?: boolean
    studentId: string
    enrolled?: number | null
  }

  export type CoursesUpdateWithoutEducatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    completion?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    enrolled?: NullableIntFieldUpdateOperationsInput | number | null
    student?: StudentUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CoursesUncheckedUpdateWithoutEducatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    completion?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    studentId?: StringFieldUpdateOperationsInput | string
    enrolled?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CoursesUncheckedUpdateManyWithoutEducatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    completion?: NullableStringFieldUpdateOperationsInput | string | null
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    studentId?: StringFieldUpdateOperationsInput | string
    enrolled?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}