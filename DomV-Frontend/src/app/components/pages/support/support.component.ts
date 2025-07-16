import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StealthModeService } from '../../../services/stealth-mode.service';

interface SupportGroup {
  name: string;
  description: string;
  schedule: string;
  location: string;
  online: boolean;
  category: string;
}

interface HelplineInfo {
  name: string;
  phone: string;
  hours: string;
  description: string;
}

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
  isStealthMode = false;
  activeTab = 'helplines';
  
  supportGroups: SupportGroup[] = [
    {
      name: 'Domestic Violence Survivors',
      description: 'Support group for those who have experienced domestic violence, focusing on healing and rebuilding.',
      schedule: 'Tuesdays at 7:00 PM',
      location: 'Community Center, 123 Main St',
      online: true,
      category: 'domestic'
    },
    {
      name: 'Healing Through Art',
      description: 'Art therapy group for survivors to express emotions and process trauma through creative outlets.',
      schedule: 'Thursdays at 6:30 PM',
      location: 'Arts Center, 456 Oak Ave',
      online: false,
      category: 'therapy'
    },
    {
      name: 'Parents Support Circle',
      description: 'For parents who are survivors of abuse, addressing parenting challenges after trauma.',
      schedule: 'Mondays at 5:00 PM',
      location: 'Family Services Building, 789 Elm St',
      online: true,
      category: 'family'
    },
    {
      name: 'Young Survivors (18-25)',
      description: 'Peer support group specifically for young adults who have experienced relationship abuse.',
      schedule: 'Wednesdays at 7:30 PM',
      location: 'Youth Center, 321 Pine St',
      online: true,
      category: 'youth'
    }
  ];
  
  helplines: HelplineInfo[] = [
    {
      name: 'National Domestic Violence Hotline',
      phone: '1-800-799-7233',
      hours: '24/7',
      description: 'Advocates available to talk confidentially with anyone experiencing domestic violence, seeking resources or information, or questioning unhealthy aspects of their relationship.'
    },
    {
      name: 'Crisis Text Line',
      phone: 'Text HOME to 741741',
      hours: '24/7',
      description: 'Connect with a trained crisis counselor to receive free, 24/7 crisis support via text message.'
    },
    {
      name: 'National Sexual Assault Hotline',
      phone: '1-800-656-HOPE (4673)',
      hours: '24/7',
      description: 'Connects callers to a trained staff member from a sexual assault service provider in your area.'
    },
    {
      name: 'StrongHearts Native Helpline',
      phone: '1-844-762-8483',
      hours: '7am-10pm CT, 7 days/week',
      description: 'Culturally-appropriate domestic violence and dating violence helpline for Native Americans.'
    }
  ];
  
  recoveryTools = [
    {
      title: 'Safety Planning Guide',
      description: 'Interactive tool to create a personalized safety plan for different situations.',
      icon: '🛡️'
    },
    {
      title: 'Mindfulness Exercises',
      description: 'Simple guided exercises to help manage anxiety and stress responses.',
      icon: '🧘'
    },
    {
      title: 'Healing Journal Prompts',
      description: 'Writing prompts designed to support reflection and processing trauma.',
      icon: '📔'
    },
    {
      title: 'Financial Independence Planning',
      description: 'Resources for rebuilding financial stability after economic abuse.',
      icon: '💰'
    }
  ];
  
  // Weather alerts for stealth mode
  weatherAlerts = [
    {
      name: 'Severe Thunderstorm Watch',
      area: 'Northern Counties',
      expires: 'Today, 9:00 PM',
      description: 'Conditions are favorable for severe thunderstorms with potential for strong winds and hail.'
    },
    {
      name: 'Flash Flood Warning',
      area: 'Coastal Regions',
      expires: 'Tomorrow, 6:00 AM',
      description: 'Heavy rainfall may cause flash flooding in low-lying areas. Avoid flood-prone areas.'
    },
    {
      name: 'Heat Advisory',
      area: 'Southern Valley',
      expires: 'Wednesday, 8:00 PM',
      description: 'Temperatures expected to reach 95-100°F. Take precautions to prevent heat-related illness.'
    },
    {
      name: 'Air Quality Alert',
      area: 'Metro Area',
      expires: 'Thursday, 12:00 PM',
      description: 'Unhealthy air quality levels. Sensitive groups should limit outdoor activity.'
    }
  ];
  
  constructor(private stealthModeService: StealthModeService) {
    this.stealthModeService.stealthMode$.subscribe(isStealthMode => {
      this.isStealthMode = isStealthMode;
    });
  }
  
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}