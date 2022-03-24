const mongoose = require("mongoose");

const businessHourSchema = new mongoose.Schema({
  monday: {
    to: {
      type: Date,
    },
    from: {
      type: Date,
    },
    custom: {
      type: String,
      enum: ["openAllDay", "closedAllDay"],
    },
  },
  Tuesday: {
    to: {
      type: Date,
    },
    from: {
      type: Date,
    },
    custom: {
      type: String,
      enum: ["openAllDay", "closedAllDay"],
    },
  },
  wednesday: {
    to: {
      type: Date,
    },
    from: {
      type: Date,
    },
    custom: {
      type: String,
      enum: ["openAllDay", "closedAllDay"],
    },
  },
  thrusday: {
    to: {
      type: Date,
    },
    from: {
      type: Date,
    },
    custom: {
      type: String,
      enum: ["openAllDay", "closedAllDay"],
    },
  },
  friday: {
    to: {
      type: Date,
    },
    from: {
      type: Date,
    },
    custom: {
      type: String,
      enum: ["openAllDay", "closedAllDay"],
    },
  },
  saturday: {
    to: {
      type: Date,
    },
    from: {
      type: Date,
    },
    custom: {
      type: String,
      enum: ["openAllDay", "closedAllDay"],
    },
  },
  sunday: {
    to: {
      type: Date,
    },
    from: {
      type: Date,
    },
    custom: {
      type: String,
      enum: ["openAllDay", "closedAllDay"],
    },
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
    required: true,
  },
});

module.exports = mongoose.model("BusinessHour", businessHourSchema);
