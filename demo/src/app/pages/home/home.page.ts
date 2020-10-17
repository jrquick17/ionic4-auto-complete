import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {injectStyles} from 'shadow-dom-inject-styles';

import {SegmentModel} from '../../models/segment.model';
import {SegmentService} from '../../services/segment.service';

@Component({
  selector:    'home-page',
  templateUrl: 'home.page.html',
  styleUrls: [
    'home.page.scss'
  ],
})
export class HomePage implements OnInit, AfterViewInit {
  public selectedSegment:SegmentModel;
  public segments:SegmentModel[];

  @ViewChild(
      'toolbar',
      {
        read: ElementRef
      }
  )
  private toolbar:ElementRef;

  constructor(
      public segmentProvider:SegmentService,
      private route:ActivatedRoute,
      private router:Router
  ) {
    this.loadSegments();
  }

  ngOnInit():void {
    this.route.fragment.subscribe(
        (fragment) => {
          const segments = this.segmentProvider.getResults(fragment);
          if (segments.length !== 0) {
            this.setSegment(segments[0]);
          }
        }
    );
  }

  ngAfterViewInit() {
    if (this.toolbar && this.toolbar.nativeElement) {
      const styles = `
          ion-toolbar {
          contain: none !important;
          overflow: visible !important;
        }
        
        .toolbar-container {
          contain: none !important;
          overflow: visible !important;
        }
        
        .toolbar-container .toolbar-content {
          contain: none !important;
          overflow: visible !important;
        }
      `;

      injectStyles(this.toolbar.nativeElement, '.toolbar-background', styles);
    }
  }

  loadSegments():void {
    this.segments = this.segmentProvider.getAll();

    this.selectedSegment = this.segments[0];
  }

  onClickSegment(event:CustomEvent):void {
    if (event.detail && typeof event.detail.value === 'string') {
      const segment = event.detail.value;

      this.setSegment(segment);
    }
  }

  setSegment(segment:SegmentModel):void {
    if (typeof segment !== 'undefined') {
      const arrayHas = this.segments.some(
        (candidate) => {
          return candidate.key === segment.key;
        }
      );

      if (arrayHas) {
        this.selectedSegment = segment;

        this.router.navigate(
           [],
           {
             fragment: segment.key
           }
        ).then();
      }
    }
  }
}
