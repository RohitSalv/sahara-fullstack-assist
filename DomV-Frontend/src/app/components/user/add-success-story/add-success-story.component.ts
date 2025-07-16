import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StealthModeService } from 'src/app/services/stealth-mode.service';
import { SupportRecoveryService } from 'src/app/services/support-recovery.service';

@Component({
  selector: 'app-add-success-story',
  templateUrl: './add-success-story.component.html',
  styleUrls: ['./add-success-story.component.css']
})
export class AddSuccessStoryComponent implements OnInit{
   storyForm: FormGroup;
  isStealthMode = false;

  constructor(
    private fb: FormBuilder,
    private service: SupportRecoveryService,
    private stealthModeService: StealthModeService,
    private router: Router
  ) {
    this.storyForm = this.fb.group({
      title: ['', Validators.required],
      authorName: ['', Validators.required],
      content: ['', Validators.required],
      link: ['']
    });
  }

  ngOnInit(): void {
    this.stealthModeService.stealthMode$.subscribe(mode => this.isStealthMode = mode);
  }

  onSubmit(): void {
    if (this.storyForm.valid) {
      const storyData = this.storyForm.value;
      storyData.datePosted = new Date();
      storyData.approved = false;

      this.service.addStory(storyData).subscribe(() => {
        alert(this.isStealthMode ? 'Entry logged!' : 'Your story has been submitted for review!');
        this.router.navigate(['/']);
      });
    }
  }
}
