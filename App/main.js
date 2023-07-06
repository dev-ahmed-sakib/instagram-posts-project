const postArea = document.querySelector(".fullPost")

let postAreaList = "";

mainPosts.reverse().map((item, index) => {
  postAreaList += `
  <div class="post-section">
  <div style="width: 630px; ">
      <div class="post-container">
          <!------- Post Header ------>
          <div class="post-header">
              <div class="author">
                  <div class="author-profile-img">
                      <img src="${item.author.photo}" alt="">
                  </div>
                  <div class="post-author-name">
                      <a href="#">${item.author.name}</a>
                      <span><i class="fas fa-circle"></i> ${item.timeAgo}</span>
                      <a href="#"></a>
                      <p>${item.postLocation[0]}, ${item.postLocation[1]}</p>
                  </div>
              </div>
              <div class="three-dot">
                  <a href="#"><i class="fas fa-ellipsis-h"></i></a>
              </div> 
          </div>

          <!------ Post Body ------>
          <div class="post-body">
              <div class="post-img">
                  <img src="${item.postPhoto}" alt="">
              </div>
              <div class="post-reaction">
                  <div class="p-reaction-left">
                      <div class="post-like post-icon">
                          <span><i class="far fa-heart"></i></span>
                      </div>
                      <div class="post-comment post-icon">
                          <span><i class="far fa-comment"></i></span>
                      </div>
                      <div class="post-share post-icon">
                          <span><i class="far fa-paper-plane"></i></span>
                      </div>
                  </div>
                  <div class="post-save post-icon">
                      <span><i class="far fa-bookmark"></i></span>
                  </div>
              </div>
              <div class="post-like-total">
                  <p>${item.postLike} likes</p>
              </div>
              <div class="post-content">
                  <p> <a href="#">${item.author.name}.</a> ${item.postContent} <a href="#" class="post-tag">@taylorehill / @gettyimages</a></p>
              </div>
              <div class="write-comment">
                  <p>View all ${item.postComment} comments</p>
                  <form action="#">
                      <input type="text" name="" id="" placeholder="Add a comment…">
                  </form>
                  <span><i class="far fa-smile"></i></span>
              </div>
          </div>    
          
      </div>
      <div class="post-container">


          <!------ Post Body ------>

          
      </div>

  </div>
</div>
  
  `;
});

postArea.innerHTML = postAreaList;

