const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema({

  name: String,
  eIssn: String,
  pIssn: String,
  chiefEditorName: String,
  chiefEditorAffiliation: String,
  publisher: String,
  publicationFrequency: String,
  indexingName: String,
  subIndexing: String,
  metricName: String,
  metricValue: String

});

module.exports = mongoose.model("Journal", journalSchema);