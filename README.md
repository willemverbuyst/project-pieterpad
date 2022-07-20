```mermaid
flowchart RL
  A[Seed]
  B[(MongoDB)]
  C[Server]
  D(((Client)))
  E[Cypress]
  F[Crawler]
  A-->B
  B<-->C
  C<-->D
  E-->C
  E-->D
  F-->D
```
