import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StealthModeService } from '../../../services/stealth-mode.service';

interface Resource {
  name: string;
  phone: string;
  description: string;
  category: string;
  website?: string;
}

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  isStealthMode = false;
  searchTerm = '';
  selectedCategory = 'all';
  resources: Resource[] = [
    {
      name: 'National Domestic Violence Hotline',
      phone: '1-800-799-7233',
      description: '24/7 crisis intervention, safety planning, and referrals to local resources.',
      category: 'hotline',
      website: 'https://www.thehotline.org'
    },
    {
      name: 'Safe Horizon',
      phone: '1-800-621-4673',
      description: 'Crisis counseling, safety planning, and assistance with shelter.',
      category: 'counseling',
      website: 'https://www.safehorizon.org'
    },
    {
      name: 'RAINN (Rape, Abuse & Incest National Network)',
      phone: '1-800-656-4673',
      description: 'Support for survivors of sexual assault and their loved ones.',
      category: 'hotline',
      website: 'https://www.rainn.org'
    },
    {
      name: 'National Center for Victims of Crime',
      phone: '1-855-484-2846',
      description: 'Help for victims to rebuild their lives after crime.',
      category: 'legal',
      website: 'https://victimsofcrime.org'
    },
    {
      name: 'Local Women\'s Shelter',
      phone: '555-123-4567',
      description: 'Emergency shelter, support groups, and assistance for survivors.',
      category: 'shelter'
    },
    {
      name: 'Family Justice Center',
      phone: '555-789-0123',
      description: 'Legal advice, protective orders, and advocacy services.',
      category: 'legal'
    },
    {
      name: 'Domestic Violence Legal Aid',
      phone: '555-456-7890',
      description: 'Free legal representation for domestic violence survivors.',
      category: 'legal'
    },
    {
      name: 'Crisis Text Line',
      phone: 'Text HOME to 741741',
      description: '24/7 support via text message for those in crisis.',
      category: 'hotline',
      website: 'https://www.crisistextline.org'
    }
  ];

  // Weather data for stealth mode
  weatherLocations = [
    { name: 'New York', forecast: 'Sunny', temp: '75°F', humidity: '45%' },
    { name: 'Los Angeles', forecast: 'Clear', temp: '82°F', humidity: '35%' },
    { name: 'Chicago', forecast: 'Partly Cloudy', temp: '68°F', humidity: '55%' },
    { name: 'Houston', forecast: 'Thunderstorms', temp: '88°F', humidity: '75%' },
    { name: 'Phoenix', forecast: 'Sunny', temp: '98°F', humidity: '20%' },
    { name: 'Philadelphia', forecast: 'Cloudy', temp: '72°F', humidity: '60%' },
    { name: 'San Antonio', forecast: 'Partly Cloudy', temp: '86°F', humidity: '50%' },
    { name: 'San Diego', forecast: 'Sunny', temp: '76°F', humidity: '40%' }
  ];

  categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'hotline', name: 'Crisis Hotlines' },
    { id: 'shelter', name: 'Shelters' },
    { id: 'legal', name: 'Legal Support' },
    { id: 'counseling', name: 'Counseling Services' }
  ];

  constructor(private stealthModeService: StealthModeService) {
    this.stealthModeService.stealthMode$.subscribe(isStealthMode => {
      this.isStealthMode = isStealthMode;
    });
  }

  get filteredResources(): Resource[] {
    return this.resources.filter(resource => {
      // Apply category filter
      const categoryMatch = this.selectedCategory === 'all' || resource.category === this.selectedCategory;
      
      // Apply search filter
      const searchMatch = resource.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      return categoryMatch && searchMatch;
    });
  }
}