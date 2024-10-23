import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hrportal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hrportal.component.html',
  styleUrls: ['./hrportal.component.css']
})
export class HrportalComponent implements OnInit, OnDestroy {
  requests: any[] = []; // Array to hold project requests
  private storageListener: any;

  ngOnInit(): void {
    this.loadRequests();
    this.startListeningForStorageChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('storage', this.storageListener);
  }

  startListeningForStorageChanges(): void {
    this.storageListener = () => {
      this.loadRequests();
    };
    window.addEventListener('storage', this.storageListener);
  }

  loadRequests(): void {
    const storedRequests = localStorage.getItem('projectRequests');
    
    if (storedRequests) {
      const parsedRequests = JSON.parse(storedRequests);

      const skills = Object.keys(parsedRequests)
        .filter(key => key !== 'project')
        .map(key => ({
          name: key.replace('Count', ''),
          count: parsedRequests[key] || 0
        }));

      this.requests = [{
        projectId: parsedRequests.project || 'N/A',
        skills: skills
      }];
    }
  }

  publishRequest(request: any): void {
    console.log('Publishing request:', request);
  }
}
