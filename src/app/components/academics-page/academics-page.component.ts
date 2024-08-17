import { Component } from '@angular/core';
import { IAcademicLinks } from './academics.interface';
import { PageTitleComponent } from '../../shared/components/page-title/page-title.component';

@Component({
  selector: 'app-academics-page',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './academics-page.component.html',
  styleUrl: './academics-page.component.scss',
})
export class AcademicsPageComponent {
  title: string = "Academic Programs, Faculty and Departments"
  public facultyOfAppliedArtAndTechnology: IAcademicLinks[] = [
    {
      label: 'Diploma of Technology in Arts and Design',
      link: '',
    },
    {
      label:
        'Diploma of Technology in Hotel, Catering & Institutional Management',
      link: '',
    },
    {
      label:
        'Diploma of Technology in Information and Communication Technology',
      link: '',
    },
    {
      label: 'Diploma of Technology in Networking',
      link: '',
    },
    {
      label: 'Diploma of Technology in Software Engineering',
      link: '',
    },
    {
      label: 'Diploma of Technology in Science Laboratory Technology',
      link: '',
    },
    {
      label: 'Diploma of Technology in Statistics with Computing',
      link: '',
    },
    {
      label:
        'Diploma of Technology in Tourism Management Diploma of Technology in Accounting',
      link: '',
    },
    {
      label: 'Diploma of Technology in Business Administration',
      link: '',
    },
    {
      label: 'Diploma of Technology in Marketing',
      link: '',
    },
    {
      label: 'Diploma of Technology in Office Management',
      link: '',
    },
    {
      label:
        'Diploma of Technology in Procurement, Logistics and Supply Chain Management',
      link: '',
    },
    {
      label: 'Diploma of Technology in Secretaryship & Management Studies',
      link: '',
    },
    {
      label: 'Diploma of Technology in Human Resource Management',
      link: '',
    },
    {
      label: 'Diploma of Technology in Automotive Engineering',
      link: '',
    },
    {
      label: 'Diploma of Technology in Civil Engineering',
      link: '',
    },
    {
      label: 'Diploma of Technology in Electrical and Electronics Engineering',
      link: '',
    },
    {
      label:
        'Diploma of Technology in Environmental Engineering and Management Studies',
      link: '',
    },
    {
      label: 'Diploma of Technology in Mechanical Engineering',
      link: '',
    },
    {
      label:
        'Diploma of Technology in Refrigeration, Heating and Air-Conditioning',
      link: '',
    },
    {
      label: 'Diploma of Technology Welding & Fabrication',
      link: '',
    },
    {
      label: 'Diploma of Technology in Architectural Draftsmanship',
      link: '',
    },
    {
      label: 'Diploma of Technology in Construction Engineering & Management',
      link: '',
    },
    {
      label: 'Diploma of Technology in Estate Management',
      link: '',
    },
    {
      label: 'Diploma of Technology in Interior Design & Furnishing',
      link: '',
    },
    {
      label: 'Diploma of Technology in Plumbing and Gas',
      link: '',
    },
    {
      label: 'Diploma of Technology in Furniture Design',
      link: '',
    },
  ];

  public facultyOfAppliedArt: IAcademicLinks[] = [
    {
      label: 'HND Commercial Art – Graphic Design',
      link: '',
    },
    {
      label: 'HND Commercial Art – Textiles Technology',
      link: '',
    },
    {
      label: 'HND Commercial Art – Painting',
      link: '',
    },
    {
      label: 'HND Commercial Art – Sculpture',
      link: '',
    },
    {
      label: 'HND Commercial Art – Ceramics',
      link: '',
    },
    {
      label: 'HND Fashion Design and Technology',
      link: '',
    },
  ];

  public facultyOfAppliedSciences: IAcademicLinks[] = [
    {
      label: 'HND Information & Communication Technology',
      link: '',
    },
    {
      label: 'HND Hotel, Catering and Institutional Management',
      link: '',
    },
    {
      label: 'HND Mathematics and Statistics',
      link: '',
    },
    {
      label: 'HND Tourism Management',
      link: '',
    },
  ];

  public facultyOfEngineering: IAcademicLinks[] = [
    {
      label: 'HND Civil Engineering',
      link: '',
    },
    {
      label: 'HND Construction Engineering & Management',
      link: '',
    },
    {
      label: 'HND Electrical/Electronics Engineering',
      link: '',
    },
    {
      label:
        'HND Mechanical Engineering (Automobile, Plant, Production, Refrigeration and Air-conditioning options) Faculty of Business Studies',
      link: '',
    },
  ];

  public facultyOfBuisinessStudies: IAcademicLinks[] = [
    {
      label: 'HND Accountancy',
      link: '',
    },
    {
      label: 'HND Marketing',
      link: '',
    },
    {
      label: 'HND Purchasing and Supply',
      link: '',
    },
    {
      label: 'HND Secretaryship and Management Studies',
      link: '',
    },
  ];

  public facultyOfBuiltAndNaturalEnvironment: IAcademicLinks[] = [
    {
      label: 'HND Interior Design and Technology',
      link: '',
    },
    {
      label: 'HND Estate Management',
      link: '',
    },
    {
      label: 'HND Building Technology',
      link: '',
    },
  ];

  public EveningHNDProgrammes: IAcademicLinks[] = [
    {
      label: 'HND Accountancy',
      link: '',
    },
    {
      label: 'HND Building Technology',
      link: '',
    },
    {
      label: 'HND Civil Engineering',
      link: '',
    },
    {
      label:
        'HND Commercial Art (Ceramics, Graphic Design, Painting, Sculpture, Textiles options)',
      link: '',
    },
    {
      label: 'HND Electrical/ Electronics Engineering',
      link: '',
    },
    {
      label: 'HND Fashion Design and Technology',
      link: '',
    },
    {
      label: 'HND Hotel, Catering & Institutional Management',
      link: '',
    },
    {
      label: 'HND Marketing',
      link: '',
    },
    {
      label: 'HND Mechanical Engineering',
      link: '',
    },
    {
      label: 'HND Purchasing & Supply',
      link: '',
    },
    {
      label: 'HND Secretaryship & Management Studies',
      link: '',
    },
    {
      label: 'HND Mathematics and Statistics',
      link: '',
    },
  ];

  public BTechProgrammes: IAcademicLinks[] = [
    {
      label: 'Bachelor of Technology in Accounting with Computing',
      link: '',
    },
    {
      label: 'Bachelor of Technology in Building Technology',
      link: '',
    },
    {
      label: 'Bachelor of Technology in Civil Engineering',
      link: '',
    },
    {
      label: 'Bachelor of Technology in Electrical Engineering',
      link: '',
    },
    {
      label: 'Bachelor of Technology in Fashion',
      link: '',
    },
    {
      label: 'Bachelor of Technology in Graphic Design',
      link: '',
    },
    {
      label: 'Bachelor of Technology in Hospitality Management',
      link: '',
    },
    {
      label: 'Bachelor of Technology in Marketing',
      link: '',
    },
    {
      label:
        'Bachelor of Technology in Mechanical Engineering – Plant and Production – Auto',
      link: '',
    },
    {
      label: 'Bachelor of Technology in Procurement Management',
      link: '',
    },
    {
      label: 'Bachelor of Technology in Secretaryship and Management Studies',
      link: '',
    },
    {
      label:
        'Bachelor of Technology in Statistics – Environmental Statistics – Financial Statistics – Health Statistics',
      link: '',
    },
    {
      label: 'Bachelor of Technology in Telecommunication Engineering',
      link: '',
    },
    {
      label: 'Bachelor of Technology in Textiles',
      link: '',
    },
    {
      label: 'Bachelor of Technology in Tourism',
      link: '',
    },
  ];

  public MTechProgrammes: IAcademicLinks[] = [
    {
      label: 'Master of Technology (M-Tech) in Graphic Design',
      link: '',
    },
    {
      label: 'Master of Technology (M-Tech) in Printing',
      link: '',
    },
    {
      label: 'Master of Technology (M-Tech) in Textiles',
      link: '',
    },
  ];
}
