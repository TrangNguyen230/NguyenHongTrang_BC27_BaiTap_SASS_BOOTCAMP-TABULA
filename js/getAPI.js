var baseUrl = "https://62c05e55d40d6ec55ccfa379.mockapi.io/api/user";

// Hàm call API lấy danh sách user
function apiGetUser(search) {
  return axios({
    url: baseUrl,
    method: "GET",
    params: {
      name: search,
    },
  });
}

function User(id, name, language, type, description, image) {
  this.id = id;
  this.name = name;
  this.language = language;
  this.type = type;
  this.description = description;
  this.image = image;
}

main();

function main() {
  apiGetUser().then(function (result) {
    // Tạo biến users nhận kết quả trả về từ API
    var users = result.data;

    // Duyệt mảng data và khởi tạo các đối tượng User
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      users[i] = new User(
        user.id,
        user.name,
        user.language,
        user.type,
        user.description,
        user.image
      );
    }
    // Gọi hàm display hiển thị ra giao diện
    switch (user.type) {
        case "GV":
            display(users);
            break;
            case "HV":
                return;
    }
   
  });
}

function display(users) {
  var html = "";
  for (var i = 0; i < users.length; i++) {
    var user = users[i];

        html += `
        <div class="col-lg-3 col-sm-6">
            <div class="card text-start pb-3 mt-5 mx-3">
              <div class="card-image">
                <img
                  class="card-img-top"
                  src="${user.image}"
                  alt="Title"
                />
              </div>
              <div class="card-body text-center">
                <h4 class="card-title">${user.language}</h4>
                <p class="card-text">${user.name}</p>
                <span
                  >${user.description}</span
                >
              </div>
            </div>
          </div>
        `;


    console.log(user.type);
  }

  document.getElementById("info").innerHTML = html;
}
