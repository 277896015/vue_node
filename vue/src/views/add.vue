<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10" style="margin-top:50px;">
        <div class="panel panel-default">
          <div class="panel-heading">增加商品</div>
          <div class="panel-body">
            <div class="table-responsive input-form">
              <form action method="post">
                <ul>
                  <li>
                    商品名称:
                    <input type="text"  v-model="form.title">
                  </li>

                  <li>
                    商品图片:
                    <input type="file" ref="pic" >
                  </li>
                  <li>
                    商品价格:
                    <input type="text" v-model="form.price">
                  </li>
                  <li>
                    商品邮费:
                    <input type="text"  v-model="form.fee">
                  </li>

                  <li>
                    商品描述:
                    <textarea  v-model="form.description" id cols="60" rows="8"></textarea>
                  </li>
                  <li>
                    <br>
                    <button type="submit" class="btn btn-default" @click.prevent="submit">提交</button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "add",
        data() {
            return {
                form: {
                    title: "",
                    pic: "",
                    price: "",
                    fee: "",
                    description: "",

                }
            }
        },
        methods: {
            submit() {
                //提交数据有图片的话 Formdata
                var data = new FormData();
                data.append('title', this.form.title);
                data.append('price', this.form.price);
                data.append('fee', this.form.fee);
                data.append('pic', this.$refs.pic.files[0]);

                data.append('description', this.form.description);
                this.$axios.post('/api/add', data).then(res => {
                    console.log(res.data)
                    this.$router.push("/list")
                })
            }
        }
    };
</script>