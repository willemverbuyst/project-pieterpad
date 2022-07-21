## SET UP

```mermaid
flowchart LR
  A[seed]
  B[(data)]
  C[server]
  D(((client)))
  E[e2e]
  F[crawler]
  A-->B
  B<-->C
  C<-->D
  E-->C
  E-->D
  F-->D
```
