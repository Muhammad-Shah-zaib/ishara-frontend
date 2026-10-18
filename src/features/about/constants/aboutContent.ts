// Copy for the About page, from DESIGN/About us@1x.png and the "The Problem" design notes.

export const GAP_WORDS = ['Education', 'Healthcare', 'Work', 'Everyday life']

export const AUDIENCES = [
  {
    title: 'Deaf and hard-of-hearing PSL users',
    text: 'To communicate without depending on an interpreter, at school, at the doctor, at work and with friends.',
  },
  {
    title: 'Interpreters and educators',
    text: 'An assistive tool for daily work and for teaching new signs in classrooms.',
  },
  {
    title: 'Public services and workplaces',
    text: 'A way to serve Deaf visitors without always needing a human interpreter in the room.',
  },
]

export const GOALS = [
  {
    title: 'Record a real PSL dataset',
    text: '65 sentences signed by 12 signers, about 7,200 samples, each annotated in Urdu so the model can learn its grammar and structure.',
  },
  {
    title: 'Recognise whole sentences',
    text: 'Go beyond the alphabet and single words, and follow continuous signing without being told where one sign ends and the next begins.',
  },
  {
    title: 'Translate into Urdu',
    text: 'Produce a full, natural Urdu sentence as text or audio, the first end-to-end PSL to Urdu translation system.',
  },
  {
    title: 'Run it on an ordinary phone',
    text: 'A web app that works in real time from a normal phone or laptop camera, with no special equipment.',
  },
]

export const STEPS = [
  {
    title: 'Watch',
    text: 'Every video frame is turned into points on the hands, face and body.',
    tag: 'MediaPipe Holistic',
  },
  {
    title: 'Read the motion',
    text: 'A graph network links the joints within each frame, and attention follows how they move over time.',
    tag: 'Graph convolution + attention',
  },
  {
    title: 'Name the signs',
    text: 'The motion is labelled as glosses, a written form of each sign, in the order they were signed.',
    tag: 'CTC recognition',
  },
  {
    title: 'Write Urdu',
    text: 'A language model turns the glosses into a natural Urdu sentence, shown as text or read aloud.',
    tag: 'mBART-50 decoder',
  },
]

export const COMMUNITY_STATS = [
  { value: '65', label: 'sentences' },
  { value: '12', label: 'signers' },
  { value: '~7,200', label: 'samples' },
]

export const COMMUNITY_POINTS = [
  {
    title: 'Consent comes first',
    text: 'Every signer agreed to have their videos recorded and used for the project, and knows the data could be shared publicly with researchers on request.',
  },
  {
    title: 'The community shapes it',
    text: 'Two of our 12 signers are children of Deaf adults and professional interpreters at DeafTawk. They sign, verify and annotate the dataset with us.',
  },
]
