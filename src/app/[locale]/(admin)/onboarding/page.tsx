import { redirect } from 'next/navigation';

export default function Example() {
  // Immediately redirect to the home page
  redirect('/home');
  return null; // No content is rendered
}
