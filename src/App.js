import React from 'react'
import './lib/dist/css/uswds.min.css';
import USWDS from "./lib/uswds/src/js/components";
const { table } = USWDS;

const testdata = {
  data: [
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac8f64c",
      attributes: {
        "company-phone-number": "4052674045",
        "created-date": "2021-03-03 23:59:53",
        "violation-date": "2021-03-02 08:11:00",
        "consumer-city": "Oklahoma City",
        "consumer-state": "Oklahoma",
        "consumer-area-code": "405",
        subject: "Dropped call or no message",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac8f64c",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac8f568",
      attributes: {
        "company-phone-number": "5034019491",
        "created-date": "2021-03-03 23:59:50",
        "violation-date": "2021-03-03 04:58:00",
        "consumer-city": "",
        "consumer-state": "New York",
        "consumer-area-code": "212",
        subject: "Reducing your debt (credit cards, mortgage, student loans)",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac8f568",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac8efbb",
      attributes: {
        "company-phone-number": "3366743817",
        "created-date": "2021-03-03 23:59:31",
        "violation-date": "2021-02-25 12:26:00",
        "consumer-city": "Mount Olive",
        "consumer-state": "North Carolina",
        "consumer-area-code": "919",
        subject: "No Subject Provided",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac8efbb",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac8ec86",
      attributes: {
        "company-phone-number": "4058053522",
        "created-date": "2021-03-03 23:59:17",
        "violation-date": "2021-03-03 08:34:00",
        "consumer-city": "Oklahoma City",
        "consumer-state": "Oklahoma",
        "consumer-area-code": "405",
        subject: "Dropped call or no message",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac8ec86",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac8e1b7",
      attributes: {
        "company-phone-number": "5163204817",
        "created-date": "2021-03-03 23:58:45",
        "violation-date": "2021-02-19 06:26:00",
        "consumer-city": "",
        "consumer-state": "New York",
        "consumer-area-code": "516",
        subject: "Other",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac8e1b7",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac8da05",
      attributes: {
        "company-phone-number": "2189358048",
        "created-date": "2021-03-03 23:58:40",
        "violation-date": "2021-03-03 09:52:00",
        "consumer-city": "Oklahoma City",
        "consumer-state": "Oklahoma",
        "consumer-area-code": "405",
        subject: "Dropped call or no message",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac8da05",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac8d06f",
      attributes: {
        "company-phone-number": "9194391635",
        "created-date": "2021-03-03 23:58:13",
        "violation-date": "2021-02-24 17:52:00",
        "consumer-city": "Mount Olive",
        "consumer-state": "North Carolina",
        "consumer-area-code": "919",
        subject: "No Subject Provided",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac8d06f",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac8cf65",
      attributes: {
        "company-phone-number": "8454022739",
        "created-date": "2021-03-03 23:58:13",
        "violation-date": "2021-03-03 12:08:00",
        "consumer-city": "Chippewa Falls",
        "consumer-state": "Wisconsin",
        "consumer-area-code": "715",
        subject:
          "Calls pretending to be government, businesses, or family and friends",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac8cf65",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac8c2c0",
      attributes: {
        "company-phone-number": "2404362275",
        "created-date": "2021-03-03 23:58:03",
        "violation-date": "2021-03-03 18:15:00",
        "consumer-city": "Frederick",
        "consumer-state": "Maryland",
        "consumer-area-code": "301",
        subject: "Other",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac8c2c0",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac8b918",
      attributes: {
        "company-phone-number": "5165902923",
        "created-date": "2021-03-03 23:57:58",
        "violation-date": "2021-02-25 06:33:00",
        "consumer-city": "",
        "consumer-state": "New York",
        "consumer-area-code": "516",
        subject: "Other",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac8b918",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac8b2b1",
      attributes: {
        "company-phone-number": "4057858929",
        "created-date": "2021-03-03 23:57:55",
        "violation-date": "2021-03-03 13:08:00",
        "consumer-city": "Oklahoma City",
        "consumer-state": "Oklahoma",
        "consumer-area-code": "405",
        subject: "Dropped call or no message",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac8b2b1",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac8a332",
      attributes: {
        "company-phone-number": "9058965444",
        "created-date": "2021-03-03 23:57:24",
        "violation-date": "2021-02-24 17:23:00",
        "consumer-city": "Mount Olive",
        "consumer-state": "North Carolina",
        "consumer-area-code": "919",
        subject: "No Subject Provided",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac8a332",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac89e69",
      attributes: {
        "company-phone-number": "5167589817",
        "created-date": "2021-03-03 23:57:23",
        "violation-date": "2021-03-02 06:48:00",
        "consumer-city": "",
        "consumer-state": "New York",
        "consumer-area-code": "516",
        subject: "Other",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac89e69",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac89078",
      attributes: {
        "company-phone-number": "8152053045",
        "created-date": "2021-03-03 23:57:20",
        "violation-date": "2021-03-03 15:10:00",
        "consumer-city": "Macon",
        "consumer-state": "Georgia",
        "consumer-area-code": "404",
        subject: "Reducing your debt (credit cards, mortgage, student loans)",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac89078",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac88241",
      attributes: {
        "company-phone-number": "3022588853",
        "created-date": "2021-03-03 23:56:54",
        "violation-date": "2021-03-03 04:48:00",
        "consumer-city": "",
        "consumer-state": "New York",
        "consumer-area-code": "516",
        subject: "Other",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac88241",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac881a8",
      attributes: {
        "company-phone-number": "3367615837",
        "created-date": "2021-03-03 23:56:35",
        "violation-date": "2021-02-24 11:58:00",
        "consumer-city": "Mount Olive",
        "consumer-state": "North Carolina",
        "consumer-area-code": "919",
        subject: "No Subject Provided",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac881a8",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac872b0",
      attributes: {
        "company-phone-number": "2182177927",
        "created-date": "2021-03-03 23:56:25",
        "violation-date": "2021-03-03 06:58:00",
        "consumer-city": "",
        "consumer-state": "New York",
        "consumer-area-code": "516",
        subject: "Other",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac872b0",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac862d7",
      attributes: {
        "company-phone-number": "3016687188",
        "created-date": "2021-03-03 23:56:23",
        "violation-date": "2021-03-03 15:28:00",
        "consumer-city": "Frederick",
        "consumer-state": "Maryland",
        "consumer-area-code": "301",
        subject: "Other",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac862d7",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac85b18",
      attributes: {
        "company-phone-number": "2032629245",
        "created-date": "2021-03-03 23:55:52",
        "violation-date": "2021-03-03 07:08:00",
        "consumer-city": "",
        "consumer-state": "New York",
        "consumer-area-code": "516",
        subject: "Other",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac85b18",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac85369",
      attributes: {
        "company-phone-number": "5614870230",
        "created-date": "2021-03-03 23:55:27",
        "violation-date": "2021-03-03 07:23:00",
        "consumer-city": "",
        "consumer-state": "New York",
        "consumer-area-code": "516",
        subject: "Other",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac85369",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac85213",
      attributes: {
        "company-phone-number": "3016681503",
        "created-date": "2021-03-03 23:55:03",
        "violation-date": "2021-03-03 13:23:00",
        "consumer-city": "Frederick",
        "consumer-state": "Maryland",
        "consumer-area-code": "301",
        subject: "Other",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac85213",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac84cee",
      attributes: {
        "company-phone-number": "3013634506",
        "created-date": "2021-03-03 23:53:57",
        "violation-date": "2021-03-03 12:08:00",
        "consumer-city": "Frederick",
        "consumer-state": "Maryland",
        "consumer-area-code": "301",
        subject: "Other",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac84cee",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac83cf4",
      attributes: {
        "company-phone-number": "4122919997",
        "created-date": "2021-03-03 23:53:50",
        "violation-date": "2021-03-03 12:44:00",
        "consumer-city": "Pittsburgh",
        "consumer-state": "Pennsylvania",
        "consumer-area-code": "412",
        subject: "Other",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac83cf4",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac83b91",
      attributes: {
        "company-phone-number": "",
        "created-date": "2021-03-03 23:53:46",
        "violation-date": "2021-03-03 15:00:00",
        "consumer-city": "",
        "consumer-state": "New Jersey",
        "consumer-area-code": "973",
        subject: "Warranties  \u0026 protection plans",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac83b91",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac82d7e",
      attributes: {
        "company-phone-number": "6822434625",
        "created-date": "2021-03-03 23:53:40",
        "violation-date": "2021-03-03 17:28:00",
        "consumer-city": "Fort Worth",
        "consumer-state": "Texas",
        "consumer-area-code": "682",
        subject: "Medical  \u0026 prescriptions",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac82d7e",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac8220e",
      attributes: {
        "company-phone-number": "3105046713",
        "created-date": "2021-03-03 23:53:36",
        "violation-date": "2021-03-03 14:43:00",
        "consumer-city": "Hawthorne",
        "consumer-state": "California",
        "consumer-area-code": "310",
        subject: "Warranties  \u0026 protection plans",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac8220e",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac81f15",
      attributes: {
        "company-phone-number": "5733358013",
        "created-date": "2021-03-03 23:53:10",
        "violation-date": "2021-03-03 17:49:00",
        "consumer-city": "Fresh Meadows",
        "consumer-state": "New York",
        "consumer-area-code": "917",
        subject: "Dropped call or no message",
        "recorded-message-or-robocall": "",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac81f15",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac812d9",
      attributes: {
        "company-phone-number": "7874347565",
        "created-date": "2021-03-03 23:52:18",
        "violation-date": "2021-03-03 04:06:00",
        "consumer-city": "",
        "consumer-state": "",
        "consumer-area-code": "720",
        subject: "Other",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac812d9",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac81045",
      attributes: {
        "company-phone-number": "4342015486",
        "created-date": "2021-03-03 23:51:57",
        "violation-date": "2021-03-03 13:15:00",
        "consumer-city": "",
        "consumer-state": "Virginia",
        "consumer-area-code": "703",
        subject:
          "Calls pretending to be government, businesses, or family and friends",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac81045",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac8015d",
      attributes: {
        "company-phone-number": "3367615837",
        "created-date": "2021-03-03 23:51:54",
        "violation-date": "2021-02-24 11:58:00",
        "consumer-city": "Mount Olive",
        "consumer-state": "North Carolina",
        "consumer-area-code": "919",
        subject: "No Subject Provided",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac8015d",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7fb91",
      attributes: {
        "company-phone-number": "6316905979",
        "created-date": "2021-03-03 23:51:48",
        "violation-date": "2021-02-27 00:08:00",
        "consumer-city": "Stockton",
        "consumer-state": "California",
        "consumer-area-code": "209",
        subject: "Other",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7fb91",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7f9ed",
      attributes: {
        "company-phone-number": "8666961015",
        "created-date": "2021-03-03 23:51:06",
        "violation-date": "2021-03-03 06:20:00",
        "consumer-city": "",
        "consumer-state": "Minnesota",
        "consumer-area-code": "218",
        subject: "Other",
        "recorded-message-or-robocall": "N",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7f9ed",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7f6db",
      attributes: {
        "company-phone-number": "6624272181",
        "created-date": "2021-03-03 23:51:01",
        "violation-date": "2021-02-22 11:18:00",
        "consumer-city": "Mount Olive",
        "consumer-state": "North Carolina",
        "consumer-area-code": "919",
        subject: "No Subject Provided",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7f6db",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7f61b",
      attributes: {
        "company-phone-number": "8003009009",
        "created-date": "2021-03-03 23:50:42",
        "violation-date": "2021-03-03 11:09:00",
        "consumer-city": "Hyattsville",
        "consumer-state": "Maryland",
        "consumer-area-code": "301",
        subject:
          "Calls pretending to be government, businesses, or family and friends",
        "recorded-message-or-robocall": "N",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7f61b",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7f5dc",
      attributes: {
        "company-phone-number": "9729300607",
        "created-date": "2021-03-03 23:49:47",
        "violation-date": "2021-02-20 15:09:00",
        "consumer-city": "Mount Olive",
        "consumer-state": "North Carolina",
        "consumer-area-code": "919",
        subject: "No Subject Provided",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7f5dc",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7ec20",
      attributes: {
        "company-phone-number": "2186733589",
        "created-date": "2021-03-03 23:49:22",
        "violation-date": "2021-03-03 12:29:00",
        "consumer-city": "",
        "consumer-state": "Minnesota",
        "consumer-area-code": "218",
        subject: "Other",
        "recorded-message-or-robocall": "N",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7ec20",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7e901",
      attributes: {
        "company-phone-number": "9782969070",
        "created-date": "2021-03-03 23:48:23",
        "violation-date": "2021-03-03 13:52:00",
        "consumer-city": "New York",
        "consumer-state": "New York",
        "consumer-area-code": "646",
        subject:
          "Calls pretending to be government, businesses, or family and friends",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7e901",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7e431",
      attributes: {
        "company-phone-number": "7199740243",
        "created-date": "2021-03-03 23:48:17",
        "violation-date": "2021-02-26 12:13:00",
        "consumer-city": "",
        "consumer-state": "North Carolina",
        "consumer-area-code": "919",
        subject: "Warranties  \u0026 protection plans",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7e431",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7e0ab",
      attributes: {
        "company-phone-number": "7076686449",
        "created-date": "2021-03-03 23:48:07",
        "violation-date": "2021-03-03 09:53:00",
        "consumer-city": "Vacaville",
        "consumer-state": "California",
        "consumer-area-code": "707",
        subject: "Warranties  \u0026 protection plans",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7e0ab",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7d1d6",
      attributes: {
        "company-phone-number": "7634788938",
        "created-date": "2021-03-03 23:46:53",
        "violation-date": "2021-03-03 16:02:00",
        "consumer-city": "Ramsey",
        "consumer-state": "Minnesota",
        "consumer-area-code": "763",
        subject: "Other",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7d1d6",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7cac7",
      attributes: {
        "company-phone-number": "7019998046",
        "created-date": "2021-03-03 23:46:32",
        "violation-date": "2021-03-03 09:33:00",
        "consumer-city": "",
        "consumer-state": "Virginia",
        "consumer-area-code": "703",
        subject:
          "Calls pretending to be government, businesses, or family and friends",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7cac7",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7c75a",
      attributes: {
        "company-phone-number": "5206362661",
        "created-date": "2021-03-03 23:46:02",
        "violation-date": "2021-03-03 15:50:00",
        "consumer-city": "",
        "consumer-state": "North Carolina",
        "consumer-area-code": "919",
        subject: "Warranties  \u0026 protection plans",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7c75a",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7c586",
      attributes: {
        "company-phone-number": "9194391639",
        "created-date": "2021-03-03 23:45:22",
        "violation-date": "2021-02-19 13:50:00",
        "consumer-city": "Mount Olive",
        "consumer-state": "North Carolina",
        "consumer-area-code": "919",
        subject: "No Subject Provided",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7c586",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7bac8",
      attributes: {
        "company-phone-number": "",
        "created-date": "2021-03-03 23:45:03",
        "violation-date": "2021-03-01 11:52:00",
        "consumer-city": "",
        "consumer-state": "New York",
        "consumer-area-code": "212",
        subject:
          "Calls pretending to be government, businesses, or family and friends",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7bac8",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7b3a9",
      attributes: {
        "company-phone-number": "9097284168",
        "created-date": "2021-03-03 23:44:14",
        "violation-date": "2021-03-03 13:31:00",
        "consumer-city": "",
        "consumer-state": "California",
        "consumer-area-code": "650",
        subject: "Warranties  \u0026 protection plans",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7b3a9",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7a6f8",
      attributes: {
        "company-phone-number": "8284922928",
        "created-date": "2021-03-03 23:43:58",
        "violation-date": "2021-02-19 12:33:00",
        "consumer-city": "Mount Olive",
        "consumer-state": "North Carolina",
        "consumer-area-code": "919",
        subject: "No Subject Provided",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7a6f8",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7a310",
      attributes: {
        "company-phone-number": "4054529235",
        "created-date": "2021-03-03 23:43:53",
        "violation-date": "2021-03-03 13:57:00",
        "consumer-city": "Oklahoma City",
        "consumer-state": "Oklahoma",
        "consumer-area-code": "405",
        subject: "Dropped call or no message",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7a310",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac797dc",
      attributes: {
        "company-phone-number": "4052563057",
        "created-date": "2021-03-03 23:42:47",
        "violation-date": "2021-03-03 15:44:00",
        "consumer-city": "Oklahoma City",
        "consumer-state": "Oklahoma",
        "consumer-area-code": "405",
        subject: "Dropped call or no message",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac797dc",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac79394",
      attributes: {
        "company-phone-number": "4056456778",
        "created-date": "2021-03-03 23:42:10",
        "violation-date": "2021-03-03 15:59:00",
        "consumer-city": "Oklahoma City",
        "consumer-state": "Oklahoma",
        "consumer-area-code": "405",
        subject: "Dropped call or no message",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac79394",
      },
    },
    {
      type: "dnc_complaint",
      id: "da64fbb5c8bdbeb5bf7313be6ac7887c",
      attributes: {
        "company-phone-number": "9095833504",
        "created-date": "2021-03-03 23:41:45",
        "violation-date": "2021-02-25 15:59:00",
        "consumer-city": "Ontario",
        "consumer-state": "California",
        "consumer-area-code": "909",
        subject: "Warranties  \u0026 protection plans",
        "recorded-message-or-robocall": "Y",
      },
      relationships: [],
      meta: [],
      links: {
        self:
          "https://www.ftc.gov/v0/dnc-complaints/da64fbb5c8bdbeb5bf7313be6ac7887c",
      },
    },
  ],
  meta: { "records-this-page": 50, "record-total": 3734593 },
  links: { self: "https://www.ftc.gov/v0/dnc-complaints" },
};

const RowData = ({ rowData }) => {

  return (
    rowData?.data?.map((data) => {
    return (
      <tr>
        <th data-sortable scope="col" role="columnheader">
          <a href={data.links.self}>{data.id}</a>
        </th>
        <td
          data-sort-value={`${data.attributes.subject}`}
          class="font-mono-sm text-tabular text-right"
        >
          {data.attributes.subject}
        </td>
        <td
          data-sort-value={new Date(
            `${data.attributes["violation-date"]}`
          ).getTime()}
        >
          {data.attributes["created-date"]}
        </td>
        <td
          data-sort-value={new Date(
            `${data.attributes["violation-date"]}`
          ).getTime()}
        >
          {data.attributes["violation-date"]}
        </td>
        <td
          data-sort-value={`${data.attributes["recorded-message-or-robocall"]}`}
          class="font-mono-sm text-tabular text-right"
        >
          {data.attributes["recorded-message-or-robocall"]}
        </td>
        <td
          data-sort-value={`${data.attributes["consumer-area-code"]}`}
          class="font-mono-sm text-tabular text-right"
        >
          {data.attributes["consumer-area-code"]}
        </td>
        <td data-sort-value={`${data.attributes["company-phone-number"]}`}>
          {data.attributes["company-phone-number"]}
        </td>
        <td
          data-sort-value={`${data.attributes["consumer-city"]}`}
          class="font-mono-sm text-tabular text-right"
        >
          {data.attributes["consumer-city"]}
        </td>
        <td
          data-sort-value={`${data.attributes["consumer-state"]}`}
          class="font-mono-sm text-tabular text-right"
        >
          {data.attributes["consumer-state"]}
        </td>
      </tr>
    );
  })
  )
};


function App() {

  const ref = document.body;

  React.useEffect(() => {
    // initialize
    table.on(ref);

    // remove event listeners when component un-mounts.
    return () => {
      table.off();
    };
  }, [ref]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <table class="usa-table">
          <caption>Table Header</caption>
          <thead>
            <tr>
              <th data-sortable scope="col" role="columnheader">
                ID
              </th>
              <th data-sortable scope="col" role="columnheader">
                subject
              </th>
              <th data-sortable scope="col" role="columnheader">
                created-date
              </th>
              <th data-sortable scope="col" role="columnheader">
                violation-date
              </th>
              <th data-sortable scope="col" role="columnheader">
                recorded-message-or-robocall
              </th>
              <th data-sortable scope="col" role="columnheader">
                consumer-area-code
              </th>
              <th data-sortable scope="col" role="columnheader">
                company-phone-number
              </th>
              <th data-sortable scope="col" role="columnheader">
                consumer-city
              </th>
              <th data-sortable scope="col" role="columnheader">
                consumer-state
              </th>
            </tr>
          </thead>
          <tbody>
            <RowData rowData={testdata} />
          </tbody>
        </table>
        <div class="usa-table__announcement-region" aria-live="polite" />
      </main>
    </div>
  );
}

export default App;
