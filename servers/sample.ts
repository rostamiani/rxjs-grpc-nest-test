import * as grpc from 'grpc';
import { Observable } from 'rxjs';
/** Namespace sample. */
export namespace sample {
  /** Contains all the RPC service clients. */
  export interface ClientFactory {
    /**
     * Returns the Greeter service client.
     */
    getGreeter(): sample.Greeter;
  }

  /** Builder for an RPC service server. */
  export interface ServerBuilder {
    /**
     * Adds a Greeter service implementation.
     * @param impl Greeter service implementation
     */
    addGreeter(impl: sample.Greeter): sample.ServerBuilder;
  }

  /** Constructs a new Greeter service. */
  export interface Greeter {
    /**
     * Calls SayHello.
     * @param request HelloRequest message or plain object
     * @param metadata Optional metadata
     * @returns Promise
     */
    sayHello(
      request: sample.HelloRequest,
      metadata?: grpc.Metadata,
    ): Observable<sample.HelloReply>;
  }

  /** Properties of a HelloRequest. */
  export interface HelloRequest {
    /** HelloRequest name */
    name?: string | null;
  }

  /** Properties of a HelloReply. */
  export interface HelloReply {
    /** HelloReply message */
    message?: string | null;
  }
}
