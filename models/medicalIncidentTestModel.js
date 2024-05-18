const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedicalIncidentSchema = new Schema(
  {
    //medical record data
    recordName: {
      type: String,
    },
    recordDescription: {
      type: String,
    },

    incident: {
      type: [
        {
          incidentType: {
            type: String,
          },
          date: {
            type: Date,
          },
          //test data
          testType: {
            type: String,
          },
          testProvider: {
            type: String,
          },
          //symptom data
          symptomType: {
            type: String,
          },
          symptom_Description: {
            type: String,
          },
          symptomFrequency: {
            type: String,
          },
          severity: {
            type: String,
          },
          SymptomDuration: {
            type: String,
          },
          appetite: {
            type: String,
          },
          weight: {
            type: String,
          },
          //Medicaction data
          medi_name: {
            type: String,
          },
          medi_dosage: {
            type: String,
          },
          medi_Frequency: {
            type: String,
          },
          // //appointment modal data
          appointmentPurpose: {
            type: String,
          },

          health_pro_name: {
            type: String,
          },
          health_pro_contact: {
            type: String,
          },

        }],

    },
  },


  { timestamps: true }
);


module.exports = mongoose.model("MedicalIncident", MedicalIncidentSchema);



