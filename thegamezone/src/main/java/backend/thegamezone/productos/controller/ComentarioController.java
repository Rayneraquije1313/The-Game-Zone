package backend.thegamezone.productos.controller;


import backend.thegamezone.productos.exception.ExceptionNotFound;
import backend.thegamezone.productos.services.SugerenciaServices;
import backend.thegamezone.productos.model.Sugerencias;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/thegamezone/comentarios")
public class ComentarioController {

    @Autowired
    private SugerenciaServices services;

    @GetMapping
    public ResponseEntity<Object> listarSugerencias() {
        List<Sugerencias>listaSugerencias = services.listaSugerencias();
        return ResponseEntity.ok(listaSugerencias);
    }

    @GetMapping(value = "/{id}",produces = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Object> buscarSugerencias(@PathVariable Long id) {
        Sugerencias sugerencias = services.buscaSugerencias(id);
        if (sugerencias == null)
            throw new ExceptionNotFound("Usuario no encontrado");
        return ResponseEntity.ok(sugerencias);
    }

    @PostMapping(produces = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE},
            consumes = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Object> crearSugerencias(@RequestBody Sugerencias sugerencias) {
        services.guardaSugerencias(sugerencias);
        return ResponseEntity.ok(sugerencias);
    }

    @PutMapping(value = "/{id}",produces = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE},
            consumes = {MediaType.APPLICATION_JSON_VALUE,MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Object> actualizarsugerencias(@PathVariable ("id")int id, @RequestBody Sugerencias sugerencias) {
        services.actualizaSugerencias(sugerencias);
        return ResponseEntity.ok(sugerencias);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Object> eliminarUsuario(@PathVariable("id") Long id) {
        services.eliminaSugerencias(id);
        return ResponseEntity.ok("Sugerencia eliminado");
    }


}
