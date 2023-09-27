```mermaid
sequenceDiagram
    participant Client
    participant Server
    Client->>+Server: Request URL
    Server->>+Server: Render HTML
    Server-->>-Client: Server HTML
    Client->>+Client: Display HTML

```
