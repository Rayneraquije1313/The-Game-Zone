package backend.thegamezone.productos.controller;


import backend.thegamezone.productos.services.CompraProductoServices;
import backend.thegamezone.productos.model.CompraProducto;
import backend.thegamezone.productos.exception.ExceptionNotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/thegamezone/compraProducto")
public class CompraProductoController {

    @Autowired
    private CompraProductoServices services;

    @GetMapping
    public ResponseEntity<Object> listarSugerencias() {
        List<CompraProducto> listaSugerencias = services.listar();
        return ResponseEntity.ok(listaSugerencias);
    }

    @GetMapping(value = "/{id}",produces = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Object> buscarSugerencias(@PathVariable Long id) {
        CompraProducto compraProducto = services.buscar(id);
        if (compraProducto == null)
            throw new ExceptionNotFound("Usuario no encontrado");
        return ResponseEntity.ok(compraProducto);
    }

    @PostMapping(produces = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE},
            consumes = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Object> crearSugerencias(@RequestBody CompraProducto compraProducto) {
        services.guardar(compraProducto);
        return ResponseEntity.ok(compraProducto);
    }

    @PutMapping(value = "/{id}",produces = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE},
            consumes = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Object> actualizarsugerencias(@PathVariable ("id")int id, @RequestBody CompraProducto compraProducto) {
        services.actualizaCompraProducto(compraProducto);
        return ResponseEntity.ok(compraProducto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Object> eliminarUsuario(@PathVariable("id") Long id) {
        services.eliminar(id);
        return ResponseEntity.ok("Sugerencia eliminado");
    }


}
