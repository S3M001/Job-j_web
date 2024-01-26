/*CDNを忘れず記述する*/
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

/*----------HTML内へ記述する場合は、<script>〜</script>で、囲いましょう*/
$(function() {
$('.Toggle').click(function() {
    $(this).toggleClass('active');
$('.TopVarUser-nav').toggleClass('open');
});
});