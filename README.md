<<<<<<< HEAD
# et-ccd-definitions-englandwales
=======
# et-ccd-definitions-engwales
>>>>>>> 0d273d794918538833150d69b210c62577bb68c1

## Overview

Facilitates version control of CCD definitions.

## Features

### Variable substitution

A `json2xlsx` processor replaces variable placeholders defined in JSON definition files with values read from environment variables as long as variable name starts with `CCD_DEF` prefix.

For example `CCD_DEF_BASE_URL=http://localhost` environment variable gets injected into a fragment of the following CCD definition:

```json
[
  {
    "LiveFrom": "2017-01-01",
    "CaseTypeID": "DRAFT",
    "ID": "initiateCase",
    "CallBackURLSubmittedEvent": "${CCD_DEF_BASE_URL}/callback"
  }
]
```

to become:

```json
[
  {
    "LiveFrom": "2017-01-01",
    "CaseTypeID": "DRAFT",
    "ID": "initiateCase",
    "CallBackURLSubmittedEvent": "http://localhost/callback"
  }
]
```

## Dependencies

Dependencies have to be installed prior to first use by running:

```sh
$ yarn install
$ npm i prettier
$ npm i pretty-quick
```

## Usage

The following commands are available:

###  Convert JSON to Excel

_For all environments_

yarn generate-excel-all to generate excel configs for all environments (Local, Demo, AAT, Prod, Perftest)

The generated excel files will be in definitions/xlsx.

_For a specific environment_

yarn generate-excel-(local\demo\aat\prod)

For example

yarn generate-excel-aat

###  Convert Excel to JSON

If you prefer to make the changes directly on the excel file, and then convert back to JSON:

Generate a fresh base Excel file using yarn generate-excel. The generated excel file will be in definitions/xlsx/ccd-config-base.xlsx and will contain placeholder URLs.
Make the changes to ccd-config-base.xlsx but **ensure you don't have any environment-specific URLs** (use placeholders instead).
Once you're satisfied with your changes in the Excel file, convert back to JSON using yarn generate-json.
Review the JSON file changes to ensure all your changes are correct.
