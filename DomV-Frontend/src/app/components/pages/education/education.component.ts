import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StealthModeService } from '../../../services/stealth-mode.service';

interface Resource {
  title: string;
  description: string;
  category: string;
  type: string;
  link?: string;
  image?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  isStealthMode = false;
  activeCategory = 'recognizing';
  
  educationalResources: Resource[] = [
    {
      title: 'Recognizing Signs of Abuse',
      description: 'Learn about the warning signs of physical, emotional, and financial abuse.',
      category: 'recognizing',
      type: 'article',
      image: 'https://images.pexels.com/photos/6969866/pexels-photo-6969866.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Understanding the Cycle of Abuse',
      description: 'Information about how abuse cycles through different phases and how to recognize patterns.',
      category: 'recognizing',
      type: 'video',
      link: '#'
    },
    {
      title: 'Creating a Safety Plan',
      description: 'Step-by-step guide to creating a personalized safety plan for yourself and your children.',
      category: 'safety',
      type: 'guide',
      image: 'https://images.pexels.com/photos/5699376/pexels-photo-5699376.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Tech Safety for Survivors',
      description: 'Learn how to protect your digital privacy and prevent tech-facilitated abuse.',
      category: 'safety',
      type: 'article',
      link: '#'
    },
    {
      title: 'Your Legal Rights',
      description: 'Overview of legal protections available for abuse survivors, including restraining orders.',
      category: 'legal',
      type: 'guide',
      image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Navigating the Court System',
      description: 'Practical advice for handling court proceedings related to abuse cases.',
      category: 'legal',
      type: 'video',
      link: '#'
    },
    {
      title: 'Healing from Trauma',
      description: 'Resources for understanding trauma responses and beginning the healing journey.',
      category: 'healing',
      type: 'article',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Self-Care Practices for Survivors',
      description: 'Practical self-care techniques specifically designed for survivors of abuse.',
      category: 'healing',
      type: 'guide',
      link: '#'
    }
  ];
  
  // Weather education for stealth mode
  weatherResources: Resource[] = [
    {
      title: 'Understanding Weather Patterns',
      description: 'Learn about how weather systems form and move across regions.',
      category: 'recognizing',
      type: 'article',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Reading Weather Radar',
      description: 'How to interpret weather radar maps and understand precipitation patterns.',
      category: 'recognizing',
      type: 'video',
      link: '#'
    },
    {
      title: 'Preparing for Severe Weather',
      description: 'Step-by-step guide to creating a weather emergency plan for your household.',
      category: 'safety',
      type: 'guide',
      image: 'https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Hurricane Safety Tips',
      description: 'Essential safety information for before, during, and after hurricane events.',
      category: 'safety',
      type: 'article',
      link: '#'
    },
    {
      title: 'Climate Change Basics',
      description: 'Overview of climate science and how it affects weather patterns.',
      category: 'legal',
      type: 'guide',
      image: 'https://images.pexels.com/photos/1308794/pexels-photo-1308794.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Weather and Agriculture',
      description: 'How weather patterns affect farming and crop production.',
      category: 'legal',
      type: 'video',
      link: '#'
    },
    {
      title: 'Meteorology for Beginners',
      description: 'Introduction to the science of weather forecasting.',
      category: 'healing',
      type: 'article',
      image: 'https://images.pexels.com/photos/1631678/pexels-photo-1631678.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Storm Chasing Safety',
      description: 'Safety guidelines for weather enthusiasts interested in observing storms.',
      category: 'healing',
      type: 'guide',
      link: '#'
    }
  ];
  
  categories = [
    { id: 'recognizing', normalName: 'Recognizing Abuse', stealthName: 'Weather Basics' },
    { id: 'safety', normalName: 'Safety Planning', stealthName: 'Weather Safety' },
    { id: 'legal', normalName: 'Legal Information', stealthName: 'Climate Science' },
    { id: 'healing', normalName: 'Healing & Recovery', stealthName: 'Weather Forecasting' }
  ];
  
  constructor(private stealthModeService: StealthModeService) {
    this.stealthModeService.stealthMode$.subscribe(isStealthMode => {
      this.isStealthMode = isStealthMode;
    });
  }
  
  setActiveCategory(category: string): void {
    this.activeCategory = category;
  }
  
  get filteredResources(): Resource[] {
    return this.isStealthMode
      ? this.weatherResources.filter(resource => resource.category === this.activeCategory)
      : this.educationalResources.filter(resource => resource.category === this.activeCategory);
  }
  
  getCategoryName(categoryId: string): string {
    const category = this.categories.find(c => c.id === categoryId);
    return this.isStealthMode ? category?.stealthName || '' : category?.normalName || '';
  }
}