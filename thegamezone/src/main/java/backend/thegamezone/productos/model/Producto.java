package backend.thegamezone.productos.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Objects;

@Entity
@Data
@Table(name="producto")
@AllArgsConstructor
@NoArgsConstructor
public class Producto implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idProducto")
    private Long id;

    @Basic(optional = false)
    @Column(name = "tipo")
    public String tipo;

    @Basic(optional = false)
    @Column(name= "nombre")
    public String nombre;

    @Basic(optional = false)
    @Column(name= "descripcion", columnDefinition = "TEXT")
    public String descripcion;

    @Basic(optional = false)
    @Column(name= "precio")
    public BigDecimal precio;

    @Basic(optional = false)
    @Column(name= "stock")
    public BigDecimal stock;

    @Basic(optional = true)
    @Column(name= "image_url")
    public String image_url;

}
