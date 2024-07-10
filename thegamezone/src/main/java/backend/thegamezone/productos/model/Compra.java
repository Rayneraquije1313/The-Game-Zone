package backend.thegamezone.productos.model;

import backend.thegamezone.usuario.Usuario;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Data
@Table(name="compra")
@NamedQueries({
        @NamedQuery(name = "Compra.findAll", query = "SELECT u FROM Compra u"),
        @NamedQuery(name = "Compra.findById", query = "SELECT u FROM Compra u WHERE u.id=:id"),
        @NamedQuery(name = "Compra.findByUsuario", query = "SELECT u FROM Compra u WHERE u.usuario=:usuario"),
        @NamedQuery(name = "Compra.findByfechaCompra", query = "SELECT u FROM Compra u WHERE u.fechaCompra=:fechaCompra"),
})
public class Compra implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCompra")
    private Long id;

    @JoinColumn(name = "usuario",referencedColumnName = "id")
    @ManyToOne(optional = false)
    private Usuario usuario;

    @CreationTimestamp
    private LocalDateTime fechaCompra;

    public Compra() {

    }

    public Compra(Long id, LocalDateTime fechaCompra, Usuario usuario) {
        this.id = id;
        this.fechaCompra = fechaCompra;
        this.usuario = usuario;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getFechaCompra() {
        return fechaCompra;
    }

    public void setFechaCompra(LocalDateTime fechaCompra) {
        this.fechaCompra = fechaCompra;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Compra compra = (Compra) o;
        return Objects.equals(id, compra.id) && Objects.equals(usuario, compra.usuario) && Objects.equals(fechaCompra, compra.fechaCompra);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, usuario, fechaCompra);
    }

    @Override
    public String toString() {
        return "Compra{}";
    }
}
