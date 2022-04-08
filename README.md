# firefly-iii-split-transaction
A split transaction helper for use with Firefly III.

## What this does
Firefly 3's UI doesn't allow a single transaction to be split into two different types, e.g. a transaction where part of it is an expenditure and part is a transfer. With my usage of firefly, all transactions where I pay for someone else (Venmo, Splitwise) fall under this, where my portion is an expenditure, and the portion I cover for others is a transfer from my bank account to an "outstanding loans" account. This app is designed to create both transactions from minimal input info.
