package backend.thegamezone.usuario;

import backend.thegamezone.productos.model.Sugerencias;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
@RequiredArgsConstructor
public class UsuarioController {

    private final Services usuarioServices;

    @GetMapping(value = "{id}")
    public ResponseEntity<UsuarioDto> getUsuario(@PathVariable Integer id) {
        UsuarioDto usuarioDto = usuarioServices.getUsuario(id);
        if (usuarioDto == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(usuarioDto);
    }

    @GetMapping()
    public ResponseEntity<Object> listar() {
        List<Usuario> listaSugerencias = usuarioServices.listar();
        return ResponseEntity.ok(listaSugerencias);
    }


    @PutMapping()
    public ResponseEntity<UsuarioResponse> updateUsuario(@RequestBody UsuarioRequest request){
        return ResponseEntity.ok(usuarioServices.updateUsuario(request));
    }

}
