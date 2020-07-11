
<!DOCTYPE html>
<html>
<head>
    <title>Dogan Hazar</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/yarisma-ekleme.css">
    <link rel="stylesheet" type="text/css" href="css/profesyonel-ol.css">
    <link rel="stylesheet" type="text/css" href="css/mobile-bottom-menu.css">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.4/croppie.min.js" ></script>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.4/croppie.min.css">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.0/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.0/css/bootstrap.css"></script>
    <script type="text/javascript" src="js/croppie.js"></script>
    <link rel="stylesheet" type="text/css" href="js/croppie.css">

    <!-- Include stylesheet -->
    <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="css/searchbox.css">
	<script src="./js/searchbox.js" type="text/javascript"></script>
</head>
<body>

<header>
    <div class="logo" style="margin-right: auto;
		margin-left: 5%;">
        <h1><a href="index.html">dizay<span>n</span>et</a></h1>
    </div>


</header>


<!--
	<section class="hero-image">
		<img src="images/yarismaekle.jpg">
		<div class="image-overlay">
			<h1>Bize İhtiyacınızdan Bahsedin</h1>
			<p>Profesyonellerle hemen iletişime geçin. Profilleri, yorumları ve portföyleri <br> görüntüleyin. Teklifleri beğendiğiniz takdirde satın alın
			</p>
		</div>
	</section>
-->



<section class="yarisma-ekle">
    <div class="form-nav">
        <nav id="desktop-nav">
            <a href="#genel" class="active-nav nav_btn"><span class="nav-fa"><i class="fa fa-cog"></i></span><p>Genel</p></a>
            <a href="#egitim" class="nav_btn"><span class="nav-fa"><i class="fa fa-user-graduate"></i></span><p>Eğitim</p></a>
            <a href="#servisler" class="nav_btn"><span class="nav-fa"><i class="fa fa-tags"></i></span><p>Servisler</p></a>
            <a href="#lokasyon" class="nav_btn"><span class="nav-fa"><i class="fa fa-map-marker-alt"></i></span><p>Lokasyon</p></a>
            <a href="#iletisim" class="nav_btn"><span class="nav-fa"><i class="fa fa-mobile-alt"></i></span><p>İletişim</p></a>
            <a href="#sosyalmedya" class="nav_btn"><span class="nav-fa"><i class="fa fa-share-alt-square"></i></span><p>Sosyal Medya</p></a>
            <a href="#mediaa" class="nav_btn"><span class="nav-fa"><i class="fa fa-image"></i></span><p>Medya</p></a>
        </nav>
    </div>


    <form method="POST" action="">
        <h1>Profesyonel misiniz? Profilinizi oluşturmaya hemen başlayın.</h1>
        <p>Projeleriniz sergileyin ve yüzlerce müşteri size kolayca ulaşsın.</p>

        <div class="form-box scrollspy" id="genel">
            <div class="form-section">
                <h3>GENEL</h3>
                <p>Profil bilgilerinizi eksiksiz doldurarak müşterilerin sizi bulmasını kolaylaştırın.</p>
                <div class="el">
                    <p>Profesyonel /Şirket Adı</p>
                    <input type="text" name="" placeholder="Kişi veya Şirket Adınızı giriniz">
                </div>

                <div class="el">
                    <p>Profesyonel Kategori</p>
                    <div class="select-box">
                        <select class="first" id="proje-tur">
                            <option>Mimari</option>
                            <option>İç Mimari</option>
                            <option>Peyzaj Mimarı</option>
                            <option>Endüstriyel Tasarımcı</option>
                            <option>Tasarımcı</option>
                            <option>Dekoratör</option>
                        </select>
                        <div class="down">
                            <i class="fa fa-chevron-down"></i>
                        </div>
                    </div>
                </div>

                <div class="el">
                    <p>İş Hakkında</p>

                    <div id="editor">

                    </div>
                </div>
            </div>
        </div>


        <div class="form-box scrollspy" id="egitim">
            <div class="form-section">
                <h3>EĞİTİM</h3>
                <p>Projenizi en iyi tanımlayacak etiketleri seçiniz.</p>
                <div class="el">
                    <p>Eğitim Durumunuz</p>
                    <div class="select-box">
                        <select class="first" id="proje-tur">
                            <option>Öğrenci</option>
                            <option>Ön Lisans</option>
                            <option>Mezun</option>
                            <option>Yüksek Lisans</option>
                            <option>Doktora</option>
                        </select>
                        <div class="down">
                            <i class="fa fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
                <div class="el">
                    <p>Üniversiteniz</p>
                    <input type="text" name="" placeholder="Üniversite adı">
                </div>



            </div>
        </div>




        <div class="form-box scrollspy" id="servisler">
            <div class="form-section">
                <h3>SERVİSLER</h3>
                <p>Yeteneklerinizi göstermek için sağladığınız servisleri seçiniz.</p>
                <div class="hl-checkboxes">


                    <label class="hl-container">3D Modelleme
                        <input type="checkbox" checked="checked">
                        <span class="hl-checkmark"></span>
                    </label>
                    <label class="hl-container">Render
                        <input type="checkbox">
                        <span class="hl-checkmark"></span>
                    </label>
                    <label class="hl-container">Mimari Plan
                        <input type="checkbox">
                        <span class="hl-checkmark"></span>
                    </label>
                    <label class="hl-container">Sürdürülebilir Tasarım
                        <input type="checkbox">
                        <span class="hl-checkmark"></span>
                    </label>

                    <label class="hl-container">Parametrik Tasarım
                        <input type="checkbox">
                        <span class="hl-checkmark"></span>
                    </label>
                    <label class="hl-container">Teknik Çizim
                        <input type="checkbox">
                        <span class="hl-checkmark"></span>
                    </label>
                    <label class="hl-container">Mimari Tasarım
                        <input type="checkbox">
                        <span class="hl-checkmark"></span>
                    </label>
                    <label class="hl-container">İç Mimari Tasarım
                        <input type="checkbox">
                        <span class="hl-checkmark"></span>
                    </label>
                </div>
            </div>
        </div>


        <div class="form-box scrollspy" id="lokasyon">
            <div class="form-section">
                <h3>LOKASYON</h3>
                <div class="multiple-inputs">
                    <div class="el">
                        <p>Şehir</p>
                        <input type="text" name="" placeholder="Bulunuduğunuz ili giriniz">
                    </div>
                    <div class="el">
                        <p>Posta Kodu</p>
                        <input type="text" name="" placeholder="Örn. 06800">
                    </div>
                </div>
                <div class="el">
                    <p>Adres</p>
                    <input type="text" name="" placeholder="">
                </div>

                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=turkey&t=&z=7&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>


        <div class="form-box scrollspy" id="iletisim">
            <div class="form-section">
                <h3>İLETİŞİM</h3>


                <div class="el">
                    <p>Telefon</p>
                    <input type="text" name="" placeholder="Telefon numaranız">
                </div>

                <div class="el">
                    <p>Website</p>
                    <input type="text" name="" placeholder="https://">
                </div>

            </div>
        </div>




        <div class="form-box scrollspy" id="sosyalmedya">
            <div class="form-section">
                <h3>SOSYAL MEDYA</h3>
                <p>Sosyal medya sayfalarını profilinize bağlayarak müşterilerin sizi daha iyi tanımasını sağlayın.</p>


                <div class="el">
                    <p>Facebook</p>
                    <input type="text" name="" placeholder="Telefon numaranız">
                </div>

                <div class="el">
                    <p>Instagram</p>
                    <input type="text" name="" placeholder="https://">
                </div>

                <div class="el">
                    <p>Behance</p>
                    <input type="text" name="" placeholder="https://">
                </div>

                <div class="el">
                    <p>Linkedin</p>
                    <input type="text" name="" placeholder="https://">
                </div>

                <div class="el">
                    <p>YouTube</p>
                    <input type="text" name="" placeholder="https://">
                </div>

            </div>
        </div>


        <div class="form-box scrollspy" id="mediaa">
            <div class="form-section">
                <h3>PROFİL FOTOĞRAFI</h3>
                <p>Profil fotoğrafınız arama sonuçlarında ve profilinizde görünecektir. En iyisini seçmeye özen gösterin.</p>
                <div class="el big-media">
                    <p><i class="fa fa-user"></i></p>
                    <span>Fotoğraf Yükle</span>
                    <input type="file" class="custom-input" name="upload_image" id="upload_image" accept="image/*"/>
                </div>
                <br>
                <br>
                <!-- resim yüklendikten sonra önizleme burada gösterilecek. -->
                <div class="profil-foto-onizleme">
                    <img id="uploaded_image">
                </div>
            </div>
        </div>




        <div class="submit-btn">
            <button type="submit">GÖNDER</button>
        </div>

        <div class="asd" style="width: 100%;
		height: 100%;margin-bottom: 150px;"></div>
    </form>

    </div>

</section>



<div id="uploadimageModal" class="modal" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Profil Fotoğrafınız</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-8 text-center">
                        <div id="image_demo"></div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">İptal</button>
                <button class="btn btn-success crop_image">Kaydet</button>
            </div>
        </div>
    </div>
</div>







<div id="id03" class="mobile-search-modal">
    <form class="search-modal">
        <input type="text" name="" placeholder="Tasarım fikir bulun..">
        <button><i class="fa fa-search"></i></button>
    </form>
</div>



<div class="mobile-cont-filter" id="mobile-cont-filter">

</div>

<div class="mobile-bottom-menu">
		<ul>
			<li><a href="tasarim.html"><img src="images/dizayn-ico.svg" alt=""></a></li>
			<li><a href="profesyoneller.html"><img src="images/profesyoneller-ico.svg" alt=""></a></li>
			<li><a href="blog.html" class="active-bottom-link"><img src="images/blog-ico.svg" alt=""></a></li>
			<li><a href="yarisma.html"><img src="images/yarisma-ico.svg" alt=""></a></li>
			<li><a href="profil.html"><i class="fa fa-user-circle"></i></a></li>
		</ul>
	</div>



<!-- giriş yap formu -->
<div id="id01" class="modal">
    <form class="modal-content animate" action="" method="post">
        <div class="container">
            <h3>Hoşgeldiniz</h3>
            <p>Devam etmek için lütfen giriş yapın.</p>
            <input type="mail" name="" placeholder="E-posta">
            <input type="password" name="" placeholder="Şifre">
            <a class="forget-pass" href="sifremi-unuttum.html">Şifremi unuttum</a>
            <p class="or">Veya</p>

            <a class="facebook-login" href="#!"><i class="fab fa-facebook-square"></i>&nbsp;&nbsp;&nbsp;Facebook ile devam et</a>
            <a class="google-login" href="#!"><img src="images/google-icon.png">&nbsp;&nbsp;&nbsp;Google ile devam et</a>
            <button type="submit">Giriş Yap</button>

            <p class="dont-have-acc">Hesabınız yok mu? <a onclick="openRegister()">Kayıt Ol</a></p>
        </div>
    </form>
</div>

<!-- kayıt ol formu -->
<div id="id02" class="modal2">
    <form class="modal-content animate modal-kayit" action="" method="post">
        <div class="container">
            <h3>Kayıt Ol</h3>
            <p>Devam etmek için lütfen bilgilerinizi girin.</p>

            <div class="register-radios">
                <label class="container-check">Tasarımcıyım
                    <input type="checkbox">
                    <span class="checkmark-check"></span>
                </label>
                <label class="container-check">Tasarımcı Arıyorum
                    <input type="checkbox">
                    <span class="checkmark-check"></span>
                </label>
            </div>
            <input type="mail" name="" placeholder="E-posta">
            <input type="password" name="" placeholder="Şifre">
            <label class="login-container">
                Haber bülteni ve yenilikler ile ilgili mail almak istiyorum.
                <input type="checkbox" checked="checked">
                <span class="login-checkmark"></span>
            </label>
            <label class="login-container">
                Hüküm&Koşullar ve Gizlilik Politikasını kabul ediyorum.
                <input type="checkbox">
                <span class="login-checkmark"></span>
            </label>

            <p class="or">Veya</p>

            <a class="facebook-login" href="#!"><i class="fab fa-facebook-square"></i>&nbsp;&nbsp;&nbsp;Facebook ile devam et</a>
            <a class="google-login" href="#!"><img src="images/google-icon.png">&nbsp;&nbsp;&nbsp;Google ile devam et</a>
            <button type="submit">Kayıt Ol</button>

            <p class="dont-have-acc">Hesabınız var mı? <a onclick="openLogin()">Giriş Yap</a></p>
        </div>
    </form>
</div>




<script type="text/javascript">
    $(document).ready(function(){

        $image_crop = $('#image_demo').croppie({
            enableExif: true,
            viewport: {
                width:240,
                height:240,
                type:'square' //circle
            },
            boundary:{
                width:300,
                height:300
            }
        });

        $('#upload_image').on('change', function(){
            var reader = new FileReader();
            reader.onload = function (event) {
                $image_crop.croppie('bind', {
                    url: event.target.result
                }).then(function(){
                    console.log('jQuery bind complete');
                });
            }
            reader.readAsDataURL(this.files[0]);
            $('#uploadimageModal').modal('show');
        });

        $('.crop_image').click(function(event){
            $image_crop.croppie('result', {
                type: 'canvas',
                size: 'viewport'
            }).then(function(response){
                $.ajax({
                    url:"", // upload.php dosyası gelecek
                    type: "POST",
                    data:{"image": response},
                    success:function(data)
                    {
                        console.log("Başarılı!")
                    }

                });
                $('#uploadimageModal').modal('hide');
                $('#uploaded_image').attr("src", response); // resim kesilip yüklendkten sonra önizlemede gösteriyorum.
            })
        });

    });
</script>







<script type="text/javascript">

    (function() {
        'use strict';

        var section = document.querySelectorAll(".scrollspy");
        var sections = {};
        var i = 0;

        Array.prototype.forEach.call(section, function(e) {
            sections[e.id] = e.offsetTop;
        });

        window.onscroll = function() {
            var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
            for (i in sections) {
                if (sections[i] <= (scrollPosition + 400)) {
                    document.querySelector('.active-nav').setAttribute('class', ' ');
                    document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active-nav');
                }
            }
        };
    })();


</script>


<!-- Include the Quill library -->
<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>

<!-- Initialize Quill editor -->
<script>




    var toolbarOptions = [
        ['bold', 'italic', 'underline'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],

        [{ 'align': [] }],
    ];

    var quill = new Quill('#editor', {
        theme: 'snow',
        modules: {
            toolbar: toolbarOptions
        }
    });
</script>

<script type="text/javascript" src="js/main.js"></script>

</body>
</html>
