export interface School {
  title: string,
  program: string,
  dates: string,
  location: string
}

export const schools: School[] = [
  {
    title: 'Galvanize',
    program: 'Web Development Immersive',
    dates: 'Oct 2018 - Mar 2019',
    location: 'Boulder, Colorado'
  },
  {
    title: 'University of Wisconsin - Stout',
    program: 'B.S. in Packaging',
    dates: 'Sep 2010 - May 2015',
    location: 'Menomonie, Wisconsin'
  }
]

