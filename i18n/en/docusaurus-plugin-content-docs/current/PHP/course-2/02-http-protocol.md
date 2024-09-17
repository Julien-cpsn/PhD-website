# 📜 | Anatomy of the HTTP Protocol

:::info
This part is not meant to be memorized, but it is a key element in understanding the world of the WEB. **Understanding the different terms mentioned is necessary**.
:::

In the context of web development, the **HTTP** (HyperText Transfer Protocol) protocol plays a central role by enabling communication between web browsers (clients) and servers. When a user accesses a web page or interacts with an online application, a series of HTTP requests and responses are exchanged between the client and the server. Understanding the anatomy of an HTTP request is essential for diagnosing issues, optimizing web applications, and developing efficient API services.

## Components of an HTTP Request

An HTTP request is divided into several distinct parts, each with a specific role.

Here is a diagram to facilitate understanding throughout the explanation:

![HTTP Protocol Diagram](../images/http_protocol.png)

### Request Line

The request line is the first line of the HTTP request. It contains three key pieces of information:

- **HTTP Method**: it specifies the action to be performed on the requested resource. The most common methods are:
    - `GET`: to retrieve a resource (read).
    - `POST`: to send data to the server (often used to create or update a resource).
    - `PUT`: to replace or update an existing resource.
    - `DELETE`: to delete a resource.
    - `PATCH`: to partially update a resource.

- **URI (Uniform Resource Identifier)**: this is the address of the requested resource, often referred to as the path or endpoint. For example, `/articles/42` refers to article number 42.

- **HTTP Protocol Version**: typically `HTTP/1.1` or `HTTP/2`, this information specifies which version of the protocol is being used.

**Example**:
```http
GET /articles/42 HTTP/1.1
```

### Request Headers

Request headers provide additional information about the request, such as the type of content being sent, required permissions, or client information. Each header is a key-value pair.

Common headers include:

- **Host**: the server's address (e.g., `www.example.com`).
- **User-Agent**: information about the client, such as the browser type being used.
- **Accept**: specifies the type of content the client can accept (e.g., `text/html`, `application/json`).
- **Content-Type**: indicates the type of data sent in the request body (useful for `POST` or `PUT`, e.g., `application/json`).
- **Authorization**: contains authentication information.

**Example**:
```http
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: application/json
```

### Request Body

The request body is an optional part that contains data sent to the server, for example in a `POST` or `PUT` request. This data can be in various formats (JSON, XML, form-encoded, etc). For a `GET` request, the request body is usually absent as data is passed in the URI (via query parameters).

**Example** (in a `POST` request):
```json
{
  "title": "Nouvel Article",
  "content": "Contenu de l'article..."
}
```

## The HTTP Request Cycle

When the client (browser or application) sends an HTTP request, here are the main steps that occur:

1. **User interacts with the interface** (e.g., clicking on a link or a form submission button).
2. **Browser sends an HTTP request** to the specified server, containing the request line, headers, and, in some cases, a request body.
3. **Server receives the request**, interprets it, and performs necessary actions (retrieve data from a database, perform calculations, etc.).
4. **Server sends an HTTP response** to the client, containing the requested data or an error message if the request cannot be processed.
5. **Browser displays the result** to the user as a web page, alert, or any other representation.

## Complete Example of an HTTP Request

Let's consider an example where a user is trying to retrieve an article from a server using a `GET` request.

### HTTP Request
```http
GET /articles/42 HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: application/json
```

Here, the client is requesting article number 42 from the server `www.example.com`. The client specifies that it wants to receive the data in JSON format using the `Accept` header.

### Server's HTTP Response
In response, the server might reply with:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 126

{
  "id": 42,
  "title": "Nouvel Article",
  "content": "Voici le contenu de l'article."
}
```

In this example:

- The status code `200 OK` indicates that the request was successful.
- The content type is specified as `application/json`, matching the client's request.
- The response body contains the details of the article in JSON format.

## Most Common HTTP Methods

HTTP methods, also known as HTTP verbs, specify the type of action to be performed on a given resource. Here is an overview of the most commonly used methods:

- **GET**: Used to retrieve information from a resource. A `GET` request should not alter the state of the resource.

- **POST**: Used to send data to the server, for example, to create a new resource. It is often used to submit forms or JSON data.

- **PUT**: Used to completely replace an existing resource with the provided data. It is an idempotent operation, meaning that repeated application of the request does not further modify the resource.

- **PATCH**: Similar to `PUT`, but used to partially update a resource.

- **DELETE**: Used to delete a resource on the server.

## Important Headers in an HTTP Request

Some headers play a crucial role in processing HTTP requests:

- **Cache-Control**: Manages the caching behavior of resources. For example, it can instruct the browser on whether to store a copy of the resource and for how long.

- **Authorization**: Used to transmit authentication information, such as an access token in secure services.

- **Cookie**: Used to store and send information related to a user session or preferences on the website.

## Complete Example

Here is a more complex example to understand what an HTTP request might look like in a real-world scenario:

```http
POST /api/v1/users/create?notify=true&admin=false HTTP/1.1
Host: api.example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.m5uXnxMlfz_mxCzMzRZZHY
Content-Type: application/json
Accept: application/json
User-Agent: Firefox/1.0.0
Cache-Control: no-cache
Pragma: no-cache
Content-Length: 245

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "SuperSecretPassword",
  "roles": ["user", "editor"],
}
```
- **HTTP Method**: `POST` is used here to create a new resource (a user).
- **API Path**: `/api/v1/users/create` indicates the endpoint URL.
  - **Query Parameters**: `?notify=true&admin=false` specifies that the user should be notified and should not be created as an administrator.
- **HTTP Headers**:
  - `Authorization: Bearer` is used to send a JWT (JSON Web Token) for authentication.
  - `Content-Type: application/json` indicates that the request body is in JSON format.
  - `Accept: application/json` means that the expected response should also be in JSON format.
  - `User-Agent` specifies the application sending the request.
  - `Cache-Control` and `Pragma` disable caching.
- **Request Body**: A JSON object containing the user information to be created.

This request will then be processed by the backend, which will have all this information.

## Security with HTTPS

**HTTPS** (Hypertext Transfer Protocol Secure) is the combination of HTTP with a layer of TLS encryption. HTTPS allows the visitor to verify the identity of the website they are accessing, thanks to an authentication certificate issued by a trusted third-party authority.

TLS (or SSL) operates in a client-server mode. It helps achieve the following security objectives:

- Server authentication
- Confidentiality of exchanged data (or encrypted session)
- Integrity of exchanged data
- Optionally, client authentication (though in reality, this is often handled at the application layer)

## Going Further

The HTTP protocol is a member of the **TCP/IP** family. TCP/IP is a family of communication protocols used to connect computer systems in a network. It is named after two protocols in the family: Transmission Control Protocol (TCP) and Internet Protocol (IP; yes, like IPv4 and IPv6).

Although TCP/IP and HTTP are not perfectly identical, the following sequence diagram helps to better understand what happens behind a single HTTP request.

![TCP/IP Sequence Diagram](../images/tcp_sequence_diagram.png)
