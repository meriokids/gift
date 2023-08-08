import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  value: string | undefined;

  message: string | undefined;

  nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: SubjectService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}
