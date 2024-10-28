## Getting Started

Get all packages with either yarn or pnpm:

```bash
pnpm install
```

Then run the development server:

```bash
pnpm dev
```

Run tests:

```bash
pnpm test
```

Access at localhost:3000

## Q/A

How might you make this app more secure?

- Validating input (prevent foreign key errors or invalid text)
- Sanitizing input (prevent XSS)
- Limiting input size (prevent DoS-es)
- Limiting requests or request sizes

How would you make this solution scale to millions of records?

- Pagination
- Utilize request on search
- Compress body data before storing in db
