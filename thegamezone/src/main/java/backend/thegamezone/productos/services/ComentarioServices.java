package backend.thegamezone.productos.services;
import backend.thegamezone.productos.model.Comentarios;
import backend.thegamezone.productos.repositorio.ComentarioRepositorio;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ComentarioServices {

    @Autowired
    public ComentarioRepositorio repositorio;

    public List<Comentarios> listar(){
        return repositorio.findAll();
    }

    public Comentarios guardar(Comentarios sugerencias){
        return repositorio.save(sugerencias);
    }

    public Comentarios buscar(Long id){
        return repositorio.findById(id).get();
    }

    public Comentarios actualizaSugerencias(Comentarios comentarios){

        Comentarios sugerenciaActual =repositorio.findById(comentarios.getId()).get();
        sugerenciaActual.setId(comentarios.getId());
        sugerenciaActual.setComentario(comentarios.getComentario());
        sugerenciaActual.setUsuario(comentarios.getUsuario());
        sugerenciaActual.setProducto(comentarios.getProducto());
        Comentarios actualizado = repositorio.save(comentarios);
        return actualizado;
    }

    public void eliminaSugerencias(Long id){
        repositorio.deleteById(id);
    }

    public void actualizar(Long id, Comentarios comentarios){
        Comentarios sugerenciasActualizado = repositorio.findById(id).get();
        sugerenciasActualizado.setId(comentarios.getId());
        sugerenciasActualizado.setComentario(comentarios.getComentario());
        sugerenciasActualizado.setUsuario(comentarios.getUsuario());
        sugerenciasActualizado.setProducto(comentarios.getProducto());
        repositorio.save(sugerenciasActualizado);
    }
}
