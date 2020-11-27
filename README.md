# Sequelize Migrations Exercise

## Objectives

- Practice running migrations
- Fixing schema errors
- Renaming columns, tables and changing field types

## Getting Started

- Fork and Clone

### Step 1: Installing Dependencies

```sh
npm install
```

Ensure our tests run correctly:

```sh
npm run test
```

### Step 2: Setting Up Our Database

```sh
sequelize db:create
```

```sh
sequelize db:migrate
```

```sh
psql sequelize_migrations_development

\dt
```

## Lab

**READ ALL THE INSTRUCTIONS BEFORE PERFORMING ANY ACTIONS, DOING OTHERWISE WILL ENSURE THAT YOU HAVE TO START OVER**

All operations need to be completed in order! You'll be creating migrations for each step. Run `sequelize db:migrate` after each step unless directed otherwise. Check your work often using `npm run test` and `psql` to check the table names and columns.

1. Businesses has a huge problem, the table is uppercased! Fix the table name to be lowercased and plural. HINT: Look at the `Business` model for the correct `tableName`.

2. Locations shares the same problem as Businesses, correct the table naming conflict.

**If you've completed steps 1 and 2, at this point you can run the provided seed files, `sequelize db:seed:all`.**

3. The `businesses` table `phoneNumber` column is cased incorrectly, columns and tables should be lowercased and snake cased, create a migration to rename the column name. Once the migration is successful, you'll need to make sure the `Business` model `phoneNumber` field matches this. Hint:Use the `field` key in the column definition for the model. The `Location` model may be helpful here.

4. The `businesses` table has another problem, the `businessName` column is redundant, rename this field to just `name`. Run your migration and make the necessary modifications in the `Business` model. Remember the `businessName` key should reference the new `name` column.

### Bonus

The `businesses` rating column has a huge issue, someone messed up and make it `STRING` type, ideally it should be an `INTEGER` type. Create and run a migration to fix this. You'll also need to fix the field in the model itself to reflect the new datatype. Pay very close attention to the error message, it's there to help you! HINT: You'll need use a raw `SQL` command for the field type in the migration.
