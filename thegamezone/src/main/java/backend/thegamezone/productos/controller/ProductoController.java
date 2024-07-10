package backend.thegamezone.productos.controller;


import backend.thegamezone.productos.services.ProductoServices;
import backend.thegamezone.productos.model.Producto;
import backend.thegamezone.productos.exception.ExceptionNotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/thegamezone/producto")
public class ProductoController {

    @Autowired
    private ProductoServices services;

    @GetMapping()
    public ResponseEntity<Object> listar(@RequestParam(required = false) String tipo) {
        List<Producto> productos;
        if (tipo != null) {
            productos = services.listarPorTipo(tipo);
        } else {
            productos = services.listar();
        }
        return ResponseEntity.ok(productos);
    }

    @GetMapping(value = "/{id}",produces = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Object> buscar(@PathVariable Long id) {
        Producto producto = services.buscar(id);
        if (producto == null)
            throw new ExceptionNotFound("no encontrado");
        return ResponseEntity.ok(producto);
    }


    @PostMapping(produces = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE},
            consumes = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Object> crear(@RequestBody Producto producto) {
        services.guardar(producto);
        return ResponseEntity.ok(producto);
    }

    @PutMapping(value = "/{id}", produces = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE},
            consumes = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Object> actualizar(@PathVariable ("id")int id, @RequestBody Producto producto) {
        services.actualizar(producto);
        return ResponseEntity.ok(producto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Object> eliminar(@PathVariable("id") Long id) {
        services.eliminar(id);
        return ResponseEntity.ok("eliminado");
    }


}
