 const scd = require("dataform-scd");

 scd("source_data_scd", {
  uniqueKey: "name",
  timestamp: "ingestion_date", // A field that stores a timestamp or date of when the row was last changed.
  source: {
    schema: "dataform_incremental_models",     // The source table to build slowly changing dimensions from.
    name: "staging",
  },
  incrementalConfig: {        // Any configuration parameters to apply to the incremental table that will be created.
    bigquery: {
      partitionBy: "ingestion_date",
    },
  },
});