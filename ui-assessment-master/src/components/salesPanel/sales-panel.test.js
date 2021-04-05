import { render, screen } from '@testing-library/react';
import SalesPanel from "./sales-panel";
import React from "react";


const salesOverviewNormal = {
  uploads: 8,
  successfulUploads: 3,
  linesAttempted: 20,
  linesSaved: 4,
  lastUploadDate: 1605001226079,
};

const salesOverviewBiggerHundredPerCent = {
  uploads: 8,
  successfulUploads: 10,
  linesAttempted: 20,
  linesSaved: 25,
  lastUploadDate: 1605001226079,
};

test('percentage is working', () => {
  render(<SalesPanel lastUploadDate={salesOverviewNormal.lastUploadDate}
                     linesAttempted={salesOverviewNormal.linesAttempted}
                     linesSaved={salesOverviewNormal.linesSaved}
                     successfulUploads={salesOverviewNormal.successfulUploads}
                     uploads={salesOverviewNormal.uploads}/>);

  const uploadPercentage = screen.getByText(/37.5%/i);
  const linesSavedPercentage = screen.getByText(/20%/i);
  const linesSaved =  screen.getByText(/4/i);
  const successfulUploads =  screen.getByText(/3 uploads/i);

  expect(uploadPercentage).toBeInTheDocument();
  expect(linesSavedPercentage).toBeInTheDocument();
  expect(linesSaved).toBeInTheDocument();
  expect(successfulUploads).toBeInTheDocument();
});

test('percentage is bigger than 100%', () => {
  render(<SalesPanel lastUploadDate={salesOverviewBiggerHundredPerCent.lastUploadDate}
                     linesAttempted={salesOverviewBiggerHundredPerCent.linesAttempted}
                     linesSaved={salesOverviewBiggerHundredPerCent.linesSaved}
                     successfulUploads={salesOverviewBiggerHundredPerCent.successfulUploads}
                     uploads={salesOverviewBiggerHundredPerCent.uploads}/>);

  const linesSaved =  screen.getByText(/25/i);
  const successfulUploads =  screen.getByText(/10 uploads/i);
  const uploadPercentage2 = screen.getByRole('percentageLines');
  const linesSavedPercentage = screen.getByRole('percentageUpload');

  expect(linesSaved).toBeInTheDocument();
  expect(successfulUploads).toBeInTheDocument();
  expect(uploadPercentage2).toBeInTheDocument();
  expect(linesSavedPercentage).toBeInTheDocument();
});
