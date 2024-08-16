import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../../servicios/peticion.service';

declare let $:any
declare let Swal:any

@Component({
  selector: 'app-misdatos',
  templateUrl: './misdatos.component.html',
  styleUrls: ['./misdatos.component.css']
})
export class MisdatosComponent implements OnInit{


  ngOnInit(): void {
    this.cargarTodas
    this.cargarTodas()
  }
  
  constructor (private peticion:PeticionService){}

  email:string = ""
  nombre:string = ""
  rol:string = '2'
  direccion: any = ""
  telefono:any = ""
  estado:string = '0'
  datos:any[] = []
  Idusuario:string =""
  ciudad:string = "" 
  password:any = ""
  pwconf1:string = ""
  pwconf2:string = ""
  
  cargarTodas(){

    let post = {
      host:this.peticion.urlHost,
      path:"/usuarios/misdatos",
      payload:{
      }
    }
  this.peticion.Post(post.host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      this.datos = res.data

      // this.nombre = res.data[0].nombre
      // this.email = res.data[0].email
      // this.estado = res.data[0].estado
      // this.direccion = res.data[0].direccion
      // this.telefono = res.data[0].telefono
      // this.rol = res.data[0].rol
      // this.Idusuario = res.data._id

    }
  )}

  EditarId(id:string){
    this.Idusuario =id
    let post = {
      host:this.peticion.urlHost,
      path:"/usuarios/misdatos",
      
    }
  this.peticion.get(post.host+post.path + "/" + this.Idusuario).then(
    (res:any) => {
      console.log(res)
      this.email = res.data[0].email
      this.nombre = res.data[0].nombre
      this.estado = res.data[0].estado
      $('#modalNuevo').modal('show')
    }
  )
  }
  Editarpsw(id:string){
    this.Idusuario =id
    let post = {
      host:this.peticion.urlHost,
      path:"/usuarios/misdatos",
    }
  this.peticion.get(post.host+post.path + "/" + this.Idusuario).then(
    (res:any) => {
      console.log(res)
      $('#modalNuevo2').modal('show')
    }
  )
  }

  ActualizarDatos(){

    let post = {
      host:this.peticion.urlHost,
      path:"/usuarios/actualizardatos",
      payload:{

        email:this.email,
        nombre:this.nombre,
        estado:this.estado,
        direccion:this.direccion,
        telefono:this.telefono,

      }
    }
  this.peticion.Post(post.host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      if(res.state == true){

        Swal.fire({
          icon: "success",
          title: "Que Bien!",
          text: res.mensaje,
        });

        $('#modalNuevo').modal('hide')
        this.cargarTodas()
      }
      else{
        Swal.fire({
          icon: "error",
          title: "Ouchh.",
          text: res.mensaje,
        });
      }
    })
  }

}
