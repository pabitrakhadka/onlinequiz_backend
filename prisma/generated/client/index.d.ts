
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model Option
 * 
 */
export type Option = $Result.DefaultSelection<Prisma.$OptionPayload>
/**
 * Model UserDetailsScore
 * 
 */
export type UserDetailsScore = $Result.DefaultSelection<Prisma.$UserDetailsScorePayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model ShortcutKey
 * 
 */
export type ShortcutKey = $Result.DefaultSelection<Prisma.$ShortcutKeyPayload>
/**
 * Model FullForm
 * 
 */
export type FullForm = $Result.DefaultSelection<Prisma.$FullFormPayload>
/**
 * Model SubjectiveQuestion
 * 
 */
export type SubjectiveQuestion = $Result.DefaultSelection<Prisma.$SubjectiveQuestionPayload>
/**
 * Model SubjectiveQuestionOnly
 * 
 */
export type SubjectiveQuestionOnly = $Result.DefaultSelection<Prisma.$SubjectiveQuestionOnlyPayload>
/**
 * Model NewsBlog
 * 
 */
export type NewsBlog = $Result.DefaultSelection<Prisma.$NewsBlogPayload>
/**
 * Model Contacts
 * 
 */
export type Contacts = $Result.DefaultSelection<Prisma.$ContactsPayload>
/**
 * Model pdfSubjectiveQuestion
 * 
 */
export type pdfSubjectiveQuestion = $Result.DefaultSelection<Prisma.$pdfSubjectiveQuestionPayload>

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

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
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs>;

  /**
   * `prisma.option`: Exposes CRUD operations for the **Option** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Options
    * const options = await prisma.option.findMany()
    * ```
    */
  get option(): Prisma.OptionDelegate<ExtArgs>;

  /**
   * `prisma.userDetailsScore`: Exposes CRUD operations for the **UserDetailsScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDetailsScores
    * const userDetailsScores = await prisma.userDetailsScore.findMany()
    * ```
    */
  get userDetailsScore(): Prisma.UserDetailsScoreDelegate<ExtArgs>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs>;

  /**
   * `prisma.shortcutKey`: Exposes CRUD operations for the **ShortcutKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShortcutKeys
    * const shortcutKeys = await prisma.shortcutKey.findMany()
    * ```
    */
  get shortcutKey(): Prisma.ShortcutKeyDelegate<ExtArgs>;

  /**
   * `prisma.fullForm`: Exposes CRUD operations for the **FullForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FullForms
    * const fullForms = await prisma.fullForm.findMany()
    * ```
    */
  get fullForm(): Prisma.FullFormDelegate<ExtArgs>;

  /**
   * `prisma.subjectiveQuestion`: Exposes CRUD operations for the **SubjectiveQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubjectiveQuestions
    * const subjectiveQuestions = await prisma.subjectiveQuestion.findMany()
    * ```
    */
  get subjectiveQuestion(): Prisma.SubjectiveQuestionDelegate<ExtArgs>;

  /**
   * `prisma.subjectiveQuestionOnly`: Exposes CRUD operations for the **SubjectiveQuestionOnly** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubjectiveQuestionOnlies
    * const subjectiveQuestionOnlies = await prisma.subjectiveQuestionOnly.findMany()
    * ```
    */
  get subjectiveQuestionOnly(): Prisma.SubjectiveQuestionOnlyDelegate<ExtArgs>;

  /**
   * `prisma.newsBlog`: Exposes CRUD operations for the **NewsBlog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsBlogs
    * const newsBlogs = await prisma.newsBlog.findMany()
    * ```
    */
  get newsBlog(): Prisma.NewsBlogDelegate<ExtArgs>;

  /**
   * `prisma.contacts`: Exposes CRUD operations for the **Contacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contacts.findMany()
    * ```
    */
  get contacts(): Prisma.ContactsDelegate<ExtArgs>;

  /**
   * `prisma.pdfSubjectiveQuestion`: Exposes CRUD operations for the **pdfSubjectiveQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PdfSubjectiveQuestions
    * const pdfSubjectiveQuestions = await prisma.pdfSubjectiveQuestion.findMany()
    * ```
    */
  get pdfSubjectiveQuestion(): Prisma.pdfSubjectiveQuestionDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Quiz: 'Quiz',
    Option: 'Option',
    UserDetailsScore: 'UserDetailsScore',
    News: 'News',
    ShortcutKey: 'ShortcutKey',
    FullForm: 'FullForm',
    SubjectiveQuestion: 'SubjectiveQuestion',
    SubjectiveQuestionOnly: 'SubjectiveQuestionOnly',
    NewsBlog: 'NewsBlog',
    Contacts: 'Contacts',
    pdfSubjectiveQuestion: 'pdfSubjectiveQuestion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "quiz" | "option" | "userDetailsScore" | "news" | "shortcutKey" | "fullForm" | "subjectiveQuestion" | "subjectiveQuestionOnly" | "newsBlog" | "contacts" | "pdfSubjectiveQuestion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      Option: {
        payload: Prisma.$OptionPayload<ExtArgs>
        fields: Prisma.OptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findFirst: {
            args: Prisma.OptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findMany: {
            args: Prisma.OptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          create: {
            args: Prisma.OptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          createMany: {
            args: Prisma.OptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          delete: {
            args: Prisma.OptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          update: {
            args: Prisma.OptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          deleteMany: {
            args: Prisma.OptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          aggregate: {
            args: Prisma.OptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOption>
          }
          groupBy: {
            args: Prisma.OptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionCountArgs<ExtArgs>
            result: $Utils.Optional<OptionCountAggregateOutputType> | number
          }
        }
      }
      UserDetailsScore: {
        payload: Prisma.$UserDetailsScorePayload<ExtArgs>
        fields: Prisma.UserDetailsScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDetailsScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDetailsScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsScorePayload>
          }
          findFirst: {
            args: Prisma.UserDetailsScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDetailsScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsScorePayload>
          }
          findMany: {
            args: Prisma.UserDetailsScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsScorePayload>[]
          }
          create: {
            args: Prisma.UserDetailsScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsScorePayload>
          }
          createMany: {
            args: Prisma.UserDetailsScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDetailsScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsScorePayload>[]
          }
          delete: {
            args: Prisma.UserDetailsScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsScorePayload>
          }
          update: {
            args: Prisma.UserDetailsScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsScorePayload>
          }
          deleteMany: {
            args: Prisma.UserDetailsScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDetailsScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserDetailsScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsScorePayload>
          }
          aggregate: {
            args: Prisma.UserDetailsScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDetailsScore>
          }
          groupBy: {
            args: Prisma.UserDetailsScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDetailsScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDetailsScoreCountArgs<ExtArgs>
            result: $Utils.Optional<UserDetailsScoreCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      ShortcutKey: {
        payload: Prisma.$ShortcutKeyPayload<ExtArgs>
        fields: Prisma.ShortcutKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShortcutKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortcutKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShortcutKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortcutKeyPayload>
          }
          findFirst: {
            args: Prisma.ShortcutKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortcutKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShortcutKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortcutKeyPayload>
          }
          findMany: {
            args: Prisma.ShortcutKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortcutKeyPayload>[]
          }
          create: {
            args: Prisma.ShortcutKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortcutKeyPayload>
          }
          createMany: {
            args: Prisma.ShortcutKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShortcutKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortcutKeyPayload>[]
          }
          delete: {
            args: Prisma.ShortcutKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortcutKeyPayload>
          }
          update: {
            args: Prisma.ShortcutKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortcutKeyPayload>
          }
          deleteMany: {
            args: Prisma.ShortcutKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShortcutKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShortcutKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortcutKeyPayload>
          }
          aggregate: {
            args: Prisma.ShortcutKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShortcutKey>
          }
          groupBy: {
            args: Prisma.ShortcutKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShortcutKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShortcutKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ShortcutKeyCountAggregateOutputType> | number
          }
        }
      }
      FullForm: {
        payload: Prisma.$FullFormPayload<ExtArgs>
        fields: Prisma.FullFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FullFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FullFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FullFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FullFormPayload>
          }
          findFirst: {
            args: Prisma.FullFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FullFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FullFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FullFormPayload>
          }
          findMany: {
            args: Prisma.FullFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FullFormPayload>[]
          }
          create: {
            args: Prisma.FullFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FullFormPayload>
          }
          createMany: {
            args: Prisma.FullFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FullFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FullFormPayload>[]
          }
          delete: {
            args: Prisma.FullFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FullFormPayload>
          }
          update: {
            args: Prisma.FullFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FullFormPayload>
          }
          deleteMany: {
            args: Prisma.FullFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FullFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FullFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FullFormPayload>
          }
          aggregate: {
            args: Prisma.FullFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFullForm>
          }
          groupBy: {
            args: Prisma.FullFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<FullFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.FullFormCountArgs<ExtArgs>
            result: $Utils.Optional<FullFormCountAggregateOutputType> | number
          }
        }
      }
      SubjectiveQuestion: {
        payload: Prisma.$SubjectiveQuestionPayload<ExtArgs>
        fields: Prisma.SubjectiveQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectiveQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectiveQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionPayload>
          }
          findFirst: {
            args: Prisma.SubjectiveQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectiveQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionPayload>
          }
          findMany: {
            args: Prisma.SubjectiveQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionPayload>[]
          }
          create: {
            args: Prisma.SubjectiveQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionPayload>
          }
          createMany: {
            args: Prisma.SubjectiveQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectiveQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionPayload>[]
          }
          delete: {
            args: Prisma.SubjectiveQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionPayload>
          }
          update: {
            args: Prisma.SubjectiveQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionPayload>
          }
          deleteMany: {
            args: Prisma.SubjectiveQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectiveQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubjectiveQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionPayload>
          }
          aggregate: {
            args: Prisma.SubjectiveQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubjectiveQuestion>
          }
          groupBy: {
            args: Prisma.SubjectiveQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectiveQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectiveQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectiveQuestionCountAggregateOutputType> | number
          }
        }
      }
      SubjectiveQuestionOnly: {
        payload: Prisma.$SubjectiveQuestionOnlyPayload<ExtArgs>
        fields: Prisma.SubjectiveQuestionOnlyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectiveQuestionOnlyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionOnlyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectiveQuestionOnlyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionOnlyPayload>
          }
          findFirst: {
            args: Prisma.SubjectiveQuestionOnlyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionOnlyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectiveQuestionOnlyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionOnlyPayload>
          }
          findMany: {
            args: Prisma.SubjectiveQuestionOnlyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionOnlyPayload>[]
          }
          create: {
            args: Prisma.SubjectiveQuestionOnlyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionOnlyPayload>
          }
          createMany: {
            args: Prisma.SubjectiveQuestionOnlyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectiveQuestionOnlyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionOnlyPayload>[]
          }
          delete: {
            args: Prisma.SubjectiveQuestionOnlyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionOnlyPayload>
          }
          update: {
            args: Prisma.SubjectiveQuestionOnlyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionOnlyPayload>
          }
          deleteMany: {
            args: Prisma.SubjectiveQuestionOnlyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectiveQuestionOnlyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubjectiveQuestionOnlyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectiveQuestionOnlyPayload>
          }
          aggregate: {
            args: Prisma.SubjectiveQuestionOnlyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubjectiveQuestionOnly>
          }
          groupBy: {
            args: Prisma.SubjectiveQuestionOnlyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectiveQuestionOnlyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectiveQuestionOnlyCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectiveQuestionOnlyCountAggregateOutputType> | number
          }
        }
      }
      NewsBlog: {
        payload: Prisma.$NewsBlogPayload<ExtArgs>
        fields: Prisma.NewsBlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsBlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsBlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlogPayload>
          }
          findFirst: {
            args: Prisma.NewsBlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsBlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlogPayload>
          }
          findMany: {
            args: Prisma.NewsBlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlogPayload>[]
          }
          create: {
            args: Prisma.NewsBlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlogPayload>
          }
          createMany: {
            args: Prisma.NewsBlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsBlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlogPayload>[]
          }
          delete: {
            args: Prisma.NewsBlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlogPayload>
          }
          update: {
            args: Prisma.NewsBlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlogPayload>
          }
          deleteMany: {
            args: Prisma.NewsBlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsBlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsBlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsBlogPayload>
          }
          aggregate: {
            args: Prisma.NewsBlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsBlog>
          }
          groupBy: {
            args: Prisma.NewsBlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsBlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsBlogCountArgs<ExtArgs>
            result: $Utils.Optional<NewsBlogCountAggregateOutputType> | number
          }
        }
      }
      Contacts: {
        payload: Prisma.$ContactsPayload<ExtArgs>
        fields: Prisma.ContactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          findFirst: {
            args: Prisma.ContactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          findMany: {
            args: Prisma.ContactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          create: {
            args: Prisma.ContactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          createMany: {
            args: Prisma.ContactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          delete: {
            args: Prisma.ContactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          update: {
            args: Prisma.ContactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          deleteMany: {
            args: Prisma.ContactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          aggregate: {
            args: Prisma.ContactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContacts>
          }
          groupBy: {
            args: Prisma.ContactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactsCountArgs<ExtArgs>
            result: $Utils.Optional<ContactsCountAggregateOutputType> | number
          }
        }
      }
      pdfSubjectiveQuestion: {
        payload: Prisma.$pdfSubjectiveQuestionPayload<ExtArgs>
        fields: Prisma.pdfSubjectiveQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pdfSubjectiveQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfSubjectiveQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pdfSubjectiveQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfSubjectiveQuestionPayload>
          }
          findFirst: {
            args: Prisma.pdfSubjectiveQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfSubjectiveQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pdfSubjectiveQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfSubjectiveQuestionPayload>
          }
          findMany: {
            args: Prisma.pdfSubjectiveQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfSubjectiveQuestionPayload>[]
          }
          create: {
            args: Prisma.pdfSubjectiveQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfSubjectiveQuestionPayload>
          }
          createMany: {
            args: Prisma.pdfSubjectiveQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pdfSubjectiveQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfSubjectiveQuestionPayload>[]
          }
          delete: {
            args: Prisma.pdfSubjectiveQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfSubjectiveQuestionPayload>
          }
          update: {
            args: Prisma.pdfSubjectiveQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfSubjectiveQuestionPayload>
          }
          deleteMany: {
            args: Prisma.pdfSubjectiveQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pdfSubjectiveQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pdfSubjectiveQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfSubjectiveQuestionPayload>
          }
          aggregate: {
            args: Prisma.PdfSubjectiveQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePdfSubjectiveQuestion>
          }
          groupBy: {
            args: Prisma.pdfSubjectiveQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PdfSubjectiveQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.pdfSubjectiveQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<PdfSubjectiveQuestionCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userScores: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userScores?: boolean | UserCountOutputTypeCountUserScoresArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDetailsScoreWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    options: number
    userScores: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | QuizCountOutputTypeCountOptionsArgs
    userScores?: boolean | QuizCountOutputTypeCountUserScoresArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountUserScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDetailsScoreWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    prepassword: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    prepassword: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    prepassword: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    prepassword?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    prepassword?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    prepassword?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    prepassword: string
    address: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    prepassword?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userScores?: boolean | User$userScoresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    prepassword?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    prepassword?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userScores?: boolean | User$userScoresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userScores: Prisma.$UserDetailsScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      password: string
      prepassword: string
      address: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userScores<T extends User$userScoresArgs<ExtArgs> = {}>(args?: Subset<T, User$userScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsScorePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly prepassword: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.userScores
   */
  export type User$userScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetailsScore
     */
    select?: UserDetailsScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsScoreInclude<ExtArgs> | null
    where?: UserDetailsScoreWhereInput
    orderBy?: UserDetailsScoreOrderByWithRelationInput | UserDetailsScoreOrderByWithRelationInput[]
    cursor?: UserDetailsScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDetailsScoreScalarFieldEnum | UserDetailsScoreScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    id: number | null
  }

  export type QuizSumAggregateOutputType = {
    id: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: number | null
    question: string | null
    descripton: string | null
    answer: string | null
    category: string | null
    createdAt: Date | null
  }

  export type QuizMaxAggregateOutputType = {
    id: number | null
    question: string | null
    descripton: string | null
    answer: string | null
    category: string | null
    createdAt: Date | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    question: number
    descripton: number
    answer: number
    category: number
    createdAt: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    id?: true
  }

  export type QuizSumAggregateInputType = {
    id?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    question?: true
    descripton?: true
    answer?: true
    category?: true
    createdAt?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    question?: true
    descripton?: true
    answer?: true
    category?: true
    createdAt?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    question?: true
    descripton?: true
    answer?: true
    category?: true
    createdAt?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: number
    question: string
    descripton: string | null
    answer: string
    category: string
    createdAt: Date
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    descripton?: boolean
    answer?: boolean
    category?: boolean
    createdAt?: boolean
    options?: boolean | Quiz$optionsArgs<ExtArgs>
    userScores?: boolean | Quiz$userScoresArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    descripton?: boolean
    answer?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectScalar = {
    id?: boolean
    question?: boolean
    descripton?: boolean
    answer?: boolean
    category?: boolean
    createdAt?: boolean
  }

  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | Quiz$optionsArgs<ExtArgs>
    userScores?: boolean | Quiz$userScoresArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      options: Prisma.$OptionPayload<ExtArgs>[]
      userScores: Prisma.$UserDetailsScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question: string
      descripton: string | null
      answer: string
      category: string
      createdAt: Date
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {QuizCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    options<T extends Quiz$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany"> | Null>
    userScores<T extends Quiz$userScoresArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$userScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsScorePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Quiz model
   */ 
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'Int'>
    readonly question: FieldRef<"Quiz", 'String'>
    readonly descripton: FieldRef<"Quiz", 'String'>
    readonly answer: FieldRef<"Quiz", 'String'>
    readonly category: FieldRef<"Quiz", 'String'>
    readonly createdAt: FieldRef<"Quiz", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz createManyAndReturn
   */
  export type QuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
  }

  /**
   * Quiz.options
   */
  export type Quiz$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    cursor?: OptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Quiz.userScores
   */
  export type Quiz$userScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetailsScore
     */
    select?: UserDetailsScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsScoreInclude<ExtArgs> | null
    where?: UserDetailsScoreWhereInput
    orderBy?: UserDetailsScoreOrderByWithRelationInput | UserDetailsScoreOrderByWithRelationInput[]
    cursor?: UserDetailsScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDetailsScoreScalarFieldEnum | UserDetailsScoreScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model Option
   */

  export type AggregateOption = {
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  export type OptionAvgAggregateOutputType = {
    id: number | null
    quizId: number | null
  }

  export type OptionSumAggregateOutputType = {
    id: number | null
    quizId: number | null
  }

  export type OptionMinAggregateOutputType = {
    id: number | null
    text: string | null
    quizId: number | null
  }

  export type OptionMaxAggregateOutputType = {
    id: number | null
    text: string | null
    quizId: number | null
  }

  export type OptionCountAggregateOutputType = {
    id: number
    text: number
    quizId: number
    _all: number
  }


  export type OptionAvgAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type OptionSumAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type OptionMinAggregateInputType = {
    id?: true
    text?: true
    quizId?: true
  }

  export type OptionMaxAggregateInputType = {
    id?: true
    text?: true
    quizId?: true
  }

  export type OptionCountAggregateInputType = {
    id?: true
    text?: true
    quizId?: true
    _all?: true
  }

  export type OptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Option to aggregate.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Options
    **/
    _count?: true | OptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionMaxAggregateInputType
  }

  export type GetOptionAggregateType<T extends OptionAggregateArgs> = {
        [P in keyof T & keyof AggregateOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOption[P]>
      : GetScalarType<T[P], AggregateOption[P]>
  }




  export type OptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithAggregationInput | OptionOrderByWithAggregationInput[]
    by: OptionScalarFieldEnum[] | OptionScalarFieldEnum
    having?: OptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionCountAggregateInputType | true
    _avg?: OptionAvgAggregateInputType
    _sum?: OptionSumAggregateInputType
    _min?: OptionMinAggregateInputType
    _max?: OptionMaxAggregateInputType
  }

  export type OptionGroupByOutputType = {
    id: number
    text: string
    quizId: number
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  type GetOptionGroupByPayload<T extends OptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionGroupByOutputType[P]>
            : GetScalarType<T[P], OptionGroupByOutputType[P]>
        }
      >
    >


  export type OptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    quizId?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    quizId?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectScalar = {
    id?: boolean
    text?: boolean
    quizId?: boolean
  }

  export type OptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type OptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $OptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Option"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      quizId: number
    }, ExtArgs["result"]["option"]>
    composites: {}
  }

  type OptionGetPayload<S extends boolean | null | undefined | OptionDefaultArgs> = $Result.GetResult<Prisma.$OptionPayload, S>

  type OptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OptionCountAggregateInputType | true
    }

  export interface OptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Option'], meta: { name: 'Option' } }
    /**
     * Find zero or one Option that matches the filter.
     * @param {OptionFindUniqueArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionFindUniqueArgs>(args: SelectSubset<T, OptionFindUniqueArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Option that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OptionFindUniqueOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionFindUniqueOrThrowArgs>(args: SelectSubset<T, OptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Option that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionFindFirstArgs>(args?: SelectSubset<T, OptionFindFirstArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Option that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionFindFirstOrThrowArgs>(args?: SelectSubset<T, OptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Options
     * const options = await prisma.option.findMany()
     * 
     * // Get first 10 Options
     * const options = await prisma.option.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionWithIdOnly = await prisma.option.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptionFindManyArgs>(args?: SelectSubset<T, OptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Option.
     * @param {OptionCreateArgs} args - Arguments to create a Option.
     * @example
     * // Create one Option
     * const Option = await prisma.option.create({
     *   data: {
     *     // ... data to create a Option
     *   }
     * })
     * 
     */
    create<T extends OptionCreateArgs>(args: SelectSubset<T, OptionCreateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Options.
     * @param {OptionCreateManyArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptionCreateManyArgs>(args?: SelectSubset<T, OptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Options and returns the data saved in the database.
     * @param {OptionCreateManyAndReturnArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Options and only return the `id`
     * const optionWithIdOnly = await prisma.option.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptionCreateManyAndReturnArgs>(args?: SelectSubset<T, OptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Option.
     * @param {OptionDeleteArgs} args - Arguments to delete one Option.
     * @example
     * // Delete one Option
     * const Option = await prisma.option.delete({
     *   where: {
     *     // ... filter to delete one Option
     *   }
     * })
     * 
     */
    delete<T extends OptionDeleteArgs>(args: SelectSubset<T, OptionDeleteArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Option.
     * @param {OptionUpdateArgs} args - Arguments to update one Option.
     * @example
     * // Update one Option
     * const option = await prisma.option.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptionUpdateArgs>(args: SelectSubset<T, OptionUpdateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Options.
     * @param {OptionDeleteManyArgs} args - Arguments to filter Options to delete.
     * @example
     * // Delete a few Options
     * const { count } = await prisma.option.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptionDeleteManyArgs>(args?: SelectSubset<T, OptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptionUpdateManyArgs>(args: SelectSubset<T, OptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Option.
     * @param {OptionUpsertArgs} args - Arguments to update or create a Option.
     * @example
     * // Update or create a Option
     * const option = await prisma.option.upsert({
     *   create: {
     *     // ... data to create a Option
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Option we want to update
     *   }
     * })
     */
    upsert<T extends OptionUpsertArgs>(args: SelectSubset<T, OptionUpsertArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCountArgs} args - Arguments to filter Options to count.
     * @example
     * // Count the number of Options
     * const count = await prisma.option.count({
     *   where: {
     *     // ... the filter for the Options we want to count
     *   }
     * })
    **/
    count<T extends OptionCountArgs>(
      args?: Subset<T, OptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptionAggregateArgs>(args: Subset<T, OptionAggregateArgs>): Prisma.PrismaPromise<GetOptionAggregateType<T>>

    /**
     * Group by Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionGroupByArgs} args - Group by arguments.
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
      T extends OptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionGroupByArgs['orderBy'] }
        : { orderBy?: OptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Option model
   */
  readonly fields: OptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Option.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Option model
   */ 
  interface OptionFieldRefs {
    readonly id: FieldRef<"Option", 'Int'>
    readonly text: FieldRef<"Option", 'String'>
    readonly quizId: FieldRef<"Option", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Option findUnique
   */
  export type OptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findUniqueOrThrow
   */
  export type OptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findFirst
   */
  export type OptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findFirstOrThrow
   */
  export type OptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findMany
   */
  export type OptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option create
   */
  export type OptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Option.
     */
    data: XOR<OptionCreateInput, OptionUncheckedCreateInput>
  }

  /**
   * Option createMany
   */
  export type OptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Option createManyAndReturn
   */
  export type OptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Option update
   */
  export type OptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Option.
     */
    data: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
    /**
     * Choose, which Option to update.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option updateMany
   */
  export type OptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
  }

  /**
   * Option upsert
   */
  export type OptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Option to update in case it exists.
     */
    where: OptionWhereUniqueInput
    /**
     * In case the Option found by the `where` argument doesn't exist, create a new Option with this data.
     */
    create: XOR<OptionCreateInput, OptionUncheckedCreateInput>
    /**
     * In case the Option was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
  }

  /**
   * Option delete
   */
  export type OptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter which Option to delete.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option deleteMany
   */
  export type OptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Options to delete
     */
    where?: OptionWhereInput
  }

  /**
   * Option without action
   */
  export type OptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
  }


  /**
   * Model UserDetailsScore
   */

  export type AggregateUserDetailsScore = {
    _count: UserDetailsScoreCountAggregateOutputType | null
    _avg: UserDetailsScoreAvgAggregateOutputType | null
    _sum: UserDetailsScoreSumAggregateOutputType | null
    _min: UserDetailsScoreMinAggregateOutputType | null
    _max: UserDetailsScoreMaxAggregateOutputType | null
  }

  export type UserDetailsScoreAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    quizId: number | null
    score: number | null
  }

  export type UserDetailsScoreSumAggregateOutputType = {
    id: number | null
    userId: number | null
    quizId: number | null
    score: number | null
  }

  export type UserDetailsScoreMinAggregateOutputType = {
    id: number | null
    userId: number | null
    quizId: number | null
    score: number | null
    createdAt: Date | null
  }

  export type UserDetailsScoreMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    quizId: number | null
    score: number | null
    createdAt: Date | null
  }

  export type UserDetailsScoreCountAggregateOutputType = {
    id: number
    userId: number
    quizId: number
    score: number
    createdAt: number
    _all: number
  }


  export type UserDetailsScoreAvgAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
  }

  export type UserDetailsScoreSumAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
  }

  export type UserDetailsScoreMinAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
    createdAt?: true
  }

  export type UserDetailsScoreMaxAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
    createdAt?: true
  }

  export type UserDetailsScoreCountAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    score?: true
    createdAt?: true
    _all?: true
  }

  export type UserDetailsScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDetailsScore to aggregate.
     */
    where?: UserDetailsScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetailsScores to fetch.
     */
    orderBy?: UserDetailsScoreOrderByWithRelationInput | UserDetailsScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDetailsScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetailsScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetailsScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDetailsScores
    **/
    _count?: true | UserDetailsScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserDetailsScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserDetailsScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDetailsScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDetailsScoreMaxAggregateInputType
  }

  export type GetUserDetailsScoreAggregateType<T extends UserDetailsScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDetailsScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDetailsScore[P]>
      : GetScalarType<T[P], AggregateUserDetailsScore[P]>
  }




  export type UserDetailsScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDetailsScoreWhereInput
    orderBy?: UserDetailsScoreOrderByWithAggregationInput | UserDetailsScoreOrderByWithAggregationInput[]
    by: UserDetailsScoreScalarFieldEnum[] | UserDetailsScoreScalarFieldEnum
    having?: UserDetailsScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDetailsScoreCountAggregateInputType | true
    _avg?: UserDetailsScoreAvgAggregateInputType
    _sum?: UserDetailsScoreSumAggregateInputType
    _min?: UserDetailsScoreMinAggregateInputType
    _max?: UserDetailsScoreMaxAggregateInputType
  }

  export type UserDetailsScoreGroupByOutputType = {
    id: number
    userId: number
    quizId: number
    score: number
    createdAt: Date
    _count: UserDetailsScoreCountAggregateOutputType | null
    _avg: UserDetailsScoreAvgAggregateOutputType | null
    _sum: UserDetailsScoreSumAggregateOutputType | null
    _min: UserDetailsScoreMinAggregateOutputType | null
    _max: UserDetailsScoreMaxAggregateOutputType | null
  }

  type GetUserDetailsScoreGroupByPayload<T extends UserDetailsScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDetailsScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDetailsScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDetailsScoreGroupByOutputType[P]>
            : GetScalarType<T[P], UserDetailsScoreGroupByOutputType[P]>
        }
      >
    >


  export type UserDetailsScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    score?: boolean
    createdAt?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetailsScore"]>

  export type UserDetailsScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    score?: boolean
    createdAt?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetailsScore"]>

  export type UserDetailsScoreSelectScalar = {
    id?: boolean
    userId?: boolean
    quizId?: boolean
    score?: boolean
    createdAt?: boolean
  }

  export type UserDetailsScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDetailsScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserDetailsScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDetailsScore"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      quizId: number
      score: number
      createdAt: Date
    }, ExtArgs["result"]["userDetailsScore"]>
    composites: {}
  }

  type UserDetailsScoreGetPayload<S extends boolean | null | undefined | UserDetailsScoreDefaultArgs> = $Result.GetResult<Prisma.$UserDetailsScorePayload, S>

  type UserDetailsScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserDetailsScoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserDetailsScoreCountAggregateInputType | true
    }

  export interface UserDetailsScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDetailsScore'], meta: { name: 'UserDetailsScore' } }
    /**
     * Find zero or one UserDetailsScore that matches the filter.
     * @param {UserDetailsScoreFindUniqueArgs} args - Arguments to find a UserDetailsScore
     * @example
     * // Get one UserDetailsScore
     * const userDetailsScore = await prisma.userDetailsScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDetailsScoreFindUniqueArgs>(args: SelectSubset<T, UserDetailsScoreFindUniqueArgs<ExtArgs>>): Prisma__UserDetailsScoreClient<$Result.GetResult<Prisma.$UserDetailsScorePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserDetailsScore that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserDetailsScoreFindUniqueOrThrowArgs} args - Arguments to find a UserDetailsScore
     * @example
     * // Get one UserDetailsScore
     * const userDetailsScore = await prisma.userDetailsScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDetailsScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDetailsScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDetailsScoreClient<$Result.GetResult<Prisma.$UserDetailsScorePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserDetailsScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsScoreFindFirstArgs} args - Arguments to find a UserDetailsScore
     * @example
     * // Get one UserDetailsScore
     * const userDetailsScore = await prisma.userDetailsScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDetailsScoreFindFirstArgs>(args?: SelectSubset<T, UserDetailsScoreFindFirstArgs<ExtArgs>>): Prisma__UserDetailsScoreClient<$Result.GetResult<Prisma.$UserDetailsScorePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserDetailsScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsScoreFindFirstOrThrowArgs} args - Arguments to find a UserDetailsScore
     * @example
     * // Get one UserDetailsScore
     * const userDetailsScore = await prisma.userDetailsScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDetailsScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDetailsScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDetailsScoreClient<$Result.GetResult<Prisma.$UserDetailsScorePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserDetailsScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDetailsScores
     * const userDetailsScores = await prisma.userDetailsScore.findMany()
     * 
     * // Get first 10 UserDetailsScores
     * const userDetailsScores = await prisma.userDetailsScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDetailsScoreWithIdOnly = await prisma.userDetailsScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDetailsScoreFindManyArgs>(args?: SelectSubset<T, UserDetailsScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsScorePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserDetailsScore.
     * @param {UserDetailsScoreCreateArgs} args - Arguments to create a UserDetailsScore.
     * @example
     * // Create one UserDetailsScore
     * const UserDetailsScore = await prisma.userDetailsScore.create({
     *   data: {
     *     // ... data to create a UserDetailsScore
     *   }
     * })
     * 
     */
    create<T extends UserDetailsScoreCreateArgs>(args: SelectSubset<T, UserDetailsScoreCreateArgs<ExtArgs>>): Prisma__UserDetailsScoreClient<$Result.GetResult<Prisma.$UserDetailsScorePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserDetailsScores.
     * @param {UserDetailsScoreCreateManyArgs} args - Arguments to create many UserDetailsScores.
     * @example
     * // Create many UserDetailsScores
     * const userDetailsScore = await prisma.userDetailsScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDetailsScoreCreateManyArgs>(args?: SelectSubset<T, UserDetailsScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDetailsScores and returns the data saved in the database.
     * @param {UserDetailsScoreCreateManyAndReturnArgs} args - Arguments to create many UserDetailsScores.
     * @example
     * // Create many UserDetailsScores
     * const userDetailsScore = await prisma.userDetailsScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDetailsScores and only return the `id`
     * const userDetailsScoreWithIdOnly = await prisma.userDetailsScore.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDetailsScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDetailsScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsScorePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserDetailsScore.
     * @param {UserDetailsScoreDeleteArgs} args - Arguments to delete one UserDetailsScore.
     * @example
     * // Delete one UserDetailsScore
     * const UserDetailsScore = await prisma.userDetailsScore.delete({
     *   where: {
     *     // ... filter to delete one UserDetailsScore
     *   }
     * })
     * 
     */
    delete<T extends UserDetailsScoreDeleteArgs>(args: SelectSubset<T, UserDetailsScoreDeleteArgs<ExtArgs>>): Prisma__UserDetailsScoreClient<$Result.GetResult<Prisma.$UserDetailsScorePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserDetailsScore.
     * @param {UserDetailsScoreUpdateArgs} args - Arguments to update one UserDetailsScore.
     * @example
     * // Update one UserDetailsScore
     * const userDetailsScore = await prisma.userDetailsScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDetailsScoreUpdateArgs>(args: SelectSubset<T, UserDetailsScoreUpdateArgs<ExtArgs>>): Prisma__UserDetailsScoreClient<$Result.GetResult<Prisma.$UserDetailsScorePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserDetailsScores.
     * @param {UserDetailsScoreDeleteManyArgs} args - Arguments to filter UserDetailsScores to delete.
     * @example
     * // Delete a few UserDetailsScores
     * const { count } = await prisma.userDetailsScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDetailsScoreDeleteManyArgs>(args?: SelectSubset<T, UserDetailsScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDetailsScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDetailsScores
     * const userDetailsScore = await prisma.userDetailsScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDetailsScoreUpdateManyArgs>(args: SelectSubset<T, UserDetailsScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserDetailsScore.
     * @param {UserDetailsScoreUpsertArgs} args - Arguments to update or create a UserDetailsScore.
     * @example
     * // Update or create a UserDetailsScore
     * const userDetailsScore = await prisma.userDetailsScore.upsert({
     *   create: {
     *     // ... data to create a UserDetailsScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDetailsScore we want to update
     *   }
     * })
     */
    upsert<T extends UserDetailsScoreUpsertArgs>(args: SelectSubset<T, UserDetailsScoreUpsertArgs<ExtArgs>>): Prisma__UserDetailsScoreClient<$Result.GetResult<Prisma.$UserDetailsScorePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserDetailsScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsScoreCountArgs} args - Arguments to filter UserDetailsScores to count.
     * @example
     * // Count the number of UserDetailsScores
     * const count = await prisma.userDetailsScore.count({
     *   where: {
     *     // ... the filter for the UserDetailsScores we want to count
     *   }
     * })
    **/
    count<T extends UserDetailsScoreCountArgs>(
      args?: Subset<T, UserDetailsScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDetailsScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDetailsScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserDetailsScoreAggregateArgs>(args: Subset<T, UserDetailsScoreAggregateArgs>): Prisma.PrismaPromise<GetUserDetailsScoreAggregateType<T>>

    /**
     * Group by UserDetailsScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsScoreGroupByArgs} args - Group by arguments.
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
      T extends UserDetailsScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDetailsScoreGroupByArgs['orderBy'] }
        : { orderBy?: UserDetailsScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserDetailsScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDetailsScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDetailsScore model
   */
  readonly fields: UserDetailsScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDetailsScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDetailsScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserDetailsScore model
   */ 
  interface UserDetailsScoreFieldRefs {
    readonly id: FieldRef<"UserDetailsScore", 'Int'>
    readonly userId: FieldRef<"UserDetailsScore", 'Int'>
    readonly quizId: FieldRef<"UserDetailsScore", 'Int'>
    readonly score: FieldRef<"UserDetailsScore", 'Int'>
    readonly createdAt: FieldRef<"UserDetailsScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserDetailsScore findUnique
   */
  export type UserDetailsScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetailsScore
     */
    select?: UserDetailsScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsScoreInclude<ExtArgs> | null
    /**
     * Filter, which UserDetailsScore to fetch.
     */
    where: UserDetailsScoreWhereUniqueInput
  }

  /**
   * UserDetailsScore findUniqueOrThrow
   */
  export type UserDetailsScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetailsScore
     */
    select?: UserDetailsScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsScoreInclude<ExtArgs> | null
    /**
     * Filter, which UserDetailsScore to fetch.
     */
    where: UserDetailsScoreWhereUniqueInput
  }

  /**
   * UserDetailsScore findFirst
   */
  export type UserDetailsScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetailsScore
     */
    select?: UserDetailsScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsScoreInclude<ExtArgs> | null
    /**
     * Filter, which UserDetailsScore to fetch.
     */
    where?: UserDetailsScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetailsScores to fetch.
     */
    orderBy?: UserDetailsScoreOrderByWithRelationInput | UserDetailsScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDetailsScores.
     */
    cursor?: UserDetailsScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetailsScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetailsScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDetailsScores.
     */
    distinct?: UserDetailsScoreScalarFieldEnum | UserDetailsScoreScalarFieldEnum[]
  }

  /**
   * UserDetailsScore findFirstOrThrow
   */
  export type UserDetailsScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetailsScore
     */
    select?: UserDetailsScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsScoreInclude<ExtArgs> | null
    /**
     * Filter, which UserDetailsScore to fetch.
     */
    where?: UserDetailsScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetailsScores to fetch.
     */
    orderBy?: UserDetailsScoreOrderByWithRelationInput | UserDetailsScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDetailsScores.
     */
    cursor?: UserDetailsScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetailsScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetailsScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDetailsScores.
     */
    distinct?: UserDetailsScoreScalarFieldEnum | UserDetailsScoreScalarFieldEnum[]
  }

  /**
   * UserDetailsScore findMany
   */
  export type UserDetailsScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetailsScore
     */
    select?: UserDetailsScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsScoreInclude<ExtArgs> | null
    /**
     * Filter, which UserDetailsScores to fetch.
     */
    where?: UserDetailsScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetailsScores to fetch.
     */
    orderBy?: UserDetailsScoreOrderByWithRelationInput | UserDetailsScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDetailsScores.
     */
    cursor?: UserDetailsScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetailsScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetailsScores.
     */
    skip?: number
    distinct?: UserDetailsScoreScalarFieldEnum | UserDetailsScoreScalarFieldEnum[]
  }

  /**
   * UserDetailsScore create
   */
  export type UserDetailsScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetailsScore
     */
    select?: UserDetailsScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDetailsScore.
     */
    data: XOR<UserDetailsScoreCreateInput, UserDetailsScoreUncheckedCreateInput>
  }

  /**
   * UserDetailsScore createMany
   */
  export type UserDetailsScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDetailsScores.
     */
    data: UserDetailsScoreCreateManyInput | UserDetailsScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDetailsScore createManyAndReturn
   */
  export type UserDetailsScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetailsScore
     */
    select?: UserDetailsScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserDetailsScores.
     */
    data: UserDetailsScoreCreateManyInput | UserDetailsScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDetailsScore update
   */
  export type UserDetailsScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetailsScore
     */
    select?: UserDetailsScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDetailsScore.
     */
    data: XOR<UserDetailsScoreUpdateInput, UserDetailsScoreUncheckedUpdateInput>
    /**
     * Choose, which UserDetailsScore to update.
     */
    where: UserDetailsScoreWhereUniqueInput
  }

  /**
   * UserDetailsScore updateMany
   */
  export type UserDetailsScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDetailsScores.
     */
    data: XOR<UserDetailsScoreUpdateManyMutationInput, UserDetailsScoreUncheckedUpdateManyInput>
    /**
     * Filter which UserDetailsScores to update
     */
    where?: UserDetailsScoreWhereInput
  }

  /**
   * UserDetailsScore upsert
   */
  export type UserDetailsScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetailsScore
     */
    select?: UserDetailsScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDetailsScore to update in case it exists.
     */
    where: UserDetailsScoreWhereUniqueInput
    /**
     * In case the UserDetailsScore found by the `where` argument doesn't exist, create a new UserDetailsScore with this data.
     */
    create: XOR<UserDetailsScoreCreateInput, UserDetailsScoreUncheckedCreateInput>
    /**
     * In case the UserDetailsScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDetailsScoreUpdateInput, UserDetailsScoreUncheckedUpdateInput>
  }

  /**
   * UserDetailsScore delete
   */
  export type UserDetailsScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetailsScore
     */
    select?: UserDetailsScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsScoreInclude<ExtArgs> | null
    /**
     * Filter which UserDetailsScore to delete.
     */
    where: UserDetailsScoreWhereUniqueInput
  }

  /**
   * UserDetailsScore deleteMany
   */
  export type UserDetailsScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDetailsScores to delete
     */
    where?: UserDetailsScoreWhereInput
  }

  /**
   * UserDetailsScore without action
   */
  export type UserDetailsScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetailsScore
     */
    select?: UserDetailsScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsScoreInclude<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsAvgAggregateOutputType = {
    id: number | null
  }

  export type NewsSumAggregateOutputType = {
    id: number | null
  }

  export type NewsMinAggregateOutputType = {
    id: number | null
    image: string | null
    heading: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: number | null
    image: string | null
    heading: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    image: number
    heading: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsAvgAggregateInputType = {
    id?: true
  }

  export type NewsSumAggregateInputType = {
    id?: true
  }

  export type NewsMinAggregateInputType = {
    id?: true
    image?: true
    heading?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    image?: true
    heading?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    image?: true
    heading?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _avg?: NewsAvgAggregateInputType
    _sum?: NewsSumAggregateInputType
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: number
    image: string
    heading: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    heading?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    heading?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    image?: boolean
    heading?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      heading: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the News model
   */ 
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'Int'>
    readonly image: FieldRef<"News", 'String'>
    readonly heading: FieldRef<"News", 'String'>
    readonly description: FieldRef<"News", 'String'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
    readonly updatedAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
  }


  /**
   * Model ShortcutKey
   */

  export type AggregateShortcutKey = {
    _count: ShortcutKeyCountAggregateOutputType | null
    _avg: ShortcutKeyAvgAggregateOutputType | null
    _sum: ShortcutKeySumAggregateOutputType | null
    _min: ShortcutKeyMinAggregateOutputType | null
    _max: ShortcutKeyMaxAggregateOutputType | null
  }

  export type ShortcutKeyAvgAggregateOutputType = {
    id: number | null
  }

  export type ShortcutKeySumAggregateOutputType = {
    id: number | null
  }

  export type ShortcutKeyMinAggregateOutputType = {
    id: number | null
    keyCombo: string | null
    description: string | null
    category: string | null
    createdAt: Date | null
  }

  export type ShortcutKeyMaxAggregateOutputType = {
    id: number | null
    keyCombo: string | null
    description: string | null
    category: string | null
    createdAt: Date | null
  }

  export type ShortcutKeyCountAggregateOutputType = {
    id: number
    keyCombo: number
    description: number
    category: number
    createdAt: number
    _all: number
  }


  export type ShortcutKeyAvgAggregateInputType = {
    id?: true
  }

  export type ShortcutKeySumAggregateInputType = {
    id?: true
  }

  export type ShortcutKeyMinAggregateInputType = {
    id?: true
    keyCombo?: true
    description?: true
    category?: true
    createdAt?: true
  }

  export type ShortcutKeyMaxAggregateInputType = {
    id?: true
    keyCombo?: true
    description?: true
    category?: true
    createdAt?: true
  }

  export type ShortcutKeyCountAggregateInputType = {
    id?: true
    keyCombo?: true
    description?: true
    category?: true
    createdAt?: true
    _all?: true
  }

  export type ShortcutKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShortcutKey to aggregate.
     */
    where?: ShortcutKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortcutKeys to fetch.
     */
    orderBy?: ShortcutKeyOrderByWithRelationInput | ShortcutKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShortcutKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortcutKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortcutKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShortcutKeys
    **/
    _count?: true | ShortcutKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShortcutKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShortcutKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShortcutKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShortcutKeyMaxAggregateInputType
  }

  export type GetShortcutKeyAggregateType<T extends ShortcutKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateShortcutKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShortcutKey[P]>
      : GetScalarType<T[P], AggregateShortcutKey[P]>
  }




  export type ShortcutKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShortcutKeyWhereInput
    orderBy?: ShortcutKeyOrderByWithAggregationInput | ShortcutKeyOrderByWithAggregationInput[]
    by: ShortcutKeyScalarFieldEnum[] | ShortcutKeyScalarFieldEnum
    having?: ShortcutKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShortcutKeyCountAggregateInputType | true
    _avg?: ShortcutKeyAvgAggregateInputType
    _sum?: ShortcutKeySumAggregateInputType
    _min?: ShortcutKeyMinAggregateInputType
    _max?: ShortcutKeyMaxAggregateInputType
  }

  export type ShortcutKeyGroupByOutputType = {
    id: number
    keyCombo: string
    description: string
    category: string | null
    createdAt: Date
    _count: ShortcutKeyCountAggregateOutputType | null
    _avg: ShortcutKeyAvgAggregateOutputType | null
    _sum: ShortcutKeySumAggregateOutputType | null
    _min: ShortcutKeyMinAggregateOutputType | null
    _max: ShortcutKeyMaxAggregateOutputType | null
  }

  type GetShortcutKeyGroupByPayload<T extends ShortcutKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShortcutKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShortcutKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShortcutKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ShortcutKeyGroupByOutputType[P]>
        }
      >
    >


  export type ShortcutKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyCombo?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shortcutKey"]>

  export type ShortcutKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyCombo?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["shortcutKey"]>

  export type ShortcutKeySelectScalar = {
    id?: boolean
    keyCombo?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
  }


  export type $ShortcutKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShortcutKey"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keyCombo: string
      description: string
      category: string | null
      createdAt: Date
    }, ExtArgs["result"]["shortcutKey"]>
    composites: {}
  }

  type ShortcutKeyGetPayload<S extends boolean | null | undefined | ShortcutKeyDefaultArgs> = $Result.GetResult<Prisma.$ShortcutKeyPayload, S>

  type ShortcutKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShortcutKeyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShortcutKeyCountAggregateInputType | true
    }

  export interface ShortcutKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShortcutKey'], meta: { name: 'ShortcutKey' } }
    /**
     * Find zero or one ShortcutKey that matches the filter.
     * @param {ShortcutKeyFindUniqueArgs} args - Arguments to find a ShortcutKey
     * @example
     * // Get one ShortcutKey
     * const shortcutKey = await prisma.shortcutKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShortcutKeyFindUniqueArgs>(args: SelectSubset<T, ShortcutKeyFindUniqueArgs<ExtArgs>>): Prisma__ShortcutKeyClient<$Result.GetResult<Prisma.$ShortcutKeyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ShortcutKey that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ShortcutKeyFindUniqueOrThrowArgs} args - Arguments to find a ShortcutKey
     * @example
     * // Get one ShortcutKey
     * const shortcutKey = await prisma.shortcutKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShortcutKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ShortcutKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShortcutKeyClient<$Result.GetResult<Prisma.$ShortcutKeyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ShortcutKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortcutKeyFindFirstArgs} args - Arguments to find a ShortcutKey
     * @example
     * // Get one ShortcutKey
     * const shortcutKey = await prisma.shortcutKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShortcutKeyFindFirstArgs>(args?: SelectSubset<T, ShortcutKeyFindFirstArgs<ExtArgs>>): Prisma__ShortcutKeyClient<$Result.GetResult<Prisma.$ShortcutKeyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ShortcutKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortcutKeyFindFirstOrThrowArgs} args - Arguments to find a ShortcutKey
     * @example
     * // Get one ShortcutKey
     * const shortcutKey = await prisma.shortcutKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShortcutKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ShortcutKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShortcutKeyClient<$Result.GetResult<Prisma.$ShortcutKeyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ShortcutKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortcutKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShortcutKeys
     * const shortcutKeys = await prisma.shortcutKey.findMany()
     * 
     * // Get first 10 ShortcutKeys
     * const shortcutKeys = await prisma.shortcutKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shortcutKeyWithIdOnly = await prisma.shortcutKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShortcutKeyFindManyArgs>(args?: SelectSubset<T, ShortcutKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortcutKeyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ShortcutKey.
     * @param {ShortcutKeyCreateArgs} args - Arguments to create a ShortcutKey.
     * @example
     * // Create one ShortcutKey
     * const ShortcutKey = await prisma.shortcutKey.create({
     *   data: {
     *     // ... data to create a ShortcutKey
     *   }
     * })
     * 
     */
    create<T extends ShortcutKeyCreateArgs>(args: SelectSubset<T, ShortcutKeyCreateArgs<ExtArgs>>): Prisma__ShortcutKeyClient<$Result.GetResult<Prisma.$ShortcutKeyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ShortcutKeys.
     * @param {ShortcutKeyCreateManyArgs} args - Arguments to create many ShortcutKeys.
     * @example
     * // Create many ShortcutKeys
     * const shortcutKey = await prisma.shortcutKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShortcutKeyCreateManyArgs>(args?: SelectSubset<T, ShortcutKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShortcutKeys and returns the data saved in the database.
     * @param {ShortcutKeyCreateManyAndReturnArgs} args - Arguments to create many ShortcutKeys.
     * @example
     * // Create many ShortcutKeys
     * const shortcutKey = await prisma.shortcutKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShortcutKeys and only return the `id`
     * const shortcutKeyWithIdOnly = await prisma.shortcutKey.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShortcutKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ShortcutKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortcutKeyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ShortcutKey.
     * @param {ShortcutKeyDeleteArgs} args - Arguments to delete one ShortcutKey.
     * @example
     * // Delete one ShortcutKey
     * const ShortcutKey = await prisma.shortcutKey.delete({
     *   where: {
     *     // ... filter to delete one ShortcutKey
     *   }
     * })
     * 
     */
    delete<T extends ShortcutKeyDeleteArgs>(args: SelectSubset<T, ShortcutKeyDeleteArgs<ExtArgs>>): Prisma__ShortcutKeyClient<$Result.GetResult<Prisma.$ShortcutKeyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ShortcutKey.
     * @param {ShortcutKeyUpdateArgs} args - Arguments to update one ShortcutKey.
     * @example
     * // Update one ShortcutKey
     * const shortcutKey = await prisma.shortcutKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShortcutKeyUpdateArgs>(args: SelectSubset<T, ShortcutKeyUpdateArgs<ExtArgs>>): Prisma__ShortcutKeyClient<$Result.GetResult<Prisma.$ShortcutKeyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ShortcutKeys.
     * @param {ShortcutKeyDeleteManyArgs} args - Arguments to filter ShortcutKeys to delete.
     * @example
     * // Delete a few ShortcutKeys
     * const { count } = await prisma.shortcutKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShortcutKeyDeleteManyArgs>(args?: SelectSubset<T, ShortcutKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShortcutKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortcutKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShortcutKeys
     * const shortcutKey = await prisma.shortcutKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShortcutKeyUpdateManyArgs>(args: SelectSubset<T, ShortcutKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShortcutKey.
     * @param {ShortcutKeyUpsertArgs} args - Arguments to update or create a ShortcutKey.
     * @example
     * // Update or create a ShortcutKey
     * const shortcutKey = await prisma.shortcutKey.upsert({
     *   create: {
     *     // ... data to create a ShortcutKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShortcutKey we want to update
     *   }
     * })
     */
    upsert<T extends ShortcutKeyUpsertArgs>(args: SelectSubset<T, ShortcutKeyUpsertArgs<ExtArgs>>): Prisma__ShortcutKeyClient<$Result.GetResult<Prisma.$ShortcutKeyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ShortcutKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortcutKeyCountArgs} args - Arguments to filter ShortcutKeys to count.
     * @example
     * // Count the number of ShortcutKeys
     * const count = await prisma.shortcutKey.count({
     *   where: {
     *     // ... the filter for the ShortcutKeys we want to count
     *   }
     * })
    **/
    count<T extends ShortcutKeyCountArgs>(
      args?: Subset<T, ShortcutKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShortcutKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShortcutKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortcutKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShortcutKeyAggregateArgs>(args: Subset<T, ShortcutKeyAggregateArgs>): Prisma.PrismaPromise<GetShortcutKeyAggregateType<T>>

    /**
     * Group by ShortcutKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortcutKeyGroupByArgs} args - Group by arguments.
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
      T extends ShortcutKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShortcutKeyGroupByArgs['orderBy'] }
        : { orderBy?: ShortcutKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShortcutKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShortcutKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShortcutKey model
   */
  readonly fields: ShortcutKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShortcutKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShortcutKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ShortcutKey model
   */ 
  interface ShortcutKeyFieldRefs {
    readonly id: FieldRef<"ShortcutKey", 'Int'>
    readonly keyCombo: FieldRef<"ShortcutKey", 'String'>
    readonly description: FieldRef<"ShortcutKey", 'String'>
    readonly category: FieldRef<"ShortcutKey", 'String'>
    readonly createdAt: FieldRef<"ShortcutKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShortcutKey findUnique
   */
  export type ShortcutKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortcutKey
     */
    select?: ShortcutKeySelect<ExtArgs> | null
    /**
     * Filter, which ShortcutKey to fetch.
     */
    where: ShortcutKeyWhereUniqueInput
  }

  /**
   * ShortcutKey findUniqueOrThrow
   */
  export type ShortcutKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortcutKey
     */
    select?: ShortcutKeySelect<ExtArgs> | null
    /**
     * Filter, which ShortcutKey to fetch.
     */
    where: ShortcutKeyWhereUniqueInput
  }

  /**
   * ShortcutKey findFirst
   */
  export type ShortcutKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortcutKey
     */
    select?: ShortcutKeySelect<ExtArgs> | null
    /**
     * Filter, which ShortcutKey to fetch.
     */
    where?: ShortcutKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortcutKeys to fetch.
     */
    orderBy?: ShortcutKeyOrderByWithRelationInput | ShortcutKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShortcutKeys.
     */
    cursor?: ShortcutKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortcutKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortcutKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShortcutKeys.
     */
    distinct?: ShortcutKeyScalarFieldEnum | ShortcutKeyScalarFieldEnum[]
  }

  /**
   * ShortcutKey findFirstOrThrow
   */
  export type ShortcutKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortcutKey
     */
    select?: ShortcutKeySelect<ExtArgs> | null
    /**
     * Filter, which ShortcutKey to fetch.
     */
    where?: ShortcutKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortcutKeys to fetch.
     */
    orderBy?: ShortcutKeyOrderByWithRelationInput | ShortcutKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShortcutKeys.
     */
    cursor?: ShortcutKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortcutKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortcutKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShortcutKeys.
     */
    distinct?: ShortcutKeyScalarFieldEnum | ShortcutKeyScalarFieldEnum[]
  }

  /**
   * ShortcutKey findMany
   */
  export type ShortcutKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortcutKey
     */
    select?: ShortcutKeySelect<ExtArgs> | null
    /**
     * Filter, which ShortcutKeys to fetch.
     */
    where?: ShortcutKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortcutKeys to fetch.
     */
    orderBy?: ShortcutKeyOrderByWithRelationInput | ShortcutKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShortcutKeys.
     */
    cursor?: ShortcutKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortcutKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortcutKeys.
     */
    skip?: number
    distinct?: ShortcutKeyScalarFieldEnum | ShortcutKeyScalarFieldEnum[]
  }

  /**
   * ShortcutKey create
   */
  export type ShortcutKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortcutKey
     */
    select?: ShortcutKeySelect<ExtArgs> | null
    /**
     * The data needed to create a ShortcutKey.
     */
    data: XOR<ShortcutKeyCreateInput, ShortcutKeyUncheckedCreateInput>
  }

  /**
   * ShortcutKey createMany
   */
  export type ShortcutKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShortcutKeys.
     */
    data: ShortcutKeyCreateManyInput | ShortcutKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShortcutKey createManyAndReturn
   */
  export type ShortcutKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortcutKey
     */
    select?: ShortcutKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ShortcutKeys.
     */
    data: ShortcutKeyCreateManyInput | ShortcutKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShortcutKey update
   */
  export type ShortcutKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortcutKey
     */
    select?: ShortcutKeySelect<ExtArgs> | null
    /**
     * The data needed to update a ShortcutKey.
     */
    data: XOR<ShortcutKeyUpdateInput, ShortcutKeyUncheckedUpdateInput>
    /**
     * Choose, which ShortcutKey to update.
     */
    where: ShortcutKeyWhereUniqueInput
  }

  /**
   * ShortcutKey updateMany
   */
  export type ShortcutKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShortcutKeys.
     */
    data: XOR<ShortcutKeyUpdateManyMutationInput, ShortcutKeyUncheckedUpdateManyInput>
    /**
     * Filter which ShortcutKeys to update
     */
    where?: ShortcutKeyWhereInput
  }

  /**
   * ShortcutKey upsert
   */
  export type ShortcutKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortcutKey
     */
    select?: ShortcutKeySelect<ExtArgs> | null
    /**
     * The filter to search for the ShortcutKey to update in case it exists.
     */
    where: ShortcutKeyWhereUniqueInput
    /**
     * In case the ShortcutKey found by the `where` argument doesn't exist, create a new ShortcutKey with this data.
     */
    create: XOR<ShortcutKeyCreateInput, ShortcutKeyUncheckedCreateInput>
    /**
     * In case the ShortcutKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShortcutKeyUpdateInput, ShortcutKeyUncheckedUpdateInput>
  }

  /**
   * ShortcutKey delete
   */
  export type ShortcutKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortcutKey
     */
    select?: ShortcutKeySelect<ExtArgs> | null
    /**
     * Filter which ShortcutKey to delete.
     */
    where: ShortcutKeyWhereUniqueInput
  }

  /**
   * ShortcutKey deleteMany
   */
  export type ShortcutKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShortcutKeys to delete
     */
    where?: ShortcutKeyWhereInput
  }

  /**
   * ShortcutKey without action
   */
  export type ShortcutKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortcutKey
     */
    select?: ShortcutKeySelect<ExtArgs> | null
  }


  /**
   * Model FullForm
   */

  export type AggregateFullForm = {
    _count: FullFormCountAggregateOutputType | null
    _avg: FullFormAvgAggregateOutputType | null
    _sum: FullFormSumAggregateOutputType | null
    _min: FullFormMinAggregateOutputType | null
    _max: FullFormMaxAggregateOutputType | null
  }

  export type FullFormAvgAggregateOutputType = {
    id: number | null
  }

  export type FullFormSumAggregateOutputType = {
    id: number | null
  }

  export type FullFormMinAggregateOutputType = {
    id: number | null
    acronym: string | null
    fullForm: string | null
    description: string | null
    createdAt: Date | null
  }

  export type FullFormMaxAggregateOutputType = {
    id: number | null
    acronym: string | null
    fullForm: string | null
    description: string | null
    createdAt: Date | null
  }

  export type FullFormCountAggregateOutputType = {
    id: number
    acronym: number
    fullForm: number
    description: number
    createdAt: number
    _all: number
  }


  export type FullFormAvgAggregateInputType = {
    id?: true
  }

  export type FullFormSumAggregateInputType = {
    id?: true
  }

  export type FullFormMinAggregateInputType = {
    id?: true
    acronym?: true
    fullForm?: true
    description?: true
    createdAt?: true
  }

  export type FullFormMaxAggregateInputType = {
    id?: true
    acronym?: true
    fullForm?: true
    description?: true
    createdAt?: true
  }

  export type FullFormCountAggregateInputType = {
    id?: true
    acronym?: true
    fullForm?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type FullFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FullForm to aggregate.
     */
    where?: FullFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FullForms to fetch.
     */
    orderBy?: FullFormOrderByWithRelationInput | FullFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FullFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FullForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FullForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FullForms
    **/
    _count?: true | FullFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FullFormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FullFormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FullFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FullFormMaxAggregateInputType
  }

  export type GetFullFormAggregateType<T extends FullFormAggregateArgs> = {
        [P in keyof T & keyof AggregateFullForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFullForm[P]>
      : GetScalarType<T[P], AggregateFullForm[P]>
  }




  export type FullFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FullFormWhereInput
    orderBy?: FullFormOrderByWithAggregationInput | FullFormOrderByWithAggregationInput[]
    by: FullFormScalarFieldEnum[] | FullFormScalarFieldEnum
    having?: FullFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FullFormCountAggregateInputType | true
    _avg?: FullFormAvgAggregateInputType
    _sum?: FullFormSumAggregateInputType
    _min?: FullFormMinAggregateInputType
    _max?: FullFormMaxAggregateInputType
  }

  export type FullFormGroupByOutputType = {
    id: number
    acronym: string
    fullForm: string
    description: string | null
    createdAt: Date
    _count: FullFormCountAggregateOutputType | null
    _avg: FullFormAvgAggregateOutputType | null
    _sum: FullFormSumAggregateOutputType | null
    _min: FullFormMinAggregateOutputType | null
    _max: FullFormMaxAggregateOutputType | null
  }

  type GetFullFormGroupByPayload<T extends FullFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FullFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FullFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FullFormGroupByOutputType[P]>
            : GetScalarType<T[P], FullFormGroupByOutputType[P]>
        }
      >
    >


  export type FullFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    acronym?: boolean
    fullForm?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fullForm"]>

  export type FullFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    acronym?: boolean
    fullForm?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fullForm"]>

  export type FullFormSelectScalar = {
    id?: boolean
    acronym?: boolean
    fullForm?: boolean
    description?: boolean
    createdAt?: boolean
  }


  export type $FullFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FullForm"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      acronym: string
      fullForm: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["fullForm"]>
    composites: {}
  }

  type FullFormGetPayload<S extends boolean | null | undefined | FullFormDefaultArgs> = $Result.GetResult<Prisma.$FullFormPayload, S>

  type FullFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FullFormFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FullFormCountAggregateInputType | true
    }

  export interface FullFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FullForm'], meta: { name: 'FullForm' } }
    /**
     * Find zero or one FullForm that matches the filter.
     * @param {FullFormFindUniqueArgs} args - Arguments to find a FullForm
     * @example
     * // Get one FullForm
     * const fullForm = await prisma.fullForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FullFormFindUniqueArgs>(args: SelectSubset<T, FullFormFindUniqueArgs<ExtArgs>>): Prisma__FullFormClient<$Result.GetResult<Prisma.$FullFormPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FullForm that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FullFormFindUniqueOrThrowArgs} args - Arguments to find a FullForm
     * @example
     * // Get one FullForm
     * const fullForm = await prisma.fullForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FullFormFindUniqueOrThrowArgs>(args: SelectSubset<T, FullFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FullFormClient<$Result.GetResult<Prisma.$FullFormPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FullForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FullFormFindFirstArgs} args - Arguments to find a FullForm
     * @example
     * // Get one FullForm
     * const fullForm = await prisma.fullForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FullFormFindFirstArgs>(args?: SelectSubset<T, FullFormFindFirstArgs<ExtArgs>>): Prisma__FullFormClient<$Result.GetResult<Prisma.$FullFormPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FullForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FullFormFindFirstOrThrowArgs} args - Arguments to find a FullForm
     * @example
     * // Get one FullForm
     * const fullForm = await prisma.fullForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FullFormFindFirstOrThrowArgs>(args?: SelectSubset<T, FullFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__FullFormClient<$Result.GetResult<Prisma.$FullFormPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FullForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FullFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FullForms
     * const fullForms = await prisma.fullForm.findMany()
     * 
     * // Get first 10 FullForms
     * const fullForms = await prisma.fullForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fullFormWithIdOnly = await prisma.fullForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FullFormFindManyArgs>(args?: SelectSubset<T, FullFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FullFormPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FullForm.
     * @param {FullFormCreateArgs} args - Arguments to create a FullForm.
     * @example
     * // Create one FullForm
     * const FullForm = await prisma.fullForm.create({
     *   data: {
     *     // ... data to create a FullForm
     *   }
     * })
     * 
     */
    create<T extends FullFormCreateArgs>(args: SelectSubset<T, FullFormCreateArgs<ExtArgs>>): Prisma__FullFormClient<$Result.GetResult<Prisma.$FullFormPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FullForms.
     * @param {FullFormCreateManyArgs} args - Arguments to create many FullForms.
     * @example
     * // Create many FullForms
     * const fullForm = await prisma.fullForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FullFormCreateManyArgs>(args?: SelectSubset<T, FullFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FullForms and returns the data saved in the database.
     * @param {FullFormCreateManyAndReturnArgs} args - Arguments to create many FullForms.
     * @example
     * // Create many FullForms
     * const fullForm = await prisma.fullForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FullForms and only return the `id`
     * const fullFormWithIdOnly = await prisma.fullForm.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FullFormCreateManyAndReturnArgs>(args?: SelectSubset<T, FullFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FullFormPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FullForm.
     * @param {FullFormDeleteArgs} args - Arguments to delete one FullForm.
     * @example
     * // Delete one FullForm
     * const FullForm = await prisma.fullForm.delete({
     *   where: {
     *     // ... filter to delete one FullForm
     *   }
     * })
     * 
     */
    delete<T extends FullFormDeleteArgs>(args: SelectSubset<T, FullFormDeleteArgs<ExtArgs>>): Prisma__FullFormClient<$Result.GetResult<Prisma.$FullFormPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FullForm.
     * @param {FullFormUpdateArgs} args - Arguments to update one FullForm.
     * @example
     * // Update one FullForm
     * const fullForm = await prisma.fullForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FullFormUpdateArgs>(args: SelectSubset<T, FullFormUpdateArgs<ExtArgs>>): Prisma__FullFormClient<$Result.GetResult<Prisma.$FullFormPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FullForms.
     * @param {FullFormDeleteManyArgs} args - Arguments to filter FullForms to delete.
     * @example
     * // Delete a few FullForms
     * const { count } = await prisma.fullForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FullFormDeleteManyArgs>(args?: SelectSubset<T, FullFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FullForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FullFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FullForms
     * const fullForm = await prisma.fullForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FullFormUpdateManyArgs>(args: SelectSubset<T, FullFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FullForm.
     * @param {FullFormUpsertArgs} args - Arguments to update or create a FullForm.
     * @example
     * // Update or create a FullForm
     * const fullForm = await prisma.fullForm.upsert({
     *   create: {
     *     // ... data to create a FullForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FullForm we want to update
     *   }
     * })
     */
    upsert<T extends FullFormUpsertArgs>(args: SelectSubset<T, FullFormUpsertArgs<ExtArgs>>): Prisma__FullFormClient<$Result.GetResult<Prisma.$FullFormPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FullForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FullFormCountArgs} args - Arguments to filter FullForms to count.
     * @example
     * // Count the number of FullForms
     * const count = await prisma.fullForm.count({
     *   where: {
     *     // ... the filter for the FullForms we want to count
     *   }
     * })
    **/
    count<T extends FullFormCountArgs>(
      args?: Subset<T, FullFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FullFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FullForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FullFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FullFormAggregateArgs>(args: Subset<T, FullFormAggregateArgs>): Prisma.PrismaPromise<GetFullFormAggregateType<T>>

    /**
     * Group by FullForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FullFormGroupByArgs} args - Group by arguments.
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
      T extends FullFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FullFormGroupByArgs['orderBy'] }
        : { orderBy?: FullFormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FullFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFullFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FullForm model
   */
  readonly fields: FullFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FullForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FullFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the FullForm model
   */ 
  interface FullFormFieldRefs {
    readonly id: FieldRef<"FullForm", 'Int'>
    readonly acronym: FieldRef<"FullForm", 'String'>
    readonly fullForm: FieldRef<"FullForm", 'String'>
    readonly description: FieldRef<"FullForm", 'String'>
    readonly createdAt: FieldRef<"FullForm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FullForm findUnique
   */
  export type FullFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullForm
     */
    select?: FullFormSelect<ExtArgs> | null
    /**
     * Filter, which FullForm to fetch.
     */
    where: FullFormWhereUniqueInput
  }

  /**
   * FullForm findUniqueOrThrow
   */
  export type FullFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullForm
     */
    select?: FullFormSelect<ExtArgs> | null
    /**
     * Filter, which FullForm to fetch.
     */
    where: FullFormWhereUniqueInput
  }

  /**
   * FullForm findFirst
   */
  export type FullFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullForm
     */
    select?: FullFormSelect<ExtArgs> | null
    /**
     * Filter, which FullForm to fetch.
     */
    where?: FullFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FullForms to fetch.
     */
    orderBy?: FullFormOrderByWithRelationInput | FullFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FullForms.
     */
    cursor?: FullFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FullForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FullForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FullForms.
     */
    distinct?: FullFormScalarFieldEnum | FullFormScalarFieldEnum[]
  }

  /**
   * FullForm findFirstOrThrow
   */
  export type FullFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullForm
     */
    select?: FullFormSelect<ExtArgs> | null
    /**
     * Filter, which FullForm to fetch.
     */
    where?: FullFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FullForms to fetch.
     */
    orderBy?: FullFormOrderByWithRelationInput | FullFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FullForms.
     */
    cursor?: FullFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FullForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FullForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FullForms.
     */
    distinct?: FullFormScalarFieldEnum | FullFormScalarFieldEnum[]
  }

  /**
   * FullForm findMany
   */
  export type FullFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullForm
     */
    select?: FullFormSelect<ExtArgs> | null
    /**
     * Filter, which FullForms to fetch.
     */
    where?: FullFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FullForms to fetch.
     */
    orderBy?: FullFormOrderByWithRelationInput | FullFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FullForms.
     */
    cursor?: FullFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FullForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FullForms.
     */
    skip?: number
    distinct?: FullFormScalarFieldEnum | FullFormScalarFieldEnum[]
  }

  /**
   * FullForm create
   */
  export type FullFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullForm
     */
    select?: FullFormSelect<ExtArgs> | null
    /**
     * The data needed to create a FullForm.
     */
    data: XOR<FullFormCreateInput, FullFormUncheckedCreateInput>
  }

  /**
   * FullForm createMany
   */
  export type FullFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FullForms.
     */
    data: FullFormCreateManyInput | FullFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FullForm createManyAndReturn
   */
  export type FullFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullForm
     */
    select?: FullFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FullForms.
     */
    data: FullFormCreateManyInput | FullFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FullForm update
   */
  export type FullFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullForm
     */
    select?: FullFormSelect<ExtArgs> | null
    /**
     * The data needed to update a FullForm.
     */
    data: XOR<FullFormUpdateInput, FullFormUncheckedUpdateInput>
    /**
     * Choose, which FullForm to update.
     */
    where: FullFormWhereUniqueInput
  }

  /**
   * FullForm updateMany
   */
  export type FullFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FullForms.
     */
    data: XOR<FullFormUpdateManyMutationInput, FullFormUncheckedUpdateManyInput>
    /**
     * Filter which FullForms to update
     */
    where?: FullFormWhereInput
  }

  /**
   * FullForm upsert
   */
  export type FullFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullForm
     */
    select?: FullFormSelect<ExtArgs> | null
    /**
     * The filter to search for the FullForm to update in case it exists.
     */
    where: FullFormWhereUniqueInput
    /**
     * In case the FullForm found by the `where` argument doesn't exist, create a new FullForm with this data.
     */
    create: XOR<FullFormCreateInput, FullFormUncheckedCreateInput>
    /**
     * In case the FullForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FullFormUpdateInput, FullFormUncheckedUpdateInput>
  }

  /**
   * FullForm delete
   */
  export type FullFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullForm
     */
    select?: FullFormSelect<ExtArgs> | null
    /**
     * Filter which FullForm to delete.
     */
    where: FullFormWhereUniqueInput
  }

  /**
   * FullForm deleteMany
   */
  export type FullFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FullForms to delete
     */
    where?: FullFormWhereInput
  }

  /**
   * FullForm without action
   */
  export type FullFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FullForm
     */
    select?: FullFormSelect<ExtArgs> | null
  }


  /**
   * Model SubjectiveQuestion
   */

  export type AggregateSubjectiveQuestion = {
    _count: SubjectiveQuestionCountAggregateOutputType | null
    _avg: SubjectiveQuestionAvgAggregateOutputType | null
    _sum: SubjectiveQuestionSumAggregateOutputType | null
    _min: SubjectiveQuestionMinAggregateOutputType | null
    _max: SubjectiveQuestionMaxAggregateOutputType | null
  }

  export type SubjectiveQuestionAvgAggregateOutputType = {
    id: number | null
  }

  export type SubjectiveQuestionSumAggregateOutputType = {
    id: number | null
  }

  export type SubjectiveQuestionMinAggregateOutputType = {
    id: number | null
    question: string | null
    answer: string | null
    category: string | null
    category2: string | null
    createdAt: Date | null
  }

  export type SubjectiveQuestionMaxAggregateOutputType = {
    id: number | null
    question: string | null
    answer: string | null
    category: string | null
    category2: string | null
    createdAt: Date | null
  }

  export type SubjectiveQuestionCountAggregateOutputType = {
    id: number
    question: number
    answer: number
    category: number
    category2: number
    createdAt: number
    _all: number
  }


  export type SubjectiveQuestionAvgAggregateInputType = {
    id?: true
  }

  export type SubjectiveQuestionSumAggregateInputType = {
    id?: true
  }

  export type SubjectiveQuestionMinAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    category?: true
    category2?: true
    createdAt?: true
  }

  export type SubjectiveQuestionMaxAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    category?: true
    category2?: true
    createdAt?: true
  }

  export type SubjectiveQuestionCountAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    category?: true
    category2?: true
    createdAt?: true
    _all?: true
  }

  export type SubjectiveQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectiveQuestion to aggregate.
     */
    where?: SubjectiveQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectiveQuestions to fetch.
     */
    orderBy?: SubjectiveQuestionOrderByWithRelationInput | SubjectiveQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectiveQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectiveQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectiveQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubjectiveQuestions
    **/
    _count?: true | SubjectiveQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectiveQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectiveQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectiveQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectiveQuestionMaxAggregateInputType
  }

  export type GetSubjectiveQuestionAggregateType<T extends SubjectiveQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubjectiveQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubjectiveQuestion[P]>
      : GetScalarType<T[P], AggregateSubjectiveQuestion[P]>
  }




  export type SubjectiveQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectiveQuestionWhereInput
    orderBy?: SubjectiveQuestionOrderByWithAggregationInput | SubjectiveQuestionOrderByWithAggregationInput[]
    by: SubjectiveQuestionScalarFieldEnum[] | SubjectiveQuestionScalarFieldEnum
    having?: SubjectiveQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectiveQuestionCountAggregateInputType | true
    _avg?: SubjectiveQuestionAvgAggregateInputType
    _sum?: SubjectiveQuestionSumAggregateInputType
    _min?: SubjectiveQuestionMinAggregateInputType
    _max?: SubjectiveQuestionMaxAggregateInputType
  }

  export type SubjectiveQuestionGroupByOutputType = {
    id: number
    question: string
    answer: string
    category: string | null
    category2: string
    createdAt: Date
    _count: SubjectiveQuestionCountAggregateOutputType | null
    _avg: SubjectiveQuestionAvgAggregateOutputType | null
    _sum: SubjectiveQuestionSumAggregateOutputType | null
    _min: SubjectiveQuestionMinAggregateOutputType | null
    _max: SubjectiveQuestionMaxAggregateOutputType | null
  }

  type GetSubjectiveQuestionGroupByPayload<T extends SubjectiveQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectiveQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectiveQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectiveQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectiveQuestionGroupByOutputType[P]>
        }
      >
    >


  export type SubjectiveQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    category?: boolean
    category2?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["subjectiveQuestion"]>

  export type SubjectiveQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    category?: boolean
    category2?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["subjectiveQuestion"]>

  export type SubjectiveQuestionSelectScalar = {
    id?: boolean
    question?: boolean
    answer?: boolean
    category?: boolean
    category2?: boolean
    createdAt?: boolean
  }


  export type $SubjectiveQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubjectiveQuestion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question: string
      answer: string
      category: string | null
      category2: string
      createdAt: Date
    }, ExtArgs["result"]["subjectiveQuestion"]>
    composites: {}
  }

  type SubjectiveQuestionGetPayload<S extends boolean | null | undefined | SubjectiveQuestionDefaultArgs> = $Result.GetResult<Prisma.$SubjectiveQuestionPayload, S>

  type SubjectiveQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubjectiveQuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubjectiveQuestionCountAggregateInputType | true
    }

  export interface SubjectiveQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubjectiveQuestion'], meta: { name: 'SubjectiveQuestion' } }
    /**
     * Find zero or one SubjectiveQuestion that matches the filter.
     * @param {SubjectiveQuestionFindUniqueArgs} args - Arguments to find a SubjectiveQuestion
     * @example
     * // Get one SubjectiveQuestion
     * const subjectiveQuestion = await prisma.subjectiveQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectiveQuestionFindUniqueArgs>(args: SelectSubset<T, SubjectiveQuestionFindUniqueArgs<ExtArgs>>): Prisma__SubjectiveQuestionClient<$Result.GetResult<Prisma.$SubjectiveQuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SubjectiveQuestion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubjectiveQuestionFindUniqueOrThrowArgs} args - Arguments to find a SubjectiveQuestion
     * @example
     * // Get one SubjectiveQuestion
     * const subjectiveQuestion = await prisma.subjectiveQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectiveQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectiveQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectiveQuestionClient<$Result.GetResult<Prisma.$SubjectiveQuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SubjectiveQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectiveQuestionFindFirstArgs} args - Arguments to find a SubjectiveQuestion
     * @example
     * // Get one SubjectiveQuestion
     * const subjectiveQuestion = await prisma.subjectiveQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectiveQuestionFindFirstArgs>(args?: SelectSubset<T, SubjectiveQuestionFindFirstArgs<ExtArgs>>): Prisma__SubjectiveQuestionClient<$Result.GetResult<Prisma.$SubjectiveQuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SubjectiveQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectiveQuestionFindFirstOrThrowArgs} args - Arguments to find a SubjectiveQuestion
     * @example
     * // Get one SubjectiveQuestion
     * const subjectiveQuestion = await prisma.subjectiveQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectiveQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectiveQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectiveQuestionClient<$Result.GetResult<Prisma.$SubjectiveQuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SubjectiveQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectiveQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubjectiveQuestions
     * const subjectiveQuestions = await prisma.subjectiveQuestion.findMany()
     * 
     * // Get first 10 SubjectiveQuestions
     * const subjectiveQuestions = await prisma.subjectiveQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectiveQuestionWithIdOnly = await prisma.subjectiveQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectiveQuestionFindManyArgs>(args?: SelectSubset<T, SubjectiveQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectiveQuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SubjectiveQuestion.
     * @param {SubjectiveQuestionCreateArgs} args - Arguments to create a SubjectiveQuestion.
     * @example
     * // Create one SubjectiveQuestion
     * const SubjectiveQuestion = await prisma.subjectiveQuestion.create({
     *   data: {
     *     // ... data to create a SubjectiveQuestion
     *   }
     * })
     * 
     */
    create<T extends SubjectiveQuestionCreateArgs>(args: SelectSubset<T, SubjectiveQuestionCreateArgs<ExtArgs>>): Prisma__SubjectiveQuestionClient<$Result.GetResult<Prisma.$SubjectiveQuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SubjectiveQuestions.
     * @param {SubjectiveQuestionCreateManyArgs} args - Arguments to create many SubjectiveQuestions.
     * @example
     * // Create many SubjectiveQuestions
     * const subjectiveQuestion = await prisma.subjectiveQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectiveQuestionCreateManyArgs>(args?: SelectSubset<T, SubjectiveQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubjectiveQuestions and returns the data saved in the database.
     * @param {SubjectiveQuestionCreateManyAndReturnArgs} args - Arguments to create many SubjectiveQuestions.
     * @example
     * // Create many SubjectiveQuestions
     * const subjectiveQuestion = await prisma.subjectiveQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubjectiveQuestions and only return the `id`
     * const subjectiveQuestionWithIdOnly = await prisma.subjectiveQuestion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectiveQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectiveQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectiveQuestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SubjectiveQuestion.
     * @param {SubjectiveQuestionDeleteArgs} args - Arguments to delete one SubjectiveQuestion.
     * @example
     * // Delete one SubjectiveQuestion
     * const SubjectiveQuestion = await prisma.subjectiveQuestion.delete({
     *   where: {
     *     // ... filter to delete one SubjectiveQuestion
     *   }
     * })
     * 
     */
    delete<T extends SubjectiveQuestionDeleteArgs>(args: SelectSubset<T, SubjectiveQuestionDeleteArgs<ExtArgs>>): Prisma__SubjectiveQuestionClient<$Result.GetResult<Prisma.$SubjectiveQuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SubjectiveQuestion.
     * @param {SubjectiveQuestionUpdateArgs} args - Arguments to update one SubjectiveQuestion.
     * @example
     * // Update one SubjectiveQuestion
     * const subjectiveQuestion = await prisma.subjectiveQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectiveQuestionUpdateArgs>(args: SelectSubset<T, SubjectiveQuestionUpdateArgs<ExtArgs>>): Prisma__SubjectiveQuestionClient<$Result.GetResult<Prisma.$SubjectiveQuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SubjectiveQuestions.
     * @param {SubjectiveQuestionDeleteManyArgs} args - Arguments to filter SubjectiveQuestions to delete.
     * @example
     * // Delete a few SubjectiveQuestions
     * const { count } = await prisma.subjectiveQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectiveQuestionDeleteManyArgs>(args?: SelectSubset<T, SubjectiveQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubjectiveQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectiveQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubjectiveQuestions
     * const subjectiveQuestion = await prisma.subjectiveQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectiveQuestionUpdateManyArgs>(args: SelectSubset<T, SubjectiveQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubjectiveQuestion.
     * @param {SubjectiveQuestionUpsertArgs} args - Arguments to update or create a SubjectiveQuestion.
     * @example
     * // Update or create a SubjectiveQuestion
     * const subjectiveQuestion = await prisma.subjectiveQuestion.upsert({
     *   create: {
     *     // ... data to create a SubjectiveQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubjectiveQuestion we want to update
     *   }
     * })
     */
    upsert<T extends SubjectiveQuestionUpsertArgs>(args: SelectSubset<T, SubjectiveQuestionUpsertArgs<ExtArgs>>): Prisma__SubjectiveQuestionClient<$Result.GetResult<Prisma.$SubjectiveQuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SubjectiveQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectiveQuestionCountArgs} args - Arguments to filter SubjectiveQuestions to count.
     * @example
     * // Count the number of SubjectiveQuestions
     * const count = await prisma.subjectiveQuestion.count({
     *   where: {
     *     // ... the filter for the SubjectiveQuestions we want to count
     *   }
     * })
    **/
    count<T extends SubjectiveQuestionCountArgs>(
      args?: Subset<T, SubjectiveQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectiveQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubjectiveQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectiveQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectiveQuestionAggregateArgs>(args: Subset<T, SubjectiveQuestionAggregateArgs>): Prisma.PrismaPromise<GetSubjectiveQuestionAggregateType<T>>

    /**
     * Group by SubjectiveQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectiveQuestionGroupByArgs} args - Group by arguments.
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
      T extends SubjectiveQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectiveQuestionGroupByArgs['orderBy'] }
        : { orderBy?: SubjectiveQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectiveQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectiveQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubjectiveQuestion model
   */
  readonly fields: SubjectiveQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubjectiveQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectiveQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SubjectiveQuestion model
   */ 
  interface SubjectiveQuestionFieldRefs {
    readonly id: FieldRef<"SubjectiveQuestion", 'Int'>
    readonly question: FieldRef<"SubjectiveQuestion", 'String'>
    readonly answer: FieldRef<"SubjectiveQuestion", 'String'>
    readonly category: FieldRef<"SubjectiveQuestion", 'String'>
    readonly category2: FieldRef<"SubjectiveQuestion", 'String'>
    readonly createdAt: FieldRef<"SubjectiveQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubjectiveQuestion findUnique
   */
  export type SubjectiveQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestion
     */
    select?: SubjectiveQuestionSelect<ExtArgs> | null
    /**
     * Filter, which SubjectiveQuestion to fetch.
     */
    where: SubjectiveQuestionWhereUniqueInput
  }

  /**
   * SubjectiveQuestion findUniqueOrThrow
   */
  export type SubjectiveQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestion
     */
    select?: SubjectiveQuestionSelect<ExtArgs> | null
    /**
     * Filter, which SubjectiveQuestion to fetch.
     */
    where: SubjectiveQuestionWhereUniqueInput
  }

  /**
   * SubjectiveQuestion findFirst
   */
  export type SubjectiveQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestion
     */
    select?: SubjectiveQuestionSelect<ExtArgs> | null
    /**
     * Filter, which SubjectiveQuestion to fetch.
     */
    where?: SubjectiveQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectiveQuestions to fetch.
     */
    orderBy?: SubjectiveQuestionOrderByWithRelationInput | SubjectiveQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectiveQuestions.
     */
    cursor?: SubjectiveQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectiveQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectiveQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectiveQuestions.
     */
    distinct?: SubjectiveQuestionScalarFieldEnum | SubjectiveQuestionScalarFieldEnum[]
  }

  /**
   * SubjectiveQuestion findFirstOrThrow
   */
  export type SubjectiveQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestion
     */
    select?: SubjectiveQuestionSelect<ExtArgs> | null
    /**
     * Filter, which SubjectiveQuestion to fetch.
     */
    where?: SubjectiveQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectiveQuestions to fetch.
     */
    orderBy?: SubjectiveQuestionOrderByWithRelationInput | SubjectiveQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectiveQuestions.
     */
    cursor?: SubjectiveQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectiveQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectiveQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectiveQuestions.
     */
    distinct?: SubjectiveQuestionScalarFieldEnum | SubjectiveQuestionScalarFieldEnum[]
  }

  /**
   * SubjectiveQuestion findMany
   */
  export type SubjectiveQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestion
     */
    select?: SubjectiveQuestionSelect<ExtArgs> | null
    /**
     * Filter, which SubjectiveQuestions to fetch.
     */
    where?: SubjectiveQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectiveQuestions to fetch.
     */
    orderBy?: SubjectiveQuestionOrderByWithRelationInput | SubjectiveQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubjectiveQuestions.
     */
    cursor?: SubjectiveQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectiveQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectiveQuestions.
     */
    skip?: number
    distinct?: SubjectiveQuestionScalarFieldEnum | SubjectiveQuestionScalarFieldEnum[]
  }

  /**
   * SubjectiveQuestion create
   */
  export type SubjectiveQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestion
     */
    select?: SubjectiveQuestionSelect<ExtArgs> | null
    /**
     * The data needed to create a SubjectiveQuestion.
     */
    data: XOR<SubjectiveQuestionCreateInput, SubjectiveQuestionUncheckedCreateInput>
  }

  /**
   * SubjectiveQuestion createMany
   */
  export type SubjectiveQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubjectiveQuestions.
     */
    data: SubjectiveQuestionCreateManyInput | SubjectiveQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubjectiveQuestion createManyAndReturn
   */
  export type SubjectiveQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestion
     */
    select?: SubjectiveQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SubjectiveQuestions.
     */
    data: SubjectiveQuestionCreateManyInput | SubjectiveQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubjectiveQuestion update
   */
  export type SubjectiveQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestion
     */
    select?: SubjectiveQuestionSelect<ExtArgs> | null
    /**
     * The data needed to update a SubjectiveQuestion.
     */
    data: XOR<SubjectiveQuestionUpdateInput, SubjectiveQuestionUncheckedUpdateInput>
    /**
     * Choose, which SubjectiveQuestion to update.
     */
    where: SubjectiveQuestionWhereUniqueInput
  }

  /**
   * SubjectiveQuestion updateMany
   */
  export type SubjectiveQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubjectiveQuestions.
     */
    data: XOR<SubjectiveQuestionUpdateManyMutationInput, SubjectiveQuestionUncheckedUpdateManyInput>
    /**
     * Filter which SubjectiveQuestions to update
     */
    where?: SubjectiveQuestionWhereInput
  }

  /**
   * SubjectiveQuestion upsert
   */
  export type SubjectiveQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestion
     */
    select?: SubjectiveQuestionSelect<ExtArgs> | null
    /**
     * The filter to search for the SubjectiveQuestion to update in case it exists.
     */
    where: SubjectiveQuestionWhereUniqueInput
    /**
     * In case the SubjectiveQuestion found by the `where` argument doesn't exist, create a new SubjectiveQuestion with this data.
     */
    create: XOR<SubjectiveQuestionCreateInput, SubjectiveQuestionUncheckedCreateInput>
    /**
     * In case the SubjectiveQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectiveQuestionUpdateInput, SubjectiveQuestionUncheckedUpdateInput>
  }

  /**
   * SubjectiveQuestion delete
   */
  export type SubjectiveQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestion
     */
    select?: SubjectiveQuestionSelect<ExtArgs> | null
    /**
     * Filter which SubjectiveQuestion to delete.
     */
    where: SubjectiveQuestionWhereUniqueInput
  }

  /**
   * SubjectiveQuestion deleteMany
   */
  export type SubjectiveQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectiveQuestions to delete
     */
    where?: SubjectiveQuestionWhereInput
  }

  /**
   * SubjectiveQuestion without action
   */
  export type SubjectiveQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestion
     */
    select?: SubjectiveQuestionSelect<ExtArgs> | null
  }


  /**
   * Model SubjectiveQuestionOnly
   */

  export type AggregateSubjectiveQuestionOnly = {
    _count: SubjectiveQuestionOnlyCountAggregateOutputType | null
    _avg: SubjectiveQuestionOnlyAvgAggregateOutputType | null
    _sum: SubjectiveQuestionOnlySumAggregateOutputType | null
    _min: SubjectiveQuestionOnlyMinAggregateOutputType | null
    _max: SubjectiveQuestionOnlyMaxAggregateOutputType | null
  }

  export type SubjectiveQuestionOnlyAvgAggregateOutputType = {
    id: number | null
  }

  export type SubjectiveQuestionOnlySumAggregateOutputType = {
    id: number | null
  }

  export type SubjectiveQuestionOnlyMinAggregateOutputType = {
    id: number | null
    question: string | null
    category: string | null
    category1: string | null
    createdAd: Date | null
  }

  export type SubjectiveQuestionOnlyMaxAggregateOutputType = {
    id: number | null
    question: string | null
    category: string | null
    category1: string | null
    createdAd: Date | null
  }

  export type SubjectiveQuestionOnlyCountAggregateOutputType = {
    id: number
    question: number
    category: number
    category1: number
    createdAd: number
    _all: number
  }


  export type SubjectiveQuestionOnlyAvgAggregateInputType = {
    id?: true
  }

  export type SubjectiveQuestionOnlySumAggregateInputType = {
    id?: true
  }

  export type SubjectiveQuestionOnlyMinAggregateInputType = {
    id?: true
    question?: true
    category?: true
    category1?: true
    createdAd?: true
  }

  export type SubjectiveQuestionOnlyMaxAggregateInputType = {
    id?: true
    question?: true
    category?: true
    category1?: true
    createdAd?: true
  }

  export type SubjectiveQuestionOnlyCountAggregateInputType = {
    id?: true
    question?: true
    category?: true
    category1?: true
    createdAd?: true
    _all?: true
  }

  export type SubjectiveQuestionOnlyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectiveQuestionOnly to aggregate.
     */
    where?: SubjectiveQuestionOnlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectiveQuestionOnlies to fetch.
     */
    orderBy?: SubjectiveQuestionOnlyOrderByWithRelationInput | SubjectiveQuestionOnlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectiveQuestionOnlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectiveQuestionOnlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectiveQuestionOnlies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubjectiveQuestionOnlies
    **/
    _count?: true | SubjectiveQuestionOnlyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectiveQuestionOnlyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectiveQuestionOnlySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectiveQuestionOnlyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectiveQuestionOnlyMaxAggregateInputType
  }

  export type GetSubjectiveQuestionOnlyAggregateType<T extends SubjectiveQuestionOnlyAggregateArgs> = {
        [P in keyof T & keyof AggregateSubjectiveQuestionOnly]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubjectiveQuestionOnly[P]>
      : GetScalarType<T[P], AggregateSubjectiveQuestionOnly[P]>
  }




  export type SubjectiveQuestionOnlyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectiveQuestionOnlyWhereInput
    orderBy?: SubjectiveQuestionOnlyOrderByWithAggregationInput | SubjectiveQuestionOnlyOrderByWithAggregationInput[]
    by: SubjectiveQuestionOnlyScalarFieldEnum[] | SubjectiveQuestionOnlyScalarFieldEnum
    having?: SubjectiveQuestionOnlyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectiveQuestionOnlyCountAggregateInputType | true
    _avg?: SubjectiveQuestionOnlyAvgAggregateInputType
    _sum?: SubjectiveQuestionOnlySumAggregateInputType
    _min?: SubjectiveQuestionOnlyMinAggregateInputType
    _max?: SubjectiveQuestionOnlyMaxAggregateInputType
  }

  export type SubjectiveQuestionOnlyGroupByOutputType = {
    id: number
    question: string
    category: string
    category1: string
    createdAd: Date
    _count: SubjectiveQuestionOnlyCountAggregateOutputType | null
    _avg: SubjectiveQuestionOnlyAvgAggregateOutputType | null
    _sum: SubjectiveQuestionOnlySumAggregateOutputType | null
    _min: SubjectiveQuestionOnlyMinAggregateOutputType | null
    _max: SubjectiveQuestionOnlyMaxAggregateOutputType | null
  }

  type GetSubjectiveQuestionOnlyGroupByPayload<T extends SubjectiveQuestionOnlyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectiveQuestionOnlyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectiveQuestionOnlyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectiveQuestionOnlyGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectiveQuestionOnlyGroupByOutputType[P]>
        }
      >
    >


  export type SubjectiveQuestionOnlySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    category?: boolean
    category1?: boolean
    createdAd?: boolean
  }, ExtArgs["result"]["subjectiveQuestionOnly"]>

  export type SubjectiveQuestionOnlySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    category?: boolean
    category1?: boolean
    createdAd?: boolean
  }, ExtArgs["result"]["subjectiveQuestionOnly"]>

  export type SubjectiveQuestionOnlySelectScalar = {
    id?: boolean
    question?: boolean
    category?: boolean
    category1?: boolean
    createdAd?: boolean
  }


  export type $SubjectiveQuestionOnlyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubjectiveQuestionOnly"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question: string
      category: string
      category1: string
      createdAd: Date
    }, ExtArgs["result"]["subjectiveQuestionOnly"]>
    composites: {}
  }

  type SubjectiveQuestionOnlyGetPayload<S extends boolean | null | undefined | SubjectiveQuestionOnlyDefaultArgs> = $Result.GetResult<Prisma.$SubjectiveQuestionOnlyPayload, S>

  type SubjectiveQuestionOnlyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubjectiveQuestionOnlyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubjectiveQuestionOnlyCountAggregateInputType | true
    }

  export interface SubjectiveQuestionOnlyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubjectiveQuestionOnly'], meta: { name: 'SubjectiveQuestionOnly' } }
    /**
     * Find zero or one SubjectiveQuestionOnly that matches the filter.
     * @param {SubjectiveQuestionOnlyFindUniqueArgs} args - Arguments to find a SubjectiveQuestionOnly
     * @example
     * // Get one SubjectiveQuestionOnly
     * const subjectiveQuestionOnly = await prisma.subjectiveQuestionOnly.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectiveQuestionOnlyFindUniqueArgs>(args: SelectSubset<T, SubjectiveQuestionOnlyFindUniqueArgs<ExtArgs>>): Prisma__SubjectiveQuestionOnlyClient<$Result.GetResult<Prisma.$SubjectiveQuestionOnlyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SubjectiveQuestionOnly that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubjectiveQuestionOnlyFindUniqueOrThrowArgs} args - Arguments to find a SubjectiveQuestionOnly
     * @example
     * // Get one SubjectiveQuestionOnly
     * const subjectiveQuestionOnly = await prisma.subjectiveQuestionOnly.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectiveQuestionOnlyFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectiveQuestionOnlyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectiveQuestionOnlyClient<$Result.GetResult<Prisma.$SubjectiveQuestionOnlyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SubjectiveQuestionOnly that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectiveQuestionOnlyFindFirstArgs} args - Arguments to find a SubjectiveQuestionOnly
     * @example
     * // Get one SubjectiveQuestionOnly
     * const subjectiveQuestionOnly = await prisma.subjectiveQuestionOnly.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectiveQuestionOnlyFindFirstArgs>(args?: SelectSubset<T, SubjectiveQuestionOnlyFindFirstArgs<ExtArgs>>): Prisma__SubjectiveQuestionOnlyClient<$Result.GetResult<Prisma.$SubjectiveQuestionOnlyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SubjectiveQuestionOnly that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectiveQuestionOnlyFindFirstOrThrowArgs} args - Arguments to find a SubjectiveQuestionOnly
     * @example
     * // Get one SubjectiveQuestionOnly
     * const subjectiveQuestionOnly = await prisma.subjectiveQuestionOnly.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectiveQuestionOnlyFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectiveQuestionOnlyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectiveQuestionOnlyClient<$Result.GetResult<Prisma.$SubjectiveQuestionOnlyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SubjectiveQuestionOnlies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectiveQuestionOnlyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubjectiveQuestionOnlies
     * const subjectiveQuestionOnlies = await prisma.subjectiveQuestionOnly.findMany()
     * 
     * // Get first 10 SubjectiveQuestionOnlies
     * const subjectiveQuestionOnlies = await prisma.subjectiveQuestionOnly.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectiveQuestionOnlyWithIdOnly = await prisma.subjectiveQuestionOnly.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectiveQuestionOnlyFindManyArgs>(args?: SelectSubset<T, SubjectiveQuestionOnlyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectiveQuestionOnlyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SubjectiveQuestionOnly.
     * @param {SubjectiveQuestionOnlyCreateArgs} args - Arguments to create a SubjectiveQuestionOnly.
     * @example
     * // Create one SubjectiveQuestionOnly
     * const SubjectiveQuestionOnly = await prisma.subjectiveQuestionOnly.create({
     *   data: {
     *     // ... data to create a SubjectiveQuestionOnly
     *   }
     * })
     * 
     */
    create<T extends SubjectiveQuestionOnlyCreateArgs>(args: SelectSubset<T, SubjectiveQuestionOnlyCreateArgs<ExtArgs>>): Prisma__SubjectiveQuestionOnlyClient<$Result.GetResult<Prisma.$SubjectiveQuestionOnlyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SubjectiveQuestionOnlies.
     * @param {SubjectiveQuestionOnlyCreateManyArgs} args - Arguments to create many SubjectiveQuestionOnlies.
     * @example
     * // Create many SubjectiveQuestionOnlies
     * const subjectiveQuestionOnly = await prisma.subjectiveQuestionOnly.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectiveQuestionOnlyCreateManyArgs>(args?: SelectSubset<T, SubjectiveQuestionOnlyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubjectiveQuestionOnlies and returns the data saved in the database.
     * @param {SubjectiveQuestionOnlyCreateManyAndReturnArgs} args - Arguments to create many SubjectiveQuestionOnlies.
     * @example
     * // Create many SubjectiveQuestionOnlies
     * const subjectiveQuestionOnly = await prisma.subjectiveQuestionOnly.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubjectiveQuestionOnlies and only return the `id`
     * const subjectiveQuestionOnlyWithIdOnly = await prisma.subjectiveQuestionOnly.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectiveQuestionOnlyCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectiveQuestionOnlyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectiveQuestionOnlyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SubjectiveQuestionOnly.
     * @param {SubjectiveQuestionOnlyDeleteArgs} args - Arguments to delete one SubjectiveQuestionOnly.
     * @example
     * // Delete one SubjectiveQuestionOnly
     * const SubjectiveQuestionOnly = await prisma.subjectiveQuestionOnly.delete({
     *   where: {
     *     // ... filter to delete one SubjectiveQuestionOnly
     *   }
     * })
     * 
     */
    delete<T extends SubjectiveQuestionOnlyDeleteArgs>(args: SelectSubset<T, SubjectiveQuestionOnlyDeleteArgs<ExtArgs>>): Prisma__SubjectiveQuestionOnlyClient<$Result.GetResult<Prisma.$SubjectiveQuestionOnlyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SubjectiveQuestionOnly.
     * @param {SubjectiveQuestionOnlyUpdateArgs} args - Arguments to update one SubjectiveQuestionOnly.
     * @example
     * // Update one SubjectiveQuestionOnly
     * const subjectiveQuestionOnly = await prisma.subjectiveQuestionOnly.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectiveQuestionOnlyUpdateArgs>(args: SelectSubset<T, SubjectiveQuestionOnlyUpdateArgs<ExtArgs>>): Prisma__SubjectiveQuestionOnlyClient<$Result.GetResult<Prisma.$SubjectiveQuestionOnlyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SubjectiveQuestionOnlies.
     * @param {SubjectiveQuestionOnlyDeleteManyArgs} args - Arguments to filter SubjectiveQuestionOnlies to delete.
     * @example
     * // Delete a few SubjectiveQuestionOnlies
     * const { count } = await prisma.subjectiveQuestionOnly.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectiveQuestionOnlyDeleteManyArgs>(args?: SelectSubset<T, SubjectiveQuestionOnlyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubjectiveQuestionOnlies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectiveQuestionOnlyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubjectiveQuestionOnlies
     * const subjectiveQuestionOnly = await prisma.subjectiveQuestionOnly.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectiveQuestionOnlyUpdateManyArgs>(args: SelectSubset<T, SubjectiveQuestionOnlyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubjectiveQuestionOnly.
     * @param {SubjectiveQuestionOnlyUpsertArgs} args - Arguments to update or create a SubjectiveQuestionOnly.
     * @example
     * // Update or create a SubjectiveQuestionOnly
     * const subjectiveQuestionOnly = await prisma.subjectiveQuestionOnly.upsert({
     *   create: {
     *     // ... data to create a SubjectiveQuestionOnly
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubjectiveQuestionOnly we want to update
     *   }
     * })
     */
    upsert<T extends SubjectiveQuestionOnlyUpsertArgs>(args: SelectSubset<T, SubjectiveQuestionOnlyUpsertArgs<ExtArgs>>): Prisma__SubjectiveQuestionOnlyClient<$Result.GetResult<Prisma.$SubjectiveQuestionOnlyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SubjectiveQuestionOnlies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectiveQuestionOnlyCountArgs} args - Arguments to filter SubjectiveQuestionOnlies to count.
     * @example
     * // Count the number of SubjectiveQuestionOnlies
     * const count = await prisma.subjectiveQuestionOnly.count({
     *   where: {
     *     // ... the filter for the SubjectiveQuestionOnlies we want to count
     *   }
     * })
    **/
    count<T extends SubjectiveQuestionOnlyCountArgs>(
      args?: Subset<T, SubjectiveQuestionOnlyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectiveQuestionOnlyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubjectiveQuestionOnly.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectiveQuestionOnlyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectiveQuestionOnlyAggregateArgs>(args: Subset<T, SubjectiveQuestionOnlyAggregateArgs>): Prisma.PrismaPromise<GetSubjectiveQuestionOnlyAggregateType<T>>

    /**
     * Group by SubjectiveQuestionOnly.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectiveQuestionOnlyGroupByArgs} args - Group by arguments.
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
      T extends SubjectiveQuestionOnlyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectiveQuestionOnlyGroupByArgs['orderBy'] }
        : { orderBy?: SubjectiveQuestionOnlyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectiveQuestionOnlyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectiveQuestionOnlyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubjectiveQuestionOnly model
   */
  readonly fields: SubjectiveQuestionOnlyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubjectiveQuestionOnly.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectiveQuestionOnlyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SubjectiveQuestionOnly model
   */ 
  interface SubjectiveQuestionOnlyFieldRefs {
    readonly id: FieldRef<"SubjectiveQuestionOnly", 'Int'>
    readonly question: FieldRef<"SubjectiveQuestionOnly", 'String'>
    readonly category: FieldRef<"SubjectiveQuestionOnly", 'String'>
    readonly category1: FieldRef<"SubjectiveQuestionOnly", 'String'>
    readonly createdAd: FieldRef<"SubjectiveQuestionOnly", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubjectiveQuestionOnly findUnique
   */
  export type SubjectiveQuestionOnlyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestionOnly
     */
    select?: SubjectiveQuestionOnlySelect<ExtArgs> | null
    /**
     * Filter, which SubjectiveQuestionOnly to fetch.
     */
    where: SubjectiveQuestionOnlyWhereUniqueInput
  }

  /**
   * SubjectiveQuestionOnly findUniqueOrThrow
   */
  export type SubjectiveQuestionOnlyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestionOnly
     */
    select?: SubjectiveQuestionOnlySelect<ExtArgs> | null
    /**
     * Filter, which SubjectiveQuestionOnly to fetch.
     */
    where: SubjectiveQuestionOnlyWhereUniqueInput
  }

  /**
   * SubjectiveQuestionOnly findFirst
   */
  export type SubjectiveQuestionOnlyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestionOnly
     */
    select?: SubjectiveQuestionOnlySelect<ExtArgs> | null
    /**
     * Filter, which SubjectiveQuestionOnly to fetch.
     */
    where?: SubjectiveQuestionOnlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectiveQuestionOnlies to fetch.
     */
    orderBy?: SubjectiveQuestionOnlyOrderByWithRelationInput | SubjectiveQuestionOnlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectiveQuestionOnlies.
     */
    cursor?: SubjectiveQuestionOnlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectiveQuestionOnlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectiveQuestionOnlies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectiveQuestionOnlies.
     */
    distinct?: SubjectiveQuestionOnlyScalarFieldEnum | SubjectiveQuestionOnlyScalarFieldEnum[]
  }

  /**
   * SubjectiveQuestionOnly findFirstOrThrow
   */
  export type SubjectiveQuestionOnlyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestionOnly
     */
    select?: SubjectiveQuestionOnlySelect<ExtArgs> | null
    /**
     * Filter, which SubjectiveQuestionOnly to fetch.
     */
    where?: SubjectiveQuestionOnlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectiveQuestionOnlies to fetch.
     */
    orderBy?: SubjectiveQuestionOnlyOrderByWithRelationInput | SubjectiveQuestionOnlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectiveQuestionOnlies.
     */
    cursor?: SubjectiveQuestionOnlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectiveQuestionOnlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectiveQuestionOnlies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectiveQuestionOnlies.
     */
    distinct?: SubjectiveQuestionOnlyScalarFieldEnum | SubjectiveQuestionOnlyScalarFieldEnum[]
  }

  /**
   * SubjectiveQuestionOnly findMany
   */
  export type SubjectiveQuestionOnlyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestionOnly
     */
    select?: SubjectiveQuestionOnlySelect<ExtArgs> | null
    /**
     * Filter, which SubjectiveQuestionOnlies to fetch.
     */
    where?: SubjectiveQuestionOnlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectiveQuestionOnlies to fetch.
     */
    orderBy?: SubjectiveQuestionOnlyOrderByWithRelationInput | SubjectiveQuestionOnlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubjectiveQuestionOnlies.
     */
    cursor?: SubjectiveQuestionOnlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectiveQuestionOnlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectiveQuestionOnlies.
     */
    skip?: number
    distinct?: SubjectiveQuestionOnlyScalarFieldEnum | SubjectiveQuestionOnlyScalarFieldEnum[]
  }

  /**
   * SubjectiveQuestionOnly create
   */
  export type SubjectiveQuestionOnlyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestionOnly
     */
    select?: SubjectiveQuestionOnlySelect<ExtArgs> | null
    /**
     * The data needed to create a SubjectiveQuestionOnly.
     */
    data: XOR<SubjectiveQuestionOnlyCreateInput, SubjectiveQuestionOnlyUncheckedCreateInput>
  }

  /**
   * SubjectiveQuestionOnly createMany
   */
  export type SubjectiveQuestionOnlyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubjectiveQuestionOnlies.
     */
    data: SubjectiveQuestionOnlyCreateManyInput | SubjectiveQuestionOnlyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubjectiveQuestionOnly createManyAndReturn
   */
  export type SubjectiveQuestionOnlyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestionOnly
     */
    select?: SubjectiveQuestionOnlySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SubjectiveQuestionOnlies.
     */
    data: SubjectiveQuestionOnlyCreateManyInput | SubjectiveQuestionOnlyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubjectiveQuestionOnly update
   */
  export type SubjectiveQuestionOnlyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestionOnly
     */
    select?: SubjectiveQuestionOnlySelect<ExtArgs> | null
    /**
     * The data needed to update a SubjectiveQuestionOnly.
     */
    data: XOR<SubjectiveQuestionOnlyUpdateInput, SubjectiveQuestionOnlyUncheckedUpdateInput>
    /**
     * Choose, which SubjectiveQuestionOnly to update.
     */
    where: SubjectiveQuestionOnlyWhereUniqueInput
  }

  /**
   * SubjectiveQuestionOnly updateMany
   */
  export type SubjectiveQuestionOnlyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubjectiveQuestionOnlies.
     */
    data: XOR<SubjectiveQuestionOnlyUpdateManyMutationInput, SubjectiveQuestionOnlyUncheckedUpdateManyInput>
    /**
     * Filter which SubjectiveQuestionOnlies to update
     */
    where?: SubjectiveQuestionOnlyWhereInput
  }

  /**
   * SubjectiveQuestionOnly upsert
   */
  export type SubjectiveQuestionOnlyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestionOnly
     */
    select?: SubjectiveQuestionOnlySelect<ExtArgs> | null
    /**
     * The filter to search for the SubjectiveQuestionOnly to update in case it exists.
     */
    where: SubjectiveQuestionOnlyWhereUniqueInput
    /**
     * In case the SubjectiveQuestionOnly found by the `where` argument doesn't exist, create a new SubjectiveQuestionOnly with this data.
     */
    create: XOR<SubjectiveQuestionOnlyCreateInput, SubjectiveQuestionOnlyUncheckedCreateInput>
    /**
     * In case the SubjectiveQuestionOnly was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectiveQuestionOnlyUpdateInput, SubjectiveQuestionOnlyUncheckedUpdateInput>
  }

  /**
   * SubjectiveQuestionOnly delete
   */
  export type SubjectiveQuestionOnlyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestionOnly
     */
    select?: SubjectiveQuestionOnlySelect<ExtArgs> | null
    /**
     * Filter which SubjectiveQuestionOnly to delete.
     */
    where: SubjectiveQuestionOnlyWhereUniqueInput
  }

  /**
   * SubjectiveQuestionOnly deleteMany
   */
  export type SubjectiveQuestionOnlyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectiveQuestionOnlies to delete
     */
    where?: SubjectiveQuestionOnlyWhereInput
  }

  /**
   * SubjectiveQuestionOnly without action
   */
  export type SubjectiveQuestionOnlyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectiveQuestionOnly
     */
    select?: SubjectiveQuestionOnlySelect<ExtArgs> | null
  }


  /**
   * Model NewsBlog
   */

  export type AggregateNewsBlog = {
    _count: NewsBlogCountAggregateOutputType | null
    _avg: NewsBlogAvgAggregateOutputType | null
    _sum: NewsBlogSumAggregateOutputType | null
    _min: NewsBlogMinAggregateOutputType | null
    _max: NewsBlogMaxAggregateOutputType | null
  }

  export type NewsBlogAvgAggregateOutputType = {
    id: number | null
  }

  export type NewsBlogSumAggregateOutputType = {
    id: number | null
  }

  export type NewsBlogMinAggregateOutputType = {
    id: number | null
    image: string | null
    heading: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsBlogMaxAggregateOutputType = {
    id: number | null
    image: string | null
    heading: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsBlogCountAggregateOutputType = {
    id: number
    image: number
    heading: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsBlogAvgAggregateInputType = {
    id?: true
  }

  export type NewsBlogSumAggregateInputType = {
    id?: true
  }

  export type NewsBlogMinAggregateInputType = {
    id?: true
    image?: true
    heading?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsBlogMaxAggregateInputType = {
    id?: true
    image?: true
    heading?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsBlogCountAggregateInputType = {
    id?: true
    image?: true
    heading?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsBlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsBlog to aggregate.
     */
    where?: NewsBlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsBlogs to fetch.
     */
    orderBy?: NewsBlogOrderByWithRelationInput | NewsBlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsBlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsBlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsBlogs
    **/
    _count?: true | NewsBlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsBlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsBlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsBlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsBlogMaxAggregateInputType
  }

  export type GetNewsBlogAggregateType<T extends NewsBlogAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsBlog[P]>
      : GetScalarType<T[P], AggregateNewsBlog[P]>
  }




  export type NewsBlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsBlogWhereInput
    orderBy?: NewsBlogOrderByWithAggregationInput | NewsBlogOrderByWithAggregationInput[]
    by: NewsBlogScalarFieldEnum[] | NewsBlogScalarFieldEnum
    having?: NewsBlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsBlogCountAggregateInputType | true
    _avg?: NewsBlogAvgAggregateInputType
    _sum?: NewsBlogSumAggregateInputType
    _min?: NewsBlogMinAggregateInputType
    _max?: NewsBlogMaxAggregateInputType
  }

  export type NewsBlogGroupByOutputType = {
    id: number
    image: string
    heading: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: NewsBlogCountAggregateOutputType | null
    _avg: NewsBlogAvgAggregateOutputType | null
    _sum: NewsBlogSumAggregateOutputType | null
    _min: NewsBlogMinAggregateOutputType | null
    _max: NewsBlogMaxAggregateOutputType | null
  }

  type GetNewsBlogGroupByPayload<T extends NewsBlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsBlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsBlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsBlogGroupByOutputType[P]>
            : GetScalarType<T[P], NewsBlogGroupByOutputType[P]>
        }
      >
    >


  export type NewsBlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    heading?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsBlog"]>

  export type NewsBlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    heading?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsBlog"]>

  export type NewsBlogSelectScalar = {
    id?: boolean
    image?: boolean
    heading?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $NewsBlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsBlog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      heading: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["newsBlog"]>
    composites: {}
  }

  type NewsBlogGetPayload<S extends boolean | null | undefined | NewsBlogDefaultArgs> = $Result.GetResult<Prisma.$NewsBlogPayload, S>

  type NewsBlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NewsBlogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NewsBlogCountAggregateInputType | true
    }

  export interface NewsBlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsBlog'], meta: { name: 'NewsBlog' } }
    /**
     * Find zero or one NewsBlog that matches the filter.
     * @param {NewsBlogFindUniqueArgs} args - Arguments to find a NewsBlog
     * @example
     * // Get one NewsBlog
     * const newsBlog = await prisma.newsBlog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsBlogFindUniqueArgs>(args: SelectSubset<T, NewsBlogFindUniqueArgs<ExtArgs>>): Prisma__NewsBlogClient<$Result.GetResult<Prisma.$NewsBlogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NewsBlog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NewsBlogFindUniqueOrThrowArgs} args - Arguments to find a NewsBlog
     * @example
     * // Get one NewsBlog
     * const newsBlog = await prisma.newsBlog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsBlogFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsBlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsBlogClient<$Result.GetResult<Prisma.$NewsBlogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NewsBlog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlogFindFirstArgs} args - Arguments to find a NewsBlog
     * @example
     * // Get one NewsBlog
     * const newsBlog = await prisma.newsBlog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsBlogFindFirstArgs>(args?: SelectSubset<T, NewsBlogFindFirstArgs<ExtArgs>>): Prisma__NewsBlogClient<$Result.GetResult<Prisma.$NewsBlogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NewsBlog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlogFindFirstOrThrowArgs} args - Arguments to find a NewsBlog
     * @example
     * // Get one NewsBlog
     * const newsBlog = await prisma.newsBlog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsBlogFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsBlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsBlogClient<$Result.GetResult<Prisma.$NewsBlogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NewsBlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsBlogs
     * const newsBlogs = await prisma.newsBlog.findMany()
     * 
     * // Get first 10 NewsBlogs
     * const newsBlogs = await prisma.newsBlog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsBlogWithIdOnly = await prisma.newsBlog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsBlogFindManyArgs>(args?: SelectSubset<T, NewsBlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsBlogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NewsBlog.
     * @param {NewsBlogCreateArgs} args - Arguments to create a NewsBlog.
     * @example
     * // Create one NewsBlog
     * const NewsBlog = await prisma.newsBlog.create({
     *   data: {
     *     // ... data to create a NewsBlog
     *   }
     * })
     * 
     */
    create<T extends NewsBlogCreateArgs>(args: SelectSubset<T, NewsBlogCreateArgs<ExtArgs>>): Prisma__NewsBlogClient<$Result.GetResult<Prisma.$NewsBlogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NewsBlogs.
     * @param {NewsBlogCreateManyArgs} args - Arguments to create many NewsBlogs.
     * @example
     * // Create many NewsBlogs
     * const newsBlog = await prisma.newsBlog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsBlogCreateManyArgs>(args?: SelectSubset<T, NewsBlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsBlogs and returns the data saved in the database.
     * @param {NewsBlogCreateManyAndReturnArgs} args - Arguments to create many NewsBlogs.
     * @example
     * // Create many NewsBlogs
     * const newsBlog = await prisma.newsBlog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsBlogs and only return the `id`
     * const newsBlogWithIdOnly = await prisma.newsBlog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsBlogCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsBlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsBlogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NewsBlog.
     * @param {NewsBlogDeleteArgs} args - Arguments to delete one NewsBlog.
     * @example
     * // Delete one NewsBlog
     * const NewsBlog = await prisma.newsBlog.delete({
     *   where: {
     *     // ... filter to delete one NewsBlog
     *   }
     * })
     * 
     */
    delete<T extends NewsBlogDeleteArgs>(args: SelectSubset<T, NewsBlogDeleteArgs<ExtArgs>>): Prisma__NewsBlogClient<$Result.GetResult<Prisma.$NewsBlogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NewsBlog.
     * @param {NewsBlogUpdateArgs} args - Arguments to update one NewsBlog.
     * @example
     * // Update one NewsBlog
     * const newsBlog = await prisma.newsBlog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsBlogUpdateArgs>(args: SelectSubset<T, NewsBlogUpdateArgs<ExtArgs>>): Prisma__NewsBlogClient<$Result.GetResult<Prisma.$NewsBlogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NewsBlogs.
     * @param {NewsBlogDeleteManyArgs} args - Arguments to filter NewsBlogs to delete.
     * @example
     * // Delete a few NewsBlogs
     * const { count } = await prisma.newsBlog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsBlogDeleteManyArgs>(args?: SelectSubset<T, NewsBlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsBlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsBlogs
     * const newsBlog = await prisma.newsBlog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsBlogUpdateManyArgs>(args: SelectSubset<T, NewsBlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NewsBlog.
     * @param {NewsBlogUpsertArgs} args - Arguments to update or create a NewsBlog.
     * @example
     * // Update or create a NewsBlog
     * const newsBlog = await prisma.newsBlog.upsert({
     *   create: {
     *     // ... data to create a NewsBlog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsBlog we want to update
     *   }
     * })
     */
    upsert<T extends NewsBlogUpsertArgs>(args: SelectSubset<T, NewsBlogUpsertArgs<ExtArgs>>): Prisma__NewsBlogClient<$Result.GetResult<Prisma.$NewsBlogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NewsBlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlogCountArgs} args - Arguments to filter NewsBlogs to count.
     * @example
     * // Count the number of NewsBlogs
     * const count = await prisma.newsBlog.count({
     *   where: {
     *     // ... the filter for the NewsBlogs we want to count
     *   }
     * })
    **/
    count<T extends NewsBlogCountArgs>(
      args?: Subset<T, NewsBlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsBlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsBlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsBlogAggregateArgs>(args: Subset<T, NewsBlogAggregateArgs>): Prisma.PrismaPromise<GetNewsBlogAggregateType<T>>

    /**
     * Group by NewsBlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsBlogGroupByArgs} args - Group by arguments.
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
      T extends NewsBlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsBlogGroupByArgs['orderBy'] }
        : { orderBy?: NewsBlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsBlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsBlog model
   */
  readonly fields: NewsBlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsBlog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsBlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the NewsBlog model
   */ 
  interface NewsBlogFieldRefs {
    readonly id: FieldRef<"NewsBlog", 'Int'>
    readonly image: FieldRef<"NewsBlog", 'String'>
    readonly heading: FieldRef<"NewsBlog", 'String'>
    readonly description: FieldRef<"NewsBlog", 'String'>
    readonly createdAt: FieldRef<"NewsBlog", 'DateTime'>
    readonly updatedAt: FieldRef<"NewsBlog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsBlog findUnique
   */
  export type NewsBlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlog
     */
    select?: NewsBlogSelect<ExtArgs> | null
    /**
     * Filter, which NewsBlog to fetch.
     */
    where: NewsBlogWhereUniqueInput
  }

  /**
   * NewsBlog findUniqueOrThrow
   */
  export type NewsBlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlog
     */
    select?: NewsBlogSelect<ExtArgs> | null
    /**
     * Filter, which NewsBlog to fetch.
     */
    where: NewsBlogWhereUniqueInput
  }

  /**
   * NewsBlog findFirst
   */
  export type NewsBlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlog
     */
    select?: NewsBlogSelect<ExtArgs> | null
    /**
     * Filter, which NewsBlog to fetch.
     */
    where?: NewsBlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsBlogs to fetch.
     */
    orderBy?: NewsBlogOrderByWithRelationInput | NewsBlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsBlogs.
     */
    cursor?: NewsBlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsBlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsBlogs.
     */
    distinct?: NewsBlogScalarFieldEnum | NewsBlogScalarFieldEnum[]
  }

  /**
   * NewsBlog findFirstOrThrow
   */
  export type NewsBlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlog
     */
    select?: NewsBlogSelect<ExtArgs> | null
    /**
     * Filter, which NewsBlog to fetch.
     */
    where?: NewsBlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsBlogs to fetch.
     */
    orderBy?: NewsBlogOrderByWithRelationInput | NewsBlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsBlogs.
     */
    cursor?: NewsBlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsBlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsBlogs.
     */
    distinct?: NewsBlogScalarFieldEnum | NewsBlogScalarFieldEnum[]
  }

  /**
   * NewsBlog findMany
   */
  export type NewsBlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlog
     */
    select?: NewsBlogSelect<ExtArgs> | null
    /**
     * Filter, which NewsBlogs to fetch.
     */
    where?: NewsBlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsBlogs to fetch.
     */
    orderBy?: NewsBlogOrderByWithRelationInput | NewsBlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsBlogs.
     */
    cursor?: NewsBlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsBlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsBlogs.
     */
    skip?: number
    distinct?: NewsBlogScalarFieldEnum | NewsBlogScalarFieldEnum[]
  }

  /**
   * NewsBlog create
   */
  export type NewsBlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlog
     */
    select?: NewsBlogSelect<ExtArgs> | null
    /**
     * The data needed to create a NewsBlog.
     */
    data: XOR<NewsBlogCreateInput, NewsBlogUncheckedCreateInput>
  }

  /**
   * NewsBlog createMany
   */
  export type NewsBlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsBlogs.
     */
    data: NewsBlogCreateManyInput | NewsBlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsBlog createManyAndReturn
   */
  export type NewsBlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlog
     */
    select?: NewsBlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NewsBlogs.
     */
    data: NewsBlogCreateManyInput | NewsBlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsBlog update
   */
  export type NewsBlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlog
     */
    select?: NewsBlogSelect<ExtArgs> | null
    /**
     * The data needed to update a NewsBlog.
     */
    data: XOR<NewsBlogUpdateInput, NewsBlogUncheckedUpdateInput>
    /**
     * Choose, which NewsBlog to update.
     */
    where: NewsBlogWhereUniqueInput
  }

  /**
   * NewsBlog updateMany
   */
  export type NewsBlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsBlogs.
     */
    data: XOR<NewsBlogUpdateManyMutationInput, NewsBlogUncheckedUpdateManyInput>
    /**
     * Filter which NewsBlogs to update
     */
    where?: NewsBlogWhereInput
  }

  /**
   * NewsBlog upsert
   */
  export type NewsBlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlog
     */
    select?: NewsBlogSelect<ExtArgs> | null
    /**
     * The filter to search for the NewsBlog to update in case it exists.
     */
    where: NewsBlogWhereUniqueInput
    /**
     * In case the NewsBlog found by the `where` argument doesn't exist, create a new NewsBlog with this data.
     */
    create: XOR<NewsBlogCreateInput, NewsBlogUncheckedCreateInput>
    /**
     * In case the NewsBlog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsBlogUpdateInput, NewsBlogUncheckedUpdateInput>
  }

  /**
   * NewsBlog delete
   */
  export type NewsBlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlog
     */
    select?: NewsBlogSelect<ExtArgs> | null
    /**
     * Filter which NewsBlog to delete.
     */
    where: NewsBlogWhereUniqueInput
  }

  /**
   * NewsBlog deleteMany
   */
  export type NewsBlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsBlogs to delete
     */
    where?: NewsBlogWhereInput
  }

  /**
   * NewsBlog without action
   */
  export type NewsBlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsBlog
     */
    select?: NewsBlogSelect<ExtArgs> | null
  }


  /**
   * Model Contacts
   */

  export type AggregateContacts = {
    _count: ContactsCountAggregateOutputType | null
    _avg: ContactsAvgAggregateOutputType | null
    _sum: ContactsSumAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  export type ContactsAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactsSumAggregateOutputType = {
    id: number | null
  }

  export type ContactsMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactsMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactsCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactsAvgAggregateInputType = {
    id?: true
  }

  export type ContactsSumAggregateInputType = {
    id?: true
  }

  export type ContactsMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactsMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactsCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to aggregate.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactsMaxAggregateInputType
  }

  export type GetContactsAggregateType<T extends ContactsAggregateArgs> = {
        [P in keyof T & keyof AggregateContacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacts[P]>
      : GetScalarType<T[P], AggregateContacts[P]>
  }




  export type ContactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactsWhereInput
    orderBy?: ContactsOrderByWithAggregationInput | ContactsOrderByWithAggregationInput[]
    by: ContactsScalarFieldEnum[] | ContactsScalarFieldEnum
    having?: ContactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactsCountAggregateInputType | true
    _avg?: ContactsAvgAggregateInputType
    _sum?: ContactsSumAggregateInputType
    _min?: ContactsMinAggregateInputType
    _max?: ContactsMaxAggregateInputType
  }

  export type ContactsGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    message: string
    createdAt: Date
    updatedAt: Date
    _count: ContactsCountAggregateOutputType | null
    _avg: ContactsAvgAggregateOutputType | null
    _sum: ContactsSumAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  type GetContactsGroupByPayload<T extends ContactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactsGroupByOutputType[P]>
        }
      >
    >


  export type ContactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contacts"]>

  export type ContactsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contacts"]>

  export type ContactsSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ContactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contacts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contacts"]>
    composites: {}
  }

  type ContactsGetPayload<S extends boolean | null | undefined | ContactsDefaultArgs> = $Result.GetResult<Prisma.$ContactsPayload, S>

  type ContactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactsCountAggregateInputType | true
    }

  export interface ContactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contacts'], meta: { name: 'Contacts' } }
    /**
     * Find zero or one Contacts that matches the filter.
     * @param {ContactsFindUniqueArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactsFindUniqueArgs>(args: SelectSubset<T, ContactsFindUniqueArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Contacts that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContactsFindUniqueOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindFirstArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactsFindFirstArgs>(args?: SelectSubset<T, ContactsFindFirstArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Contacts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindFirstOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contacts.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contacts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactsWithIdOnly = await prisma.contacts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactsFindManyArgs>(args?: SelectSubset<T, ContactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Contacts.
     * @param {ContactsCreateArgs} args - Arguments to create a Contacts.
     * @example
     * // Create one Contacts
     * const Contacts = await prisma.contacts.create({
     *   data: {
     *     // ... data to create a Contacts
     *   }
     * })
     * 
     */
    create<T extends ContactsCreateArgs>(args: SelectSubset<T, ContactsCreateArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Contacts.
     * @param {ContactsCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactsCreateManyArgs>(args?: SelectSubset<T, ContactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactsCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactsWithIdOnly = await prisma.contacts.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactsCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Contacts.
     * @param {ContactsDeleteArgs} args - Arguments to delete one Contacts.
     * @example
     * // Delete one Contacts
     * const Contacts = await prisma.contacts.delete({
     *   where: {
     *     // ... filter to delete one Contacts
     *   }
     * })
     * 
     */
    delete<T extends ContactsDeleteArgs>(args: SelectSubset<T, ContactsDeleteArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Contacts.
     * @param {ContactsUpdateArgs} args - Arguments to update one Contacts.
     * @example
     * // Update one Contacts
     * const contacts = await prisma.contacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactsUpdateArgs>(args: SelectSubset<T, ContactsUpdateArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Contacts.
     * @param {ContactsDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactsDeleteManyArgs>(args?: SelectSubset<T, ContactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactsUpdateManyArgs>(args: SelectSubset<T, ContactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contacts.
     * @param {ContactsUpsertArgs} args - Arguments to update or create a Contacts.
     * @example
     * // Update or create a Contacts
     * const contacts = await prisma.contacts.upsert({
     *   create: {
     *     // ... data to create a Contacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacts we want to update
     *   }
     * })
     */
    upsert<T extends ContactsUpsertArgs>(args: SelectSubset<T, ContactsUpsertArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contacts.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactsCountArgs>(
      args?: Subset<T, ContactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactsAggregateArgs>(args: Subset<T, ContactsAggregateArgs>): Prisma.PrismaPromise<GetContactsAggregateType<T>>

    /**
     * Group by Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsGroupByArgs} args - Group by arguments.
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
      T extends ContactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactsGroupByArgs['orderBy'] }
        : { orderBy?: ContactsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contacts model
   */
  readonly fields: ContactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Contacts model
   */ 
  interface ContactsFieldRefs {
    readonly id: FieldRef<"Contacts", 'Int'>
    readonly firstName: FieldRef<"Contacts", 'String'>
    readonly lastName: FieldRef<"Contacts", 'String'>
    readonly email: FieldRef<"Contacts", 'String'>
    readonly message: FieldRef<"Contacts", 'String'>
    readonly createdAt: FieldRef<"Contacts", 'DateTime'>
    readonly updatedAt: FieldRef<"Contacts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contacts findUnique
   */
  export type ContactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts findUniqueOrThrow
   */
  export type ContactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts findFirst
   */
  export type ContactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts findFirstOrThrow
   */
  export type ContactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts findMany
   */
  export type ContactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts create
   */
  export type ContactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * The data needed to create a Contacts.
     */
    data: XOR<ContactsCreateInput, ContactsUncheckedCreateInput>
  }

  /**
   * Contacts createMany
   */
  export type ContactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactsCreateManyInput | ContactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contacts createManyAndReturn
   */
  export type ContactsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactsCreateManyInput | ContactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contacts update
   */
  export type ContactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * The data needed to update a Contacts.
     */
    data: XOR<ContactsUpdateInput, ContactsUncheckedUpdateInput>
    /**
     * Choose, which Contacts to update.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts updateMany
   */
  export type ContactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactsUpdateManyMutationInput, ContactsUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactsWhereInput
  }

  /**
   * Contacts upsert
   */
  export type ContactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * The filter to search for the Contacts to update in case it exists.
     */
    where: ContactsWhereUniqueInput
    /**
     * In case the Contacts found by the `where` argument doesn't exist, create a new Contacts with this data.
     */
    create: XOR<ContactsCreateInput, ContactsUncheckedCreateInput>
    /**
     * In case the Contacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactsUpdateInput, ContactsUncheckedUpdateInput>
  }

  /**
   * Contacts delete
   */
  export type ContactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Filter which Contacts to delete.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts deleteMany
   */
  export type ContactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactsWhereInput
  }

  /**
   * Contacts without action
   */
  export type ContactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
  }


  /**
   * Model pdfSubjectiveQuestion
   */

  export type AggregatePdfSubjectiveQuestion = {
    _count: PdfSubjectiveQuestionCountAggregateOutputType | null
    _avg: PdfSubjectiveQuestionAvgAggregateOutputType | null
    _sum: PdfSubjectiveQuestionSumAggregateOutputType | null
    _min: PdfSubjectiveQuestionMinAggregateOutputType | null
    _max: PdfSubjectiveQuestionMaxAggregateOutputType | null
  }

  export type PdfSubjectiveQuestionAvgAggregateOutputType = {
    id: number | null
  }

  export type PdfSubjectiveQuestionSumAggregateOutputType = {
    id: number | null
  }

  export type PdfSubjectiveQuestionMinAggregateOutputType = {
    id: number | null
    fileName: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PdfSubjectiveQuestionMaxAggregateOutputType = {
    id: number | null
    fileName: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PdfSubjectiveQuestionCountAggregateOutputType = {
    id: number
    fileName: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PdfSubjectiveQuestionAvgAggregateInputType = {
    id?: true
  }

  export type PdfSubjectiveQuestionSumAggregateInputType = {
    id?: true
  }

  export type PdfSubjectiveQuestionMinAggregateInputType = {
    id?: true
    fileName?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PdfSubjectiveQuestionMaxAggregateInputType = {
    id?: true
    fileName?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PdfSubjectiveQuestionCountAggregateInputType = {
    id?: true
    fileName?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PdfSubjectiveQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pdfSubjectiveQuestion to aggregate.
     */
    where?: pdfSubjectiveQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pdfSubjectiveQuestions to fetch.
     */
    orderBy?: pdfSubjectiveQuestionOrderByWithRelationInput | pdfSubjectiveQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pdfSubjectiveQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pdfSubjectiveQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pdfSubjectiveQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pdfSubjectiveQuestions
    **/
    _count?: true | PdfSubjectiveQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PdfSubjectiveQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PdfSubjectiveQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PdfSubjectiveQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PdfSubjectiveQuestionMaxAggregateInputType
  }

  export type GetPdfSubjectiveQuestionAggregateType<T extends PdfSubjectiveQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregatePdfSubjectiveQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePdfSubjectiveQuestion[P]>
      : GetScalarType<T[P], AggregatePdfSubjectiveQuestion[P]>
  }




  export type pdfSubjectiveQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pdfSubjectiveQuestionWhereInput
    orderBy?: pdfSubjectiveQuestionOrderByWithAggregationInput | pdfSubjectiveQuestionOrderByWithAggregationInput[]
    by: PdfSubjectiveQuestionScalarFieldEnum[] | PdfSubjectiveQuestionScalarFieldEnum
    having?: pdfSubjectiveQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PdfSubjectiveQuestionCountAggregateInputType | true
    _avg?: PdfSubjectiveQuestionAvgAggregateInputType
    _sum?: PdfSubjectiveQuestionSumAggregateInputType
    _min?: PdfSubjectiveQuestionMinAggregateInputType
    _max?: PdfSubjectiveQuestionMaxAggregateInputType
  }

  export type PdfSubjectiveQuestionGroupByOutputType = {
    id: number
    fileName: string
    category: string
    createdAt: Date
    updatedAt: Date
    _count: PdfSubjectiveQuestionCountAggregateOutputType | null
    _avg: PdfSubjectiveQuestionAvgAggregateOutputType | null
    _sum: PdfSubjectiveQuestionSumAggregateOutputType | null
    _min: PdfSubjectiveQuestionMinAggregateOutputType | null
    _max: PdfSubjectiveQuestionMaxAggregateOutputType | null
  }

  type GetPdfSubjectiveQuestionGroupByPayload<T extends pdfSubjectiveQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PdfSubjectiveQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PdfSubjectiveQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PdfSubjectiveQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], PdfSubjectiveQuestionGroupByOutputType[P]>
        }
      >
    >


  export type pdfSubjectiveQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pdfSubjectiveQuestion"]>

  export type pdfSubjectiveQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pdfSubjectiveQuestion"]>

  export type pdfSubjectiveQuestionSelectScalar = {
    id?: boolean
    fileName?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $pdfSubjectiveQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pdfSubjectiveQuestion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileName: string
      category: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pdfSubjectiveQuestion"]>
    composites: {}
  }

  type pdfSubjectiveQuestionGetPayload<S extends boolean | null | undefined | pdfSubjectiveQuestionDefaultArgs> = $Result.GetResult<Prisma.$pdfSubjectiveQuestionPayload, S>

  type pdfSubjectiveQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pdfSubjectiveQuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PdfSubjectiveQuestionCountAggregateInputType | true
    }

  export interface pdfSubjectiveQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pdfSubjectiveQuestion'], meta: { name: 'pdfSubjectiveQuestion' } }
    /**
     * Find zero or one PdfSubjectiveQuestion that matches the filter.
     * @param {pdfSubjectiveQuestionFindUniqueArgs} args - Arguments to find a PdfSubjectiveQuestion
     * @example
     * // Get one PdfSubjectiveQuestion
     * const pdfSubjectiveQuestion = await prisma.pdfSubjectiveQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pdfSubjectiveQuestionFindUniqueArgs>(args: SelectSubset<T, pdfSubjectiveQuestionFindUniqueArgs<ExtArgs>>): Prisma__pdfSubjectiveQuestionClient<$Result.GetResult<Prisma.$pdfSubjectiveQuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PdfSubjectiveQuestion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {pdfSubjectiveQuestionFindUniqueOrThrowArgs} args - Arguments to find a PdfSubjectiveQuestion
     * @example
     * // Get one PdfSubjectiveQuestion
     * const pdfSubjectiveQuestion = await prisma.pdfSubjectiveQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pdfSubjectiveQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, pdfSubjectiveQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pdfSubjectiveQuestionClient<$Result.GetResult<Prisma.$pdfSubjectiveQuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PdfSubjectiveQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfSubjectiveQuestionFindFirstArgs} args - Arguments to find a PdfSubjectiveQuestion
     * @example
     * // Get one PdfSubjectiveQuestion
     * const pdfSubjectiveQuestion = await prisma.pdfSubjectiveQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pdfSubjectiveQuestionFindFirstArgs>(args?: SelectSubset<T, pdfSubjectiveQuestionFindFirstArgs<ExtArgs>>): Prisma__pdfSubjectiveQuestionClient<$Result.GetResult<Prisma.$pdfSubjectiveQuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PdfSubjectiveQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfSubjectiveQuestionFindFirstOrThrowArgs} args - Arguments to find a PdfSubjectiveQuestion
     * @example
     * // Get one PdfSubjectiveQuestion
     * const pdfSubjectiveQuestion = await prisma.pdfSubjectiveQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pdfSubjectiveQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, pdfSubjectiveQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__pdfSubjectiveQuestionClient<$Result.GetResult<Prisma.$pdfSubjectiveQuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PdfSubjectiveQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfSubjectiveQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PdfSubjectiveQuestions
     * const pdfSubjectiveQuestions = await prisma.pdfSubjectiveQuestion.findMany()
     * 
     * // Get first 10 PdfSubjectiveQuestions
     * const pdfSubjectiveQuestions = await prisma.pdfSubjectiveQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pdfSubjectiveQuestionWithIdOnly = await prisma.pdfSubjectiveQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pdfSubjectiveQuestionFindManyArgs>(args?: SelectSubset<T, pdfSubjectiveQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pdfSubjectiveQuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PdfSubjectiveQuestion.
     * @param {pdfSubjectiveQuestionCreateArgs} args - Arguments to create a PdfSubjectiveQuestion.
     * @example
     * // Create one PdfSubjectiveQuestion
     * const PdfSubjectiveQuestion = await prisma.pdfSubjectiveQuestion.create({
     *   data: {
     *     // ... data to create a PdfSubjectiveQuestion
     *   }
     * })
     * 
     */
    create<T extends pdfSubjectiveQuestionCreateArgs>(args: SelectSubset<T, pdfSubjectiveQuestionCreateArgs<ExtArgs>>): Prisma__pdfSubjectiveQuestionClient<$Result.GetResult<Prisma.$pdfSubjectiveQuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PdfSubjectiveQuestions.
     * @param {pdfSubjectiveQuestionCreateManyArgs} args - Arguments to create many PdfSubjectiveQuestions.
     * @example
     * // Create many PdfSubjectiveQuestions
     * const pdfSubjectiveQuestion = await prisma.pdfSubjectiveQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pdfSubjectiveQuestionCreateManyArgs>(args?: SelectSubset<T, pdfSubjectiveQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PdfSubjectiveQuestions and returns the data saved in the database.
     * @param {pdfSubjectiveQuestionCreateManyAndReturnArgs} args - Arguments to create many PdfSubjectiveQuestions.
     * @example
     * // Create many PdfSubjectiveQuestions
     * const pdfSubjectiveQuestion = await prisma.pdfSubjectiveQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PdfSubjectiveQuestions and only return the `id`
     * const pdfSubjectiveQuestionWithIdOnly = await prisma.pdfSubjectiveQuestion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pdfSubjectiveQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, pdfSubjectiveQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pdfSubjectiveQuestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PdfSubjectiveQuestion.
     * @param {pdfSubjectiveQuestionDeleteArgs} args - Arguments to delete one PdfSubjectiveQuestion.
     * @example
     * // Delete one PdfSubjectiveQuestion
     * const PdfSubjectiveQuestion = await prisma.pdfSubjectiveQuestion.delete({
     *   where: {
     *     // ... filter to delete one PdfSubjectiveQuestion
     *   }
     * })
     * 
     */
    delete<T extends pdfSubjectiveQuestionDeleteArgs>(args: SelectSubset<T, pdfSubjectiveQuestionDeleteArgs<ExtArgs>>): Prisma__pdfSubjectiveQuestionClient<$Result.GetResult<Prisma.$pdfSubjectiveQuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PdfSubjectiveQuestion.
     * @param {pdfSubjectiveQuestionUpdateArgs} args - Arguments to update one PdfSubjectiveQuestion.
     * @example
     * // Update one PdfSubjectiveQuestion
     * const pdfSubjectiveQuestion = await prisma.pdfSubjectiveQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pdfSubjectiveQuestionUpdateArgs>(args: SelectSubset<T, pdfSubjectiveQuestionUpdateArgs<ExtArgs>>): Prisma__pdfSubjectiveQuestionClient<$Result.GetResult<Prisma.$pdfSubjectiveQuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PdfSubjectiveQuestions.
     * @param {pdfSubjectiveQuestionDeleteManyArgs} args - Arguments to filter PdfSubjectiveQuestions to delete.
     * @example
     * // Delete a few PdfSubjectiveQuestions
     * const { count } = await prisma.pdfSubjectiveQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pdfSubjectiveQuestionDeleteManyArgs>(args?: SelectSubset<T, pdfSubjectiveQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PdfSubjectiveQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfSubjectiveQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PdfSubjectiveQuestions
     * const pdfSubjectiveQuestion = await prisma.pdfSubjectiveQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pdfSubjectiveQuestionUpdateManyArgs>(args: SelectSubset<T, pdfSubjectiveQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PdfSubjectiveQuestion.
     * @param {pdfSubjectiveQuestionUpsertArgs} args - Arguments to update or create a PdfSubjectiveQuestion.
     * @example
     * // Update or create a PdfSubjectiveQuestion
     * const pdfSubjectiveQuestion = await prisma.pdfSubjectiveQuestion.upsert({
     *   create: {
     *     // ... data to create a PdfSubjectiveQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PdfSubjectiveQuestion we want to update
     *   }
     * })
     */
    upsert<T extends pdfSubjectiveQuestionUpsertArgs>(args: SelectSubset<T, pdfSubjectiveQuestionUpsertArgs<ExtArgs>>): Prisma__pdfSubjectiveQuestionClient<$Result.GetResult<Prisma.$pdfSubjectiveQuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PdfSubjectiveQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfSubjectiveQuestionCountArgs} args - Arguments to filter PdfSubjectiveQuestions to count.
     * @example
     * // Count the number of PdfSubjectiveQuestions
     * const count = await prisma.pdfSubjectiveQuestion.count({
     *   where: {
     *     // ... the filter for the PdfSubjectiveQuestions we want to count
     *   }
     * })
    **/
    count<T extends pdfSubjectiveQuestionCountArgs>(
      args?: Subset<T, pdfSubjectiveQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PdfSubjectiveQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PdfSubjectiveQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PdfSubjectiveQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PdfSubjectiveQuestionAggregateArgs>(args: Subset<T, PdfSubjectiveQuestionAggregateArgs>): Prisma.PrismaPromise<GetPdfSubjectiveQuestionAggregateType<T>>

    /**
     * Group by PdfSubjectiveQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfSubjectiveQuestionGroupByArgs} args - Group by arguments.
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
      T extends pdfSubjectiveQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pdfSubjectiveQuestionGroupByArgs['orderBy'] }
        : { orderBy?: pdfSubjectiveQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pdfSubjectiveQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPdfSubjectiveQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pdfSubjectiveQuestion model
   */
  readonly fields: pdfSubjectiveQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pdfSubjectiveQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pdfSubjectiveQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the pdfSubjectiveQuestion model
   */ 
  interface pdfSubjectiveQuestionFieldRefs {
    readonly id: FieldRef<"pdfSubjectiveQuestion", 'Int'>
    readonly fileName: FieldRef<"pdfSubjectiveQuestion", 'String'>
    readonly category: FieldRef<"pdfSubjectiveQuestion", 'String'>
    readonly createdAt: FieldRef<"pdfSubjectiveQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"pdfSubjectiveQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pdfSubjectiveQuestion findUnique
   */
  export type pdfSubjectiveQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdfSubjectiveQuestion
     */
    select?: pdfSubjectiveQuestionSelect<ExtArgs> | null
    /**
     * Filter, which pdfSubjectiveQuestion to fetch.
     */
    where: pdfSubjectiveQuestionWhereUniqueInput
  }

  /**
   * pdfSubjectiveQuestion findUniqueOrThrow
   */
  export type pdfSubjectiveQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdfSubjectiveQuestion
     */
    select?: pdfSubjectiveQuestionSelect<ExtArgs> | null
    /**
     * Filter, which pdfSubjectiveQuestion to fetch.
     */
    where: pdfSubjectiveQuestionWhereUniqueInput
  }

  /**
   * pdfSubjectiveQuestion findFirst
   */
  export type pdfSubjectiveQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdfSubjectiveQuestion
     */
    select?: pdfSubjectiveQuestionSelect<ExtArgs> | null
    /**
     * Filter, which pdfSubjectiveQuestion to fetch.
     */
    where?: pdfSubjectiveQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pdfSubjectiveQuestions to fetch.
     */
    orderBy?: pdfSubjectiveQuestionOrderByWithRelationInput | pdfSubjectiveQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pdfSubjectiveQuestions.
     */
    cursor?: pdfSubjectiveQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pdfSubjectiveQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pdfSubjectiveQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pdfSubjectiveQuestions.
     */
    distinct?: PdfSubjectiveQuestionScalarFieldEnum | PdfSubjectiveQuestionScalarFieldEnum[]
  }

  /**
   * pdfSubjectiveQuestion findFirstOrThrow
   */
  export type pdfSubjectiveQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdfSubjectiveQuestion
     */
    select?: pdfSubjectiveQuestionSelect<ExtArgs> | null
    /**
     * Filter, which pdfSubjectiveQuestion to fetch.
     */
    where?: pdfSubjectiveQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pdfSubjectiveQuestions to fetch.
     */
    orderBy?: pdfSubjectiveQuestionOrderByWithRelationInput | pdfSubjectiveQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pdfSubjectiveQuestions.
     */
    cursor?: pdfSubjectiveQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pdfSubjectiveQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pdfSubjectiveQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pdfSubjectiveQuestions.
     */
    distinct?: PdfSubjectiveQuestionScalarFieldEnum | PdfSubjectiveQuestionScalarFieldEnum[]
  }

  /**
   * pdfSubjectiveQuestion findMany
   */
  export type pdfSubjectiveQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdfSubjectiveQuestion
     */
    select?: pdfSubjectiveQuestionSelect<ExtArgs> | null
    /**
     * Filter, which pdfSubjectiveQuestions to fetch.
     */
    where?: pdfSubjectiveQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pdfSubjectiveQuestions to fetch.
     */
    orderBy?: pdfSubjectiveQuestionOrderByWithRelationInput | pdfSubjectiveQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pdfSubjectiveQuestions.
     */
    cursor?: pdfSubjectiveQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pdfSubjectiveQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pdfSubjectiveQuestions.
     */
    skip?: number
    distinct?: PdfSubjectiveQuestionScalarFieldEnum | PdfSubjectiveQuestionScalarFieldEnum[]
  }

  /**
   * pdfSubjectiveQuestion create
   */
  export type pdfSubjectiveQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdfSubjectiveQuestion
     */
    select?: pdfSubjectiveQuestionSelect<ExtArgs> | null
    /**
     * The data needed to create a pdfSubjectiveQuestion.
     */
    data: XOR<pdfSubjectiveQuestionCreateInput, pdfSubjectiveQuestionUncheckedCreateInput>
  }

  /**
   * pdfSubjectiveQuestion createMany
   */
  export type pdfSubjectiveQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pdfSubjectiveQuestions.
     */
    data: pdfSubjectiveQuestionCreateManyInput | pdfSubjectiveQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pdfSubjectiveQuestion createManyAndReturn
   */
  export type pdfSubjectiveQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdfSubjectiveQuestion
     */
    select?: pdfSubjectiveQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many pdfSubjectiveQuestions.
     */
    data: pdfSubjectiveQuestionCreateManyInput | pdfSubjectiveQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pdfSubjectiveQuestion update
   */
  export type pdfSubjectiveQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdfSubjectiveQuestion
     */
    select?: pdfSubjectiveQuestionSelect<ExtArgs> | null
    /**
     * The data needed to update a pdfSubjectiveQuestion.
     */
    data: XOR<pdfSubjectiveQuestionUpdateInput, pdfSubjectiveQuestionUncheckedUpdateInput>
    /**
     * Choose, which pdfSubjectiveQuestion to update.
     */
    where: pdfSubjectiveQuestionWhereUniqueInput
  }

  /**
   * pdfSubjectiveQuestion updateMany
   */
  export type pdfSubjectiveQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pdfSubjectiveQuestions.
     */
    data: XOR<pdfSubjectiveQuestionUpdateManyMutationInput, pdfSubjectiveQuestionUncheckedUpdateManyInput>
    /**
     * Filter which pdfSubjectiveQuestions to update
     */
    where?: pdfSubjectiveQuestionWhereInput
  }

  /**
   * pdfSubjectiveQuestion upsert
   */
  export type pdfSubjectiveQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdfSubjectiveQuestion
     */
    select?: pdfSubjectiveQuestionSelect<ExtArgs> | null
    /**
     * The filter to search for the pdfSubjectiveQuestion to update in case it exists.
     */
    where: pdfSubjectiveQuestionWhereUniqueInput
    /**
     * In case the pdfSubjectiveQuestion found by the `where` argument doesn't exist, create a new pdfSubjectiveQuestion with this data.
     */
    create: XOR<pdfSubjectiveQuestionCreateInput, pdfSubjectiveQuestionUncheckedCreateInput>
    /**
     * In case the pdfSubjectiveQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pdfSubjectiveQuestionUpdateInput, pdfSubjectiveQuestionUncheckedUpdateInput>
  }

  /**
   * pdfSubjectiveQuestion delete
   */
  export type pdfSubjectiveQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdfSubjectiveQuestion
     */
    select?: pdfSubjectiveQuestionSelect<ExtArgs> | null
    /**
     * Filter which pdfSubjectiveQuestion to delete.
     */
    where: pdfSubjectiveQuestionWhereUniqueInput
  }

  /**
   * pdfSubjectiveQuestion deleteMany
   */
  export type pdfSubjectiveQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pdfSubjectiveQuestions to delete
     */
    where?: pdfSubjectiveQuestionWhereInput
  }

  /**
   * pdfSubjectiveQuestion without action
   */
  export type pdfSubjectiveQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdfSubjectiveQuestion
     */
    select?: pdfSubjectiveQuestionSelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    prepassword: 'prepassword',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    question: 'question',
    descripton: 'descripton',
    answer: 'answer',
    category: 'category',
    createdAt: 'createdAt'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const OptionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    quizId: 'quizId'
  };

  export type OptionScalarFieldEnum = (typeof OptionScalarFieldEnum)[keyof typeof OptionScalarFieldEnum]


  export const UserDetailsScoreScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    quizId: 'quizId',
    score: 'score',
    createdAt: 'createdAt'
  };

  export type UserDetailsScoreScalarFieldEnum = (typeof UserDetailsScoreScalarFieldEnum)[keyof typeof UserDetailsScoreScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    image: 'image',
    heading: 'heading',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const ShortcutKeyScalarFieldEnum: {
    id: 'id',
    keyCombo: 'keyCombo',
    description: 'description',
    category: 'category',
    createdAt: 'createdAt'
  };

  export type ShortcutKeyScalarFieldEnum = (typeof ShortcutKeyScalarFieldEnum)[keyof typeof ShortcutKeyScalarFieldEnum]


  export const FullFormScalarFieldEnum: {
    id: 'id',
    acronym: 'acronym',
    fullForm: 'fullForm',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type FullFormScalarFieldEnum = (typeof FullFormScalarFieldEnum)[keyof typeof FullFormScalarFieldEnum]


  export const SubjectiveQuestionScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answer: 'answer',
    category: 'category',
    category2: 'category2',
    createdAt: 'createdAt'
  };

  export type SubjectiveQuestionScalarFieldEnum = (typeof SubjectiveQuestionScalarFieldEnum)[keyof typeof SubjectiveQuestionScalarFieldEnum]


  export const SubjectiveQuestionOnlyScalarFieldEnum: {
    id: 'id',
    question: 'question',
    category: 'category',
    category1: 'category1',
    createdAd: 'createdAd'
  };

  export type SubjectiveQuestionOnlyScalarFieldEnum = (typeof SubjectiveQuestionOnlyScalarFieldEnum)[keyof typeof SubjectiveQuestionOnlyScalarFieldEnum]


  export const NewsBlogScalarFieldEnum: {
    id: 'id',
    image: 'image',
    heading: 'heading',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsBlogScalarFieldEnum = (typeof NewsBlogScalarFieldEnum)[keyof typeof NewsBlogScalarFieldEnum]


  export const ContactsScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactsScalarFieldEnum = (typeof ContactsScalarFieldEnum)[keyof typeof ContactsScalarFieldEnum]


  export const PdfSubjectiveQuestionScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PdfSubjectiveQuestionScalarFieldEnum = (typeof PdfSubjectiveQuestionScalarFieldEnum)[keyof typeof PdfSubjectiveQuestionScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    prepassword?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userScores?: UserDetailsScoreListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    prepassword?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userScores?: UserDetailsScoreOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    prepassword?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userScores?: UserDetailsScoreListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    prepassword?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    prepassword?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: IntFilter<"Quiz"> | number
    question?: StringFilter<"Quiz"> | string
    descripton?: StringNullableFilter<"Quiz"> | string | null
    answer?: StringFilter<"Quiz"> | string
    category?: StringFilter<"Quiz"> | string
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    options?: OptionListRelationFilter
    userScores?: UserDetailsScoreListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    descripton?: SortOrderInput | SortOrder
    answer?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    options?: OptionOrderByRelationAggregateInput
    userScores?: UserDetailsScoreOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    question?: StringFilter<"Quiz"> | string
    descripton?: StringNullableFilter<"Quiz"> | string | null
    answer?: StringFilter<"Quiz"> | string
    category?: StringFilter<"Quiz"> | string
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    options?: OptionListRelationFilter
    userScores?: UserDetailsScoreListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    descripton?: SortOrderInput | SortOrder
    answer?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Quiz"> | number
    question?: StringWithAggregatesFilter<"Quiz"> | string
    descripton?: StringNullableWithAggregatesFilter<"Quiz"> | string | null
    answer?: StringWithAggregatesFilter<"Quiz"> | string
    category?: StringWithAggregatesFilter<"Quiz"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
  }

  export type OptionWhereInput = {
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    id?: IntFilter<"Option"> | number
    text?: StringFilter<"Option"> | string
    quizId?: IntFilter<"Option"> | number
    quiz?: XOR<QuizRelationFilter, QuizWhereInput>
  }

  export type OptionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    quizId?: SortOrder
    quiz?: QuizOrderByWithRelationInput
  }

  export type OptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    text?: StringFilter<"Option"> | string
    quizId?: IntFilter<"Option"> | number
    quiz?: XOR<QuizRelationFilter, QuizWhereInput>
  }, "id">

  export type OptionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    quizId?: SortOrder
    _count?: OptionCountOrderByAggregateInput
    _avg?: OptionAvgOrderByAggregateInput
    _max?: OptionMaxOrderByAggregateInput
    _min?: OptionMinOrderByAggregateInput
    _sum?: OptionSumOrderByAggregateInput
  }

  export type OptionScalarWhereWithAggregatesInput = {
    AND?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    OR?: OptionScalarWhereWithAggregatesInput[]
    NOT?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Option"> | number
    text?: StringWithAggregatesFilter<"Option"> | string
    quizId?: IntWithAggregatesFilter<"Option"> | number
  }

  export type UserDetailsScoreWhereInput = {
    AND?: UserDetailsScoreWhereInput | UserDetailsScoreWhereInput[]
    OR?: UserDetailsScoreWhereInput[]
    NOT?: UserDetailsScoreWhereInput | UserDetailsScoreWhereInput[]
    id?: IntFilter<"UserDetailsScore"> | number
    userId?: IntFilter<"UserDetailsScore"> | number
    quizId?: IntFilter<"UserDetailsScore"> | number
    score?: IntFilter<"UserDetailsScore"> | number
    createdAt?: DateTimeFilter<"UserDetailsScore"> | Date | string
    quiz?: XOR<QuizRelationFilter, QuizWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserDetailsScoreOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserDetailsScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserDetailsScoreWhereInput | UserDetailsScoreWhereInput[]
    OR?: UserDetailsScoreWhereInput[]
    NOT?: UserDetailsScoreWhereInput | UserDetailsScoreWhereInput[]
    userId?: IntFilter<"UserDetailsScore"> | number
    quizId?: IntFilter<"UserDetailsScore"> | number
    score?: IntFilter<"UserDetailsScore"> | number
    createdAt?: DateTimeFilter<"UserDetailsScore"> | Date | string
    quiz?: XOR<QuizRelationFilter, QuizWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type UserDetailsScoreOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    _count?: UserDetailsScoreCountOrderByAggregateInput
    _avg?: UserDetailsScoreAvgOrderByAggregateInput
    _max?: UserDetailsScoreMaxOrderByAggregateInput
    _min?: UserDetailsScoreMinOrderByAggregateInput
    _sum?: UserDetailsScoreSumOrderByAggregateInput
  }

  export type UserDetailsScoreScalarWhereWithAggregatesInput = {
    AND?: UserDetailsScoreScalarWhereWithAggregatesInput | UserDetailsScoreScalarWhereWithAggregatesInput[]
    OR?: UserDetailsScoreScalarWhereWithAggregatesInput[]
    NOT?: UserDetailsScoreScalarWhereWithAggregatesInput | UserDetailsScoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserDetailsScore"> | number
    userId?: IntWithAggregatesFilter<"UserDetailsScore"> | number
    quizId?: IntWithAggregatesFilter<"UserDetailsScore"> | number
    score?: IntWithAggregatesFilter<"UserDetailsScore"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserDetailsScore"> | Date | string
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: IntFilter<"News"> | number
    image?: StringFilter<"News"> | string
    heading?: StringFilter<"News"> | string
    description?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    heading?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    image?: StringFilter<"News"> | string
    heading?: StringFilter<"News"> | string
    description?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
  }, "id">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    heading?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _avg?: NewsAvgOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
    _sum?: NewsSumOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"News"> | number
    image?: StringWithAggregatesFilter<"News"> | string
    heading?: StringWithAggregatesFilter<"News"> | string
    description?: StringWithAggregatesFilter<"News"> | string
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
  }

  export type ShortcutKeyWhereInput = {
    AND?: ShortcutKeyWhereInput | ShortcutKeyWhereInput[]
    OR?: ShortcutKeyWhereInput[]
    NOT?: ShortcutKeyWhereInput | ShortcutKeyWhereInput[]
    id?: IntFilter<"ShortcutKey"> | number
    keyCombo?: StringFilter<"ShortcutKey"> | string
    description?: StringFilter<"ShortcutKey"> | string
    category?: StringNullableFilter<"ShortcutKey"> | string | null
    createdAt?: DateTimeFilter<"ShortcutKey"> | Date | string
  }

  export type ShortcutKeyOrderByWithRelationInput = {
    id?: SortOrder
    keyCombo?: SortOrder
    description?: SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ShortcutKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    keyCombo?: string
    AND?: ShortcutKeyWhereInput | ShortcutKeyWhereInput[]
    OR?: ShortcutKeyWhereInput[]
    NOT?: ShortcutKeyWhereInput | ShortcutKeyWhereInput[]
    description?: StringFilter<"ShortcutKey"> | string
    category?: StringNullableFilter<"ShortcutKey"> | string | null
    createdAt?: DateTimeFilter<"ShortcutKey"> | Date | string
  }, "id" | "keyCombo">

  export type ShortcutKeyOrderByWithAggregationInput = {
    id?: SortOrder
    keyCombo?: SortOrder
    description?: SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ShortcutKeyCountOrderByAggregateInput
    _avg?: ShortcutKeyAvgOrderByAggregateInput
    _max?: ShortcutKeyMaxOrderByAggregateInput
    _min?: ShortcutKeyMinOrderByAggregateInput
    _sum?: ShortcutKeySumOrderByAggregateInput
  }

  export type ShortcutKeyScalarWhereWithAggregatesInput = {
    AND?: ShortcutKeyScalarWhereWithAggregatesInput | ShortcutKeyScalarWhereWithAggregatesInput[]
    OR?: ShortcutKeyScalarWhereWithAggregatesInput[]
    NOT?: ShortcutKeyScalarWhereWithAggregatesInput | ShortcutKeyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShortcutKey"> | number
    keyCombo?: StringWithAggregatesFilter<"ShortcutKey"> | string
    description?: StringWithAggregatesFilter<"ShortcutKey"> | string
    category?: StringNullableWithAggregatesFilter<"ShortcutKey"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ShortcutKey"> | Date | string
  }

  export type FullFormWhereInput = {
    AND?: FullFormWhereInput | FullFormWhereInput[]
    OR?: FullFormWhereInput[]
    NOT?: FullFormWhereInput | FullFormWhereInput[]
    id?: IntFilter<"FullForm"> | number
    acronym?: StringFilter<"FullForm"> | string
    fullForm?: StringFilter<"FullForm"> | string
    description?: StringNullableFilter<"FullForm"> | string | null
    createdAt?: DateTimeFilter<"FullForm"> | Date | string
  }

  export type FullFormOrderByWithRelationInput = {
    id?: SortOrder
    acronym?: SortOrder
    fullForm?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type FullFormWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    acronym?: string
    AND?: FullFormWhereInput | FullFormWhereInput[]
    OR?: FullFormWhereInput[]
    NOT?: FullFormWhereInput | FullFormWhereInput[]
    fullForm?: StringFilter<"FullForm"> | string
    description?: StringNullableFilter<"FullForm"> | string | null
    createdAt?: DateTimeFilter<"FullForm"> | Date | string
  }, "id" | "acronym">

  export type FullFormOrderByWithAggregationInput = {
    id?: SortOrder
    acronym?: SortOrder
    fullForm?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FullFormCountOrderByAggregateInput
    _avg?: FullFormAvgOrderByAggregateInput
    _max?: FullFormMaxOrderByAggregateInput
    _min?: FullFormMinOrderByAggregateInput
    _sum?: FullFormSumOrderByAggregateInput
  }

  export type FullFormScalarWhereWithAggregatesInput = {
    AND?: FullFormScalarWhereWithAggregatesInput | FullFormScalarWhereWithAggregatesInput[]
    OR?: FullFormScalarWhereWithAggregatesInput[]
    NOT?: FullFormScalarWhereWithAggregatesInput | FullFormScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FullForm"> | number
    acronym?: StringWithAggregatesFilter<"FullForm"> | string
    fullForm?: StringWithAggregatesFilter<"FullForm"> | string
    description?: StringNullableWithAggregatesFilter<"FullForm"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FullForm"> | Date | string
  }

  export type SubjectiveQuestionWhereInput = {
    AND?: SubjectiveQuestionWhereInput | SubjectiveQuestionWhereInput[]
    OR?: SubjectiveQuestionWhereInput[]
    NOT?: SubjectiveQuestionWhereInput | SubjectiveQuestionWhereInput[]
    id?: IntFilter<"SubjectiveQuestion"> | number
    question?: StringFilter<"SubjectiveQuestion"> | string
    answer?: StringFilter<"SubjectiveQuestion"> | string
    category?: StringNullableFilter<"SubjectiveQuestion"> | string | null
    category2?: StringFilter<"SubjectiveQuestion"> | string
    createdAt?: DateTimeFilter<"SubjectiveQuestion"> | Date | string
  }

  export type SubjectiveQuestionOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    category?: SortOrderInput | SortOrder
    category2?: SortOrder
    createdAt?: SortOrder
  }

  export type SubjectiveQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    question?: string
    AND?: SubjectiveQuestionWhereInput | SubjectiveQuestionWhereInput[]
    OR?: SubjectiveQuestionWhereInput[]
    NOT?: SubjectiveQuestionWhereInput | SubjectiveQuestionWhereInput[]
    answer?: StringFilter<"SubjectiveQuestion"> | string
    category?: StringNullableFilter<"SubjectiveQuestion"> | string | null
    category2?: StringFilter<"SubjectiveQuestion"> | string
    createdAt?: DateTimeFilter<"SubjectiveQuestion"> | Date | string
  }, "id" | "question">

  export type SubjectiveQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    category?: SortOrderInput | SortOrder
    category2?: SortOrder
    createdAt?: SortOrder
    _count?: SubjectiveQuestionCountOrderByAggregateInput
    _avg?: SubjectiveQuestionAvgOrderByAggregateInput
    _max?: SubjectiveQuestionMaxOrderByAggregateInput
    _min?: SubjectiveQuestionMinOrderByAggregateInput
    _sum?: SubjectiveQuestionSumOrderByAggregateInput
  }

  export type SubjectiveQuestionScalarWhereWithAggregatesInput = {
    AND?: SubjectiveQuestionScalarWhereWithAggregatesInput | SubjectiveQuestionScalarWhereWithAggregatesInput[]
    OR?: SubjectiveQuestionScalarWhereWithAggregatesInput[]
    NOT?: SubjectiveQuestionScalarWhereWithAggregatesInput | SubjectiveQuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubjectiveQuestion"> | number
    question?: StringWithAggregatesFilter<"SubjectiveQuestion"> | string
    answer?: StringWithAggregatesFilter<"SubjectiveQuestion"> | string
    category?: StringNullableWithAggregatesFilter<"SubjectiveQuestion"> | string | null
    category2?: StringWithAggregatesFilter<"SubjectiveQuestion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SubjectiveQuestion"> | Date | string
  }

  export type SubjectiveQuestionOnlyWhereInput = {
    AND?: SubjectiveQuestionOnlyWhereInput | SubjectiveQuestionOnlyWhereInput[]
    OR?: SubjectiveQuestionOnlyWhereInput[]
    NOT?: SubjectiveQuestionOnlyWhereInput | SubjectiveQuestionOnlyWhereInput[]
    id?: IntFilter<"SubjectiveQuestionOnly"> | number
    question?: StringFilter<"SubjectiveQuestionOnly"> | string
    category?: StringFilter<"SubjectiveQuestionOnly"> | string
    category1?: StringFilter<"SubjectiveQuestionOnly"> | string
    createdAd?: DateTimeFilter<"SubjectiveQuestionOnly"> | Date | string
  }

  export type SubjectiveQuestionOnlyOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    category?: SortOrder
    category1?: SortOrder
    createdAd?: SortOrder
  }

  export type SubjectiveQuestionOnlyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    question?: string
    AND?: SubjectiveQuestionOnlyWhereInput | SubjectiveQuestionOnlyWhereInput[]
    OR?: SubjectiveQuestionOnlyWhereInput[]
    NOT?: SubjectiveQuestionOnlyWhereInput | SubjectiveQuestionOnlyWhereInput[]
    category?: StringFilter<"SubjectiveQuestionOnly"> | string
    category1?: StringFilter<"SubjectiveQuestionOnly"> | string
    createdAd?: DateTimeFilter<"SubjectiveQuestionOnly"> | Date | string
  }, "id" | "question">

  export type SubjectiveQuestionOnlyOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    category?: SortOrder
    category1?: SortOrder
    createdAd?: SortOrder
    _count?: SubjectiveQuestionOnlyCountOrderByAggregateInput
    _avg?: SubjectiveQuestionOnlyAvgOrderByAggregateInput
    _max?: SubjectiveQuestionOnlyMaxOrderByAggregateInput
    _min?: SubjectiveQuestionOnlyMinOrderByAggregateInput
    _sum?: SubjectiveQuestionOnlySumOrderByAggregateInput
  }

  export type SubjectiveQuestionOnlyScalarWhereWithAggregatesInput = {
    AND?: SubjectiveQuestionOnlyScalarWhereWithAggregatesInput | SubjectiveQuestionOnlyScalarWhereWithAggregatesInput[]
    OR?: SubjectiveQuestionOnlyScalarWhereWithAggregatesInput[]
    NOT?: SubjectiveQuestionOnlyScalarWhereWithAggregatesInput | SubjectiveQuestionOnlyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubjectiveQuestionOnly"> | number
    question?: StringWithAggregatesFilter<"SubjectiveQuestionOnly"> | string
    category?: StringWithAggregatesFilter<"SubjectiveQuestionOnly"> | string
    category1?: StringWithAggregatesFilter<"SubjectiveQuestionOnly"> | string
    createdAd?: DateTimeWithAggregatesFilter<"SubjectiveQuestionOnly"> | Date | string
  }

  export type NewsBlogWhereInput = {
    AND?: NewsBlogWhereInput | NewsBlogWhereInput[]
    OR?: NewsBlogWhereInput[]
    NOT?: NewsBlogWhereInput | NewsBlogWhereInput[]
    id?: IntFilter<"NewsBlog"> | number
    image?: StringFilter<"NewsBlog"> | string
    heading?: StringFilter<"NewsBlog"> | string
    description?: StringFilter<"NewsBlog"> | string
    createdAt?: DateTimeFilter<"NewsBlog"> | Date | string
    updatedAt?: DateTimeFilter<"NewsBlog"> | Date | string
  }

  export type NewsBlogOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    heading?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsBlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    heading?: string
    AND?: NewsBlogWhereInput | NewsBlogWhereInput[]
    OR?: NewsBlogWhereInput[]
    NOT?: NewsBlogWhereInput | NewsBlogWhereInput[]
    image?: StringFilter<"NewsBlog"> | string
    description?: StringFilter<"NewsBlog"> | string
    createdAt?: DateTimeFilter<"NewsBlog"> | Date | string
    updatedAt?: DateTimeFilter<"NewsBlog"> | Date | string
  }, "id" | "heading">

  export type NewsBlogOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    heading?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsBlogCountOrderByAggregateInput
    _avg?: NewsBlogAvgOrderByAggregateInput
    _max?: NewsBlogMaxOrderByAggregateInput
    _min?: NewsBlogMinOrderByAggregateInput
    _sum?: NewsBlogSumOrderByAggregateInput
  }

  export type NewsBlogScalarWhereWithAggregatesInput = {
    AND?: NewsBlogScalarWhereWithAggregatesInput | NewsBlogScalarWhereWithAggregatesInput[]
    OR?: NewsBlogScalarWhereWithAggregatesInput[]
    NOT?: NewsBlogScalarWhereWithAggregatesInput | NewsBlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NewsBlog"> | number
    image?: StringWithAggregatesFilter<"NewsBlog"> | string
    heading?: StringWithAggregatesFilter<"NewsBlog"> | string
    description?: StringWithAggregatesFilter<"NewsBlog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsBlog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewsBlog"> | Date | string
  }

  export type ContactsWhereInput = {
    AND?: ContactsWhereInput | ContactsWhereInput[]
    OR?: ContactsWhereInput[]
    NOT?: ContactsWhereInput | ContactsWhereInput[]
    id?: IntFilter<"Contacts"> | number
    firstName?: StringFilter<"Contacts"> | string
    lastName?: StringFilter<"Contacts"> | string
    email?: StringFilter<"Contacts"> | string
    message?: StringFilter<"Contacts"> | string
    createdAt?: DateTimeFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeFilter<"Contacts"> | Date | string
  }

  export type ContactsOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactsWhereInput | ContactsWhereInput[]
    OR?: ContactsWhereInput[]
    NOT?: ContactsWhereInput | ContactsWhereInput[]
    firstName?: StringFilter<"Contacts"> | string
    lastName?: StringFilter<"Contacts"> | string
    email?: StringFilter<"Contacts"> | string
    message?: StringFilter<"Contacts"> | string
    createdAt?: DateTimeFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeFilter<"Contacts"> | Date | string
  }, "id">

  export type ContactsOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactsCountOrderByAggregateInput
    _avg?: ContactsAvgOrderByAggregateInput
    _max?: ContactsMaxOrderByAggregateInput
    _min?: ContactsMinOrderByAggregateInput
    _sum?: ContactsSumOrderByAggregateInput
  }

  export type ContactsScalarWhereWithAggregatesInput = {
    AND?: ContactsScalarWhereWithAggregatesInput | ContactsScalarWhereWithAggregatesInput[]
    OR?: ContactsScalarWhereWithAggregatesInput[]
    NOT?: ContactsScalarWhereWithAggregatesInput | ContactsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contacts"> | number
    firstName?: StringWithAggregatesFilter<"Contacts"> | string
    lastName?: StringWithAggregatesFilter<"Contacts"> | string
    email?: StringWithAggregatesFilter<"Contacts"> | string
    message?: StringWithAggregatesFilter<"Contacts"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contacts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contacts"> | Date | string
  }

  export type pdfSubjectiveQuestionWhereInput = {
    AND?: pdfSubjectiveQuestionWhereInput | pdfSubjectiveQuestionWhereInput[]
    OR?: pdfSubjectiveQuestionWhereInput[]
    NOT?: pdfSubjectiveQuestionWhereInput | pdfSubjectiveQuestionWhereInput[]
    id?: IntFilter<"pdfSubjectiveQuestion"> | number
    fileName?: StringFilter<"pdfSubjectiveQuestion"> | string
    category?: StringFilter<"pdfSubjectiveQuestion"> | string
    createdAt?: DateTimeFilter<"pdfSubjectiveQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"pdfSubjectiveQuestion"> | Date | string
  }

  export type pdfSubjectiveQuestionOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type pdfSubjectiveQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pdfSubjectiveQuestionWhereInput | pdfSubjectiveQuestionWhereInput[]
    OR?: pdfSubjectiveQuestionWhereInput[]
    NOT?: pdfSubjectiveQuestionWhereInput | pdfSubjectiveQuestionWhereInput[]
    fileName?: StringFilter<"pdfSubjectiveQuestion"> | string
    category?: StringFilter<"pdfSubjectiveQuestion"> | string
    createdAt?: DateTimeFilter<"pdfSubjectiveQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"pdfSubjectiveQuestion"> | Date | string
  }, "id">

  export type pdfSubjectiveQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: pdfSubjectiveQuestionCountOrderByAggregateInput
    _avg?: pdfSubjectiveQuestionAvgOrderByAggregateInput
    _max?: pdfSubjectiveQuestionMaxOrderByAggregateInput
    _min?: pdfSubjectiveQuestionMinOrderByAggregateInput
    _sum?: pdfSubjectiveQuestionSumOrderByAggregateInput
  }

  export type pdfSubjectiveQuestionScalarWhereWithAggregatesInput = {
    AND?: pdfSubjectiveQuestionScalarWhereWithAggregatesInput | pdfSubjectiveQuestionScalarWhereWithAggregatesInput[]
    OR?: pdfSubjectiveQuestionScalarWhereWithAggregatesInput[]
    NOT?: pdfSubjectiveQuestionScalarWhereWithAggregatesInput | pdfSubjectiveQuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pdfSubjectiveQuestion"> | number
    fileName?: StringWithAggregatesFilter<"pdfSubjectiveQuestion"> | string
    category?: StringWithAggregatesFilter<"pdfSubjectiveQuestion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"pdfSubjectiveQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"pdfSubjectiveQuestion"> | Date | string
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    prepassword: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userScores?: UserDetailsScoreCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    prepassword: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userScores?: UserDetailsScoreUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    prepassword?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userScores?: UserDetailsScoreUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    prepassword?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userScores?: UserDetailsScoreUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    prepassword: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    prepassword?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    prepassword?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateInput = {
    question: string
    descripton?: string | null
    answer: string
    category: string
    createdAt?: Date | string
    options?: OptionCreateNestedManyWithoutQuizInput
    userScores?: UserDetailsScoreCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: number
    question: string
    descripton?: string | null
    answer: string
    category: string
    createdAt?: Date | string
    options?: OptionUncheckedCreateNestedManyWithoutQuizInput
    userScores?: UserDetailsScoreUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    descripton?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionUpdateManyWithoutQuizNestedInput
    userScores?: UserDetailsScoreUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    descripton?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionUncheckedUpdateManyWithoutQuizNestedInput
    userScores?: UserDetailsScoreUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: number
    question: string
    descripton?: string | null
    answer: string
    category: string
    createdAt?: Date | string
  }

  export type QuizUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    descripton?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    descripton?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionCreateInput = {
    text: string
    quiz: QuizCreateNestedOneWithoutOptionsInput
  }

  export type OptionUncheckedCreateInput = {
    id?: number
    text: string
    quizId: number
  }

  export type OptionUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    quiz?: QuizUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type OptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    quizId?: IntFieldUpdateOperationsInput | number
  }

  export type OptionCreateManyInput = {
    id?: number
    text: string
    quizId: number
  }

  export type OptionUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type OptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    quizId?: IntFieldUpdateOperationsInput | number
  }

  export type UserDetailsScoreCreateInput = {
    score: number
    createdAt?: Date | string
    quiz: QuizCreateNestedOneWithoutUserScoresInput
    user: UserCreateNestedOneWithoutUserScoresInput
  }

  export type UserDetailsScoreUncheckedCreateInput = {
    id?: number
    userId: number
    quizId: number
    score: number
    createdAt?: Date | string
  }

  export type UserDetailsScoreUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutUserScoresNestedInput
    user?: UserUpdateOneRequiredWithoutUserScoresNestedInput
  }

  export type UserDetailsScoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDetailsScoreCreateManyInput = {
    id?: number
    userId: number
    quizId: number
    score: number
    createdAt?: Date | string
  }

  export type UserDetailsScoreUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDetailsScoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateInput = {
    image: string
    heading: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUncheckedCreateInput = {
    id?: number
    image: string
    heading: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyInput = {
    id?: number
    image: string
    heading: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShortcutKeyCreateInput = {
    keyCombo: string
    description: string
    category?: string | null
    createdAt?: Date | string
  }

  export type ShortcutKeyUncheckedCreateInput = {
    id?: number
    keyCombo: string
    description: string
    category?: string | null
    createdAt?: Date | string
  }

  export type ShortcutKeyUpdateInput = {
    keyCombo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShortcutKeyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyCombo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShortcutKeyCreateManyInput = {
    id?: number
    keyCombo: string
    description: string
    category?: string | null
    createdAt?: Date | string
  }

  export type ShortcutKeyUpdateManyMutationInput = {
    keyCombo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShortcutKeyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyCombo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FullFormCreateInput = {
    acronym: string
    fullForm: string
    description?: string | null
    createdAt?: Date | string
  }

  export type FullFormUncheckedCreateInput = {
    id?: number
    acronym: string
    fullForm: string
    description?: string | null
    createdAt?: Date | string
  }

  export type FullFormUpdateInput = {
    acronym?: StringFieldUpdateOperationsInput | string
    fullForm?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FullFormUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    acronym?: StringFieldUpdateOperationsInput | string
    fullForm?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FullFormCreateManyInput = {
    id?: number
    acronym: string
    fullForm: string
    description?: string | null
    createdAt?: Date | string
  }

  export type FullFormUpdateManyMutationInput = {
    acronym?: StringFieldUpdateOperationsInput | string
    fullForm?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FullFormUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    acronym?: StringFieldUpdateOperationsInput | string
    fullForm?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectiveQuestionCreateInput = {
    question: string
    answer: string
    category?: string | null
    category2: string
    createdAt?: Date | string
  }

  export type SubjectiveQuestionUncheckedCreateInput = {
    id?: number
    question: string
    answer: string
    category?: string | null
    category2: string
    createdAt?: Date | string
  }

  export type SubjectiveQuestionUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    category2?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectiveQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    category2?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectiveQuestionCreateManyInput = {
    id?: number
    question: string
    answer: string
    category?: string | null
    category2: string
    createdAt?: Date | string
  }

  export type SubjectiveQuestionUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    category2?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectiveQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    category2?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectiveQuestionOnlyCreateInput = {
    question: string
    category: string
    category1: string
    createdAd?: Date | string
  }

  export type SubjectiveQuestionOnlyUncheckedCreateInput = {
    id?: number
    question: string
    category: string
    category1: string
    createdAd?: Date | string
  }

  export type SubjectiveQuestionOnlyUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    category1?: StringFieldUpdateOperationsInput | string
    createdAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectiveQuestionOnlyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    category1?: StringFieldUpdateOperationsInput | string
    createdAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectiveQuestionOnlyCreateManyInput = {
    id?: number
    question: string
    category: string
    category1: string
    createdAd?: Date | string
  }

  export type SubjectiveQuestionOnlyUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    category1?: StringFieldUpdateOperationsInput | string
    createdAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectiveQuestionOnlyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    category1?: StringFieldUpdateOperationsInput | string
    createdAd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsBlogCreateInput = {
    image: string
    heading: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsBlogUncheckedCreateInput = {
    id?: number
    image: string
    heading: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsBlogUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsBlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsBlogCreateManyInput = {
    id?: number
    image: string
    heading: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsBlogUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsBlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsCreateInput = {
    firstName: string
    lastName: string
    email: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactsUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactsUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactsUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pdfSubjectiveQuestionCreateInput = {
    fileName: string
    category: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type pdfSubjectiveQuestionUncheckedCreateInput = {
    id?: number
    fileName: string
    category: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type pdfSubjectiveQuestionUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pdfSubjectiveQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pdfSubjectiveQuestionCreateManyInput = {
    id?: number
    fileName: string
    category: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type pdfSubjectiveQuestionUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pdfSubjectiveQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserDetailsScoreListRelationFilter = {
    every?: UserDetailsScoreWhereInput
    some?: UserDetailsScoreWhereInput
    none?: UserDetailsScoreWhereInput
  }

  export type UserDetailsScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    prepassword?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    prepassword?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    prepassword?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type OptionListRelationFilter = {
    every?: OptionWhereInput
    some?: OptionWhereInput
    none?: OptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    descripton?: SortOrder
    answer?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    descripton?: SortOrder
    answer?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    descripton?: SortOrder
    answer?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type QuizRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type OptionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    quizId?: SortOrder
  }

  export type OptionAvgOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type OptionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    quizId?: SortOrder
  }

  export type OptionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    quizId?: SortOrder
  }

  export type OptionSumOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserDetailsScoreCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type UserDetailsScoreAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
  }

  export type UserDetailsScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type UserDetailsScoreMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type UserDetailsScoreSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    score?: SortOrder
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    heading?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    heading?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    heading?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShortcutKeyCountOrderByAggregateInput = {
    id?: SortOrder
    keyCombo?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type ShortcutKeyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShortcutKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    keyCombo?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type ShortcutKeyMinOrderByAggregateInput = {
    id?: SortOrder
    keyCombo?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type ShortcutKeySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FullFormCountOrderByAggregateInput = {
    id?: SortOrder
    acronym?: SortOrder
    fullForm?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type FullFormAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FullFormMaxOrderByAggregateInput = {
    id?: SortOrder
    acronym?: SortOrder
    fullForm?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type FullFormMinOrderByAggregateInput = {
    id?: SortOrder
    acronym?: SortOrder
    fullForm?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type FullFormSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubjectiveQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    category?: SortOrder
    category2?: SortOrder
    createdAt?: SortOrder
  }

  export type SubjectiveQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubjectiveQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    category?: SortOrder
    category2?: SortOrder
    createdAt?: SortOrder
  }

  export type SubjectiveQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    category?: SortOrder
    category2?: SortOrder
    createdAt?: SortOrder
  }

  export type SubjectiveQuestionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubjectiveQuestionOnlyCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    category?: SortOrder
    category1?: SortOrder
    createdAd?: SortOrder
  }

  export type SubjectiveQuestionOnlyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubjectiveQuestionOnlyMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    category?: SortOrder
    category1?: SortOrder
    createdAd?: SortOrder
  }

  export type SubjectiveQuestionOnlyMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    category?: SortOrder
    category1?: SortOrder
    createdAd?: SortOrder
  }

  export type SubjectiveQuestionOnlySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsBlogCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    heading?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsBlogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsBlogMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    heading?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsBlogMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    heading?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsBlogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactsCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactsMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactsMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type pdfSubjectiveQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type pdfSubjectiveQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type pdfSubjectiveQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type pdfSubjectiveQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type pdfSubjectiveQuestionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserDetailsScoreCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDetailsScoreCreateWithoutUserInput, UserDetailsScoreUncheckedCreateWithoutUserInput> | UserDetailsScoreCreateWithoutUserInput[] | UserDetailsScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDetailsScoreCreateOrConnectWithoutUserInput | UserDetailsScoreCreateOrConnectWithoutUserInput[]
    createMany?: UserDetailsScoreCreateManyUserInputEnvelope
    connect?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
  }

  export type UserDetailsScoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDetailsScoreCreateWithoutUserInput, UserDetailsScoreUncheckedCreateWithoutUserInput> | UserDetailsScoreCreateWithoutUserInput[] | UserDetailsScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDetailsScoreCreateOrConnectWithoutUserInput | UserDetailsScoreCreateOrConnectWithoutUserInput[]
    createMany?: UserDetailsScoreCreateManyUserInputEnvelope
    connect?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserDetailsScoreUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDetailsScoreCreateWithoutUserInput, UserDetailsScoreUncheckedCreateWithoutUserInput> | UserDetailsScoreCreateWithoutUserInput[] | UserDetailsScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDetailsScoreCreateOrConnectWithoutUserInput | UserDetailsScoreCreateOrConnectWithoutUserInput[]
    upsert?: UserDetailsScoreUpsertWithWhereUniqueWithoutUserInput | UserDetailsScoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDetailsScoreCreateManyUserInputEnvelope
    set?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
    disconnect?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
    delete?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
    connect?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
    update?: UserDetailsScoreUpdateWithWhereUniqueWithoutUserInput | UserDetailsScoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDetailsScoreUpdateManyWithWhereWithoutUserInput | UserDetailsScoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDetailsScoreScalarWhereInput | UserDetailsScoreScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserDetailsScoreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDetailsScoreCreateWithoutUserInput, UserDetailsScoreUncheckedCreateWithoutUserInput> | UserDetailsScoreCreateWithoutUserInput[] | UserDetailsScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDetailsScoreCreateOrConnectWithoutUserInput | UserDetailsScoreCreateOrConnectWithoutUserInput[]
    upsert?: UserDetailsScoreUpsertWithWhereUniqueWithoutUserInput | UserDetailsScoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDetailsScoreCreateManyUserInputEnvelope
    set?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
    disconnect?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
    delete?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
    connect?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
    update?: UserDetailsScoreUpdateWithWhereUniqueWithoutUserInput | UserDetailsScoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDetailsScoreUpdateManyWithWhereWithoutUserInput | UserDetailsScoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDetailsScoreScalarWhereInput | UserDetailsScoreScalarWhereInput[]
  }

  export type OptionCreateNestedManyWithoutQuizInput = {
    create?: XOR<OptionCreateWithoutQuizInput, OptionUncheckedCreateWithoutQuizInput> | OptionCreateWithoutQuizInput[] | OptionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuizInput | OptionCreateOrConnectWithoutQuizInput[]
    createMany?: OptionCreateManyQuizInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type UserDetailsScoreCreateNestedManyWithoutQuizInput = {
    create?: XOR<UserDetailsScoreCreateWithoutQuizInput, UserDetailsScoreUncheckedCreateWithoutQuizInput> | UserDetailsScoreCreateWithoutQuizInput[] | UserDetailsScoreUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: UserDetailsScoreCreateOrConnectWithoutQuizInput | UserDetailsScoreCreateOrConnectWithoutQuizInput[]
    createMany?: UserDetailsScoreCreateManyQuizInputEnvelope
    connect?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
  }

  export type OptionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<OptionCreateWithoutQuizInput, OptionUncheckedCreateWithoutQuizInput> | OptionCreateWithoutQuizInput[] | OptionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuizInput | OptionCreateOrConnectWithoutQuizInput[]
    createMany?: OptionCreateManyQuizInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type UserDetailsScoreUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<UserDetailsScoreCreateWithoutQuizInput, UserDetailsScoreUncheckedCreateWithoutQuizInput> | UserDetailsScoreCreateWithoutQuizInput[] | UserDetailsScoreUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: UserDetailsScoreCreateOrConnectWithoutQuizInput | UserDetailsScoreCreateOrConnectWithoutQuizInput[]
    createMany?: UserDetailsScoreCreateManyQuizInputEnvelope
    connect?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OptionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<OptionCreateWithoutQuizInput, OptionUncheckedCreateWithoutQuizInput> | OptionCreateWithoutQuizInput[] | OptionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuizInput | OptionCreateOrConnectWithoutQuizInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutQuizInput | OptionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: OptionCreateManyQuizInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutQuizInput | OptionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutQuizInput | OptionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type UserDetailsScoreUpdateManyWithoutQuizNestedInput = {
    create?: XOR<UserDetailsScoreCreateWithoutQuizInput, UserDetailsScoreUncheckedCreateWithoutQuizInput> | UserDetailsScoreCreateWithoutQuizInput[] | UserDetailsScoreUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: UserDetailsScoreCreateOrConnectWithoutQuizInput | UserDetailsScoreCreateOrConnectWithoutQuizInput[]
    upsert?: UserDetailsScoreUpsertWithWhereUniqueWithoutQuizInput | UserDetailsScoreUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: UserDetailsScoreCreateManyQuizInputEnvelope
    set?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
    disconnect?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
    delete?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
    connect?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
    update?: UserDetailsScoreUpdateWithWhereUniqueWithoutQuizInput | UserDetailsScoreUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: UserDetailsScoreUpdateManyWithWhereWithoutQuizInput | UserDetailsScoreUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: UserDetailsScoreScalarWhereInput | UserDetailsScoreScalarWhereInput[]
  }

  export type OptionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<OptionCreateWithoutQuizInput, OptionUncheckedCreateWithoutQuizInput> | OptionCreateWithoutQuizInput[] | OptionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuizInput | OptionCreateOrConnectWithoutQuizInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutQuizInput | OptionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: OptionCreateManyQuizInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutQuizInput | OptionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutQuizInput | OptionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type UserDetailsScoreUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<UserDetailsScoreCreateWithoutQuizInput, UserDetailsScoreUncheckedCreateWithoutQuizInput> | UserDetailsScoreCreateWithoutQuizInput[] | UserDetailsScoreUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: UserDetailsScoreCreateOrConnectWithoutQuizInput | UserDetailsScoreCreateOrConnectWithoutQuizInput[]
    upsert?: UserDetailsScoreUpsertWithWhereUniqueWithoutQuizInput | UserDetailsScoreUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: UserDetailsScoreCreateManyQuizInputEnvelope
    set?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
    disconnect?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
    delete?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
    connect?: UserDetailsScoreWhereUniqueInput | UserDetailsScoreWhereUniqueInput[]
    update?: UserDetailsScoreUpdateWithWhereUniqueWithoutQuizInput | UserDetailsScoreUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: UserDetailsScoreUpdateManyWithWhereWithoutQuizInput | UserDetailsScoreUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: UserDetailsScoreScalarWhereInput | UserDetailsScoreScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutOptionsInput = {
    create?: XOR<QuizCreateWithoutOptionsInput, QuizUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutOptionsInput
    connect?: QuizWhereUniqueInput
  }

  export type QuizUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<QuizCreateWithoutOptionsInput, QuizUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutOptionsInput
    upsert?: QuizUpsertWithoutOptionsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutOptionsInput, QuizUpdateWithoutOptionsInput>, QuizUncheckedUpdateWithoutOptionsInput>
  }

  export type QuizCreateNestedOneWithoutUserScoresInput = {
    create?: XOR<QuizCreateWithoutUserScoresInput, QuizUncheckedCreateWithoutUserScoresInput>
    connectOrCreate?: QuizCreateOrConnectWithoutUserScoresInput
    connect?: QuizWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserScoresInput = {
    create?: XOR<UserCreateWithoutUserScoresInput, UserUncheckedCreateWithoutUserScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserScoresInput
    connect?: UserWhereUniqueInput
  }

  export type QuizUpdateOneRequiredWithoutUserScoresNestedInput = {
    create?: XOR<QuizCreateWithoutUserScoresInput, QuizUncheckedCreateWithoutUserScoresInput>
    connectOrCreate?: QuizCreateOrConnectWithoutUserScoresInput
    upsert?: QuizUpsertWithoutUserScoresInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutUserScoresInput, QuizUpdateWithoutUserScoresInput>, QuizUncheckedUpdateWithoutUserScoresInput>
  }

  export type UserUpdateOneRequiredWithoutUserScoresNestedInput = {
    create?: XOR<UserCreateWithoutUserScoresInput, UserUncheckedCreateWithoutUserScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserScoresInput
    upsert?: UserUpsertWithoutUserScoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserScoresInput, UserUpdateWithoutUserScoresInput>, UserUncheckedUpdateWithoutUserScoresInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type UserDetailsScoreCreateWithoutUserInput = {
    score: number
    createdAt?: Date | string
    quiz: QuizCreateNestedOneWithoutUserScoresInput
  }

  export type UserDetailsScoreUncheckedCreateWithoutUserInput = {
    id?: number
    quizId: number
    score: number
    createdAt?: Date | string
  }

  export type UserDetailsScoreCreateOrConnectWithoutUserInput = {
    where: UserDetailsScoreWhereUniqueInput
    create: XOR<UserDetailsScoreCreateWithoutUserInput, UserDetailsScoreUncheckedCreateWithoutUserInput>
  }

  export type UserDetailsScoreCreateManyUserInputEnvelope = {
    data: UserDetailsScoreCreateManyUserInput | UserDetailsScoreCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserDetailsScoreUpsertWithWhereUniqueWithoutUserInput = {
    where: UserDetailsScoreWhereUniqueInput
    update: XOR<UserDetailsScoreUpdateWithoutUserInput, UserDetailsScoreUncheckedUpdateWithoutUserInput>
    create: XOR<UserDetailsScoreCreateWithoutUserInput, UserDetailsScoreUncheckedCreateWithoutUserInput>
  }

  export type UserDetailsScoreUpdateWithWhereUniqueWithoutUserInput = {
    where: UserDetailsScoreWhereUniqueInput
    data: XOR<UserDetailsScoreUpdateWithoutUserInput, UserDetailsScoreUncheckedUpdateWithoutUserInput>
  }

  export type UserDetailsScoreUpdateManyWithWhereWithoutUserInput = {
    where: UserDetailsScoreScalarWhereInput
    data: XOR<UserDetailsScoreUpdateManyMutationInput, UserDetailsScoreUncheckedUpdateManyWithoutUserInput>
  }

  export type UserDetailsScoreScalarWhereInput = {
    AND?: UserDetailsScoreScalarWhereInput | UserDetailsScoreScalarWhereInput[]
    OR?: UserDetailsScoreScalarWhereInput[]
    NOT?: UserDetailsScoreScalarWhereInput | UserDetailsScoreScalarWhereInput[]
    id?: IntFilter<"UserDetailsScore"> | number
    userId?: IntFilter<"UserDetailsScore"> | number
    quizId?: IntFilter<"UserDetailsScore"> | number
    score?: IntFilter<"UserDetailsScore"> | number
    createdAt?: DateTimeFilter<"UserDetailsScore"> | Date | string
  }

  export type OptionCreateWithoutQuizInput = {
    text: string
  }

  export type OptionUncheckedCreateWithoutQuizInput = {
    id?: number
    text: string
  }

  export type OptionCreateOrConnectWithoutQuizInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutQuizInput, OptionUncheckedCreateWithoutQuizInput>
  }

  export type OptionCreateManyQuizInputEnvelope = {
    data: OptionCreateManyQuizInput | OptionCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type UserDetailsScoreCreateWithoutQuizInput = {
    score: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserScoresInput
  }

  export type UserDetailsScoreUncheckedCreateWithoutQuizInput = {
    id?: number
    userId: number
    score: number
    createdAt?: Date | string
  }

  export type UserDetailsScoreCreateOrConnectWithoutQuizInput = {
    where: UserDetailsScoreWhereUniqueInput
    create: XOR<UserDetailsScoreCreateWithoutQuizInput, UserDetailsScoreUncheckedCreateWithoutQuizInput>
  }

  export type UserDetailsScoreCreateManyQuizInputEnvelope = {
    data: UserDetailsScoreCreateManyQuizInput | UserDetailsScoreCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type OptionUpsertWithWhereUniqueWithoutQuizInput = {
    where: OptionWhereUniqueInput
    update: XOR<OptionUpdateWithoutQuizInput, OptionUncheckedUpdateWithoutQuizInput>
    create: XOR<OptionCreateWithoutQuizInput, OptionUncheckedCreateWithoutQuizInput>
  }

  export type OptionUpdateWithWhereUniqueWithoutQuizInput = {
    where: OptionWhereUniqueInput
    data: XOR<OptionUpdateWithoutQuizInput, OptionUncheckedUpdateWithoutQuizInput>
  }

  export type OptionUpdateManyWithWhereWithoutQuizInput = {
    where: OptionScalarWhereInput
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyWithoutQuizInput>
  }

  export type OptionScalarWhereInput = {
    AND?: OptionScalarWhereInput | OptionScalarWhereInput[]
    OR?: OptionScalarWhereInput[]
    NOT?: OptionScalarWhereInput | OptionScalarWhereInput[]
    id?: IntFilter<"Option"> | number
    text?: StringFilter<"Option"> | string
    quizId?: IntFilter<"Option"> | number
  }

  export type UserDetailsScoreUpsertWithWhereUniqueWithoutQuizInput = {
    where: UserDetailsScoreWhereUniqueInput
    update: XOR<UserDetailsScoreUpdateWithoutQuizInput, UserDetailsScoreUncheckedUpdateWithoutQuizInput>
    create: XOR<UserDetailsScoreCreateWithoutQuizInput, UserDetailsScoreUncheckedCreateWithoutQuizInput>
  }

  export type UserDetailsScoreUpdateWithWhereUniqueWithoutQuizInput = {
    where: UserDetailsScoreWhereUniqueInput
    data: XOR<UserDetailsScoreUpdateWithoutQuizInput, UserDetailsScoreUncheckedUpdateWithoutQuizInput>
  }

  export type UserDetailsScoreUpdateManyWithWhereWithoutQuizInput = {
    where: UserDetailsScoreScalarWhereInput
    data: XOR<UserDetailsScoreUpdateManyMutationInput, UserDetailsScoreUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizCreateWithoutOptionsInput = {
    question: string
    descripton?: string | null
    answer: string
    category: string
    createdAt?: Date | string
    userScores?: UserDetailsScoreCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutOptionsInput = {
    id?: number
    question: string
    descripton?: string | null
    answer: string
    category: string
    createdAt?: Date | string
    userScores?: UserDetailsScoreUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutOptionsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutOptionsInput, QuizUncheckedCreateWithoutOptionsInput>
  }

  export type QuizUpsertWithoutOptionsInput = {
    update: XOR<QuizUpdateWithoutOptionsInput, QuizUncheckedUpdateWithoutOptionsInput>
    create: XOR<QuizCreateWithoutOptionsInput, QuizUncheckedCreateWithoutOptionsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutOptionsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutOptionsInput, QuizUncheckedUpdateWithoutOptionsInput>
  }

  export type QuizUpdateWithoutOptionsInput = {
    question?: StringFieldUpdateOperationsInput | string
    descripton?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userScores?: UserDetailsScoreUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    descripton?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userScores?: UserDetailsScoreUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateWithoutUserScoresInput = {
    question: string
    descripton?: string | null
    answer: string
    category: string
    createdAt?: Date | string
    options?: OptionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutUserScoresInput = {
    id?: number
    question: string
    descripton?: string | null
    answer: string
    category: string
    createdAt?: Date | string
    options?: OptionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutUserScoresInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutUserScoresInput, QuizUncheckedCreateWithoutUserScoresInput>
  }

  export type UserCreateWithoutUserScoresInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    prepassword: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutUserScoresInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    prepassword: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutUserScoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserScoresInput, UserUncheckedCreateWithoutUserScoresInput>
  }

  export type QuizUpsertWithoutUserScoresInput = {
    update: XOR<QuizUpdateWithoutUserScoresInput, QuizUncheckedUpdateWithoutUserScoresInput>
    create: XOR<QuizCreateWithoutUserScoresInput, QuizUncheckedCreateWithoutUserScoresInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutUserScoresInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutUserScoresInput, QuizUncheckedUpdateWithoutUserScoresInput>
  }

  export type QuizUpdateWithoutUserScoresInput = {
    question?: StringFieldUpdateOperationsInput | string
    descripton?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutUserScoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    descripton?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type UserUpsertWithoutUserScoresInput = {
    update: XOR<UserUpdateWithoutUserScoresInput, UserUncheckedUpdateWithoutUserScoresInput>
    create: XOR<UserCreateWithoutUserScoresInput, UserUncheckedCreateWithoutUserScoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserScoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserScoresInput, UserUncheckedUpdateWithoutUserScoresInput>
  }

  export type UserUpdateWithoutUserScoresInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    prepassword?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutUserScoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    prepassword?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDetailsScoreCreateManyUserInput = {
    id?: number
    quizId: number
    score: number
    createdAt?: Date | string
  }

  export type UserDetailsScoreUpdateWithoutUserInput = {
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutUserScoresNestedInput
  }

  export type UserDetailsScoreUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDetailsScoreUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionCreateManyQuizInput = {
    id?: number
    text: string
  }

  export type UserDetailsScoreCreateManyQuizInput = {
    id?: number
    userId: number
    score: number
    createdAt?: Date | string
  }

  export type OptionUpdateWithoutQuizInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type OptionUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type OptionUncheckedUpdateManyWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type UserDetailsScoreUpdateWithoutQuizInput = {
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserScoresNestedInput
  }

  export type UserDetailsScoreUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDetailsScoreUncheckedUpdateManyWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuizCountOutputTypeDefaultArgs instead
     */
    export type QuizCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuizCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuizDefaultArgs instead
     */
    export type QuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuizDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OptionDefaultArgs instead
     */
    export type OptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDetailsScoreDefaultArgs instead
     */
    export type UserDetailsScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDetailsScoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NewsDefaultArgs instead
     */
    export type NewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NewsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShortcutKeyDefaultArgs instead
     */
    export type ShortcutKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShortcutKeyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FullFormDefaultArgs instead
     */
    export type FullFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FullFormDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubjectiveQuestionDefaultArgs instead
     */
    export type SubjectiveQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubjectiveQuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubjectiveQuestionOnlyDefaultArgs instead
     */
    export type SubjectiveQuestionOnlyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubjectiveQuestionOnlyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NewsBlogDefaultArgs instead
     */
    export type NewsBlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NewsBlogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactsDefaultArgs instead
     */
    export type ContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pdfSubjectiveQuestionDefaultArgs instead
     */
    export type pdfSubjectiveQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pdfSubjectiveQuestionDefaultArgs<ExtArgs>

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