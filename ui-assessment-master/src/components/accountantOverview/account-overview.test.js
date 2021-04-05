import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';

const data = {
  supportContact: {
    name: 'John Smith',
    email: 'john.smith@feefo.com',
    number: '020 2223 2323'
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  }
}

test('renders learn react link', () => {

  render(<AccountOverview data={data}/>);
  const element = screen.getByText(/Account Overview/i);
  expect(element).toBeInTheDocument();
});
