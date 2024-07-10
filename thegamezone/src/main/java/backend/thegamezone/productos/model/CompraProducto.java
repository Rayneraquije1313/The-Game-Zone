package backend.thegamezone.productos.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Objects;

@Entity
@Data
@Table(name="compraProducto")
public class CompraProducto implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCompraProducto")
    private Long id;

    @JoinColumn(name = "compra",referencedColumnName = "idCompra")
    @ManyToOne(optional = false)
    private Compra compra;

    @JoinColumn(name = "producto",referencedColumnName = "idProducto")
    @ManyToOne(optional = false)
    private Producto producto;

    @Basic(optional = false)
    @Column(name = "cantidad")
    private int cantidad;

    public CompraProducto() {

    }

    public CompraProducto(Long id, Compra compra, Producto producto, int cantidad) {
        this.id = id;
        this.compra = compra;
        this.producto = producto;
        this.cantidad = cantidad;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Compra getCompra() {
        return compra;
    }

    public void setCompra(Compra compra) {
        this.compra = compra;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CompraProducto that = (CompraProducto) o;
        return cantidad == that.cantidad && Objects.equals(id, that.id) && Objects.equals(compra, that.compra) && Objects.equals(producto, that.producto);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, compra, producto, cantidad);
    }

    @Override
    public String toString() {
        return "CompraProducto{}";
    }
}
