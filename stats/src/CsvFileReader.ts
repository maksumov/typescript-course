import fs from "fs";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read() {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map((row: string[]): any => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult, // Type assertion
          row[6],
        ];
      });
  }
}
