package backend.thegamezone.productos.services;
import backend.thegamezone.productos.model.Sugerencias;
import backend.thegamezone.productos.repositorio.SugerenciaRepositorio;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class SugerenciaServices {

    @Autowired
    public SugerenciaRepositorio repositorio;

    public List<Sugerencias> listaSugerencias(){
        return repositorio.findAll();
    }

    public Sugerencias guardaSugerencias(Sugerencias sugerencias){
        return repositorio.save(sugerencias);
    }

    public Sugerencias buscaSugerencias(Long id){
        return repositorio.findById(id).get();
    }

    public Sugerencias actualizaSugerencias(Sugerencias sugerencias){

        Sugerencias sugerenciaActual =repositorio.findById(sugerencias.getId()).get();
        sugerenciaActual.setId(sugerencias.getId());
        sugerenciaActual.setSugerencia(sugerencias.getSugerencia());

        Sugerencias sugerenciasActualizado = repositorio.save(sugerencias);
        return sugerenciasActualizado;
    }

    public void eliminaSugerencias(Long id){
        repositorio.deleteById(id);
    }

    public void actualizar(Long id, Sugerencias sugerencias){
        Sugerencias sugerenciasActualizado = repositorio.findById(id).get();
        sugerenciasActualizado.setId(sugerencias.getId());
        sugerenciasActualizado.setSugerencia(sugerencias.getSugerencia());
        repositorio.save(sugerenciasActualizado);
    }
}
