<template>
    <nav class="navbar  navbar-expand-lg navbar-dark bg-black bg-gradient sticky-top" id="Shift">
        <div class="container-fluid">
            <route-link to="/" class="nav-link">
             <img src="https://lh3.googleusercontent.com/fife/AGXqzDkGiz9-BidjmjL_DAstu19X4s-StsO4yq82-t9bd783-IBipXAZO6uHjhZZ9ZgQDhWYQWStfxHacAJ-kyYORifYwn_jcAnVDOwexUFtNb0f4RX9m0Xj7lVgZqw9AXIJg0EJUibw5GyO5BNs43vXB6-1dtumw7JO_NsUfd2Cy1O-OnCzjc_DYL7r6nJDhITBo052K5f6N536KmWm7xivAfD1w2ONuwdWvxF9Rv8wXywyZWTUHOAVNA0qLXTrP_DsK08AiUAnYTLKOkqoc0gbz4uD1xIj8mso7EX1d3P-RDWTak835_3e7yDI2-EEntaCcagoNqJJOXtFwSSaldxC9Ybsbw4rfUJTi2ukxW312d_A2mVpRm2L9LwqUi8F7yye8MEFXHoz6dDY8_xxl7VIOWsSL3ujtq2PMMSA6hchHLY9rRNfmiPZkuJjCtq_9ryc-X0eoJnpdgOVY7HpzOKL93LMHEY5biu-paisysn7SQq-WEHC3kfIndxgJp9jkWkXn6FAaUVusvtcEoDZe7MnvMVFfFXLcybuopkHxheM7o-nABL0h14vHruLFTKdm0C_JFx7aQfjmHAEGWdwNTXEbyL4-pY5VxGWjtchVBD-iX8dZyX8FPqpxJL7XmFZqjg0ewjYF7Oiy-NSyZO_SSvF_iFk7ykhNZVlnF4IX08ks--gb7AZih3wNP5UN6a4GSMajXGfPEgQEMwnwPyfVbQenjx2gFoX1ech33nTWS9BcMbvAc6fHXJR4ATtvbC86xwzKbCf-ivvJolw09OykpeZrCKDSCF8XMN3Eu7gb_plqT_K_J2UFHpe145wsyH0Q0-nCBHKqpUPilBauTaVTs62dVnz4c9V5NYJx7E3-8oPamkfxq18ThDFmlA2HvbhqznsxgEkhTS-_LE8VIhpvGd5W0dEJZ7CkNKyKAebY1mtfNX8v6srg_ndd-nIvdQpcFcoZ77dz_IwxxiQ0ZTCKWFUlJ0LiZfTBjvvu4-H7u6h3STFLrbCzEhsnpHgeHoMzqBu0EU9_bnB7l-Xqv3s5eDYulzoh97PsQmx3sloQ2FSWJeoK3XaKNba_HHwVt2xVUPa2g71VQt5JmO2Qa9PW72wvRE_3m2wL4FKZHHl805yk4n5dGygnDDpH5vPEpuKyqrKIXCTs5pQR7h2T2RHgqE5FDdprtyYtH3Wpae0xNtNbfBSjVaUBdQDnwsfplMK3DTk3CJ5lhra9w2oe2rPmGR1f_XWetXXRyJv2T01VuxUKJB05GCMBJIYPj0IJ3mBFRXkTBIcNOxJTvDP_T2HyhP1OcZD9Vz_X3Tb39G_uTuOuSl0xEET1k7qxVV4_dYS8NmGvRcDAOY4nw9DAjGwRlr1iMRt19Sjs3kzVrhpFiqTRCu8reSSBYJpiBMQhSE12OuDVIisArGH8C9H2RoSyJZnRrQJBFPm5N1KmFkM_rPh0kWplcS1rFKGBXksfymnRLHWdIQFQ-VfKXgMOwnnASG_xDnsEhT51L3ojsHkPhvFaomXQRHvoHqySX8=w1003-h892"    class="img-fluid  img-thumbnail " loading="lazy" alt="Logo" id="Navimg">   
            </route-link>
            <button class="navbar-toggler  mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  " id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto  mb-lg-0 mx-end">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home  |</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">About  |</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/resume" class="nav-link">Resume |</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/project" class="nav-link">Project  |</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/testimonials" class="nav-link">Testimonials  |</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link">Contact  </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name : 'navBarComp',
}
</script>

<style scoped></style>