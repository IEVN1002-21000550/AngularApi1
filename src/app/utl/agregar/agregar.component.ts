import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Alumnos } from '../alumnos';
import { RouterLink , Router} from '@angular/router';
import { ProyectoapiService } from '../proyectoapi.service';
@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './agregar.component.html',
  styles: ``
})
export default class AgregarComponent {
  formGroup!: FormGroup;
 
  regAlumno:Alumnos={
    matricula:0,
      nombre: '',
      apaterno: '',
      amaterno: '',
      correo:''
  }
  constructor(private fb: FormBuilder,public alumnos:ProyectoapiService, private router:Router) { }
 
  ngOnInit(): void {
    this.formGroup=this.initForm();
  }
 
  initForm():FormGroup{
    return this.fb.group({
      matricula: [''],
      nombre: [''],
      apaterno: [''],
      amaterno: [''],
      correo:['']
  })
 
    }
 
    agregar(){
      this.alumnos.agregarNuevoAlumno(this.regAlumno).subscribe({
        next:()=>console.log(),
 
        complete:()=>console.info()})
 
        this.regAlumno={
          matricula:0,
          nombre:'',
          apaterno:'',
          amaterno:'',
          correo:''
        }
 
        this.router.navigate(['/utl/listaalumnos'])
 
    }
 
    onSubmit():void{
      const {matricula,nombre,apaterno,amaterno,correo}= this.formGroup.value;
 
      this.regAlumno.matricula=matricula,
      this.regAlumno.nombre=nombre,
      this.regAlumno.apaterno=apaterno,
      this.regAlumno.amaterno=amaterno,
      this.regAlumno.correo=correo
      this.agregar()
 
    }
 
 
}
 