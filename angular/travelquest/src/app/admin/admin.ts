import { Component, inject, OnInit} from '@angular/core';
import { Services } from '../services/services';
import { FormsModule,  } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [FormsModule,CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit{
  private service=inject(Services);
  voyages: any[] = [];

  voyage = {
    id: 0,
    destination: '',
    pays:'',
    prix: 0,
    image:""
  };

  editMode = false;
selectedImage:any;
  imagePath:string='';
  

  ngOnInit(): void {
    this.loadVoyages();
  }
   loadVoyages() {
    this.service.getvoyage().subscribe(data => {
      this.voyages = data;
    });
  }

  saveVoyage() {
    if (this.editMode) {
      this.service.update(this.voyage.id, this.voyage).subscribe(() => {
        this.loadVoyages();
        this.resetForm();
      });
    } else {
      this.service.addvoyage(this.voyage).subscribe(() => {
        this.loadVoyages();
        this.resetForm();
      });
    }
  }

  editVoyage(v: any) {
    this.voyage = { ...v };
    this.editMode = true;
  }

  deleteVoyage(id: number) {
    this.service.deletevoyage(id).subscribe(() => {
      this.loadVoyages();
    });
  }

  resetForm() {
    this.voyage = { id: 0, destination: '',pays:'', prix: 0 ,image:''};
    this.editMode = false;
  }
  onFileSelected(event: any) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = () => {
      this.voyage.image = reader.result as string;
    };

    reader.readAsDataURL(file);
  }
}
 
}


 
 
