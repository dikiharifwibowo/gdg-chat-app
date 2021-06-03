<template>
  <div id="app" class="container">
    <!-- Login section -->
    <div class="px-24 mt-5 rounded-lg" v-if="!name">
      <div class="text-3xl font-nunito font-extrabold pt-4 text-center text-gray-900 mb-7 mt-16">
        <span class="block xl:inline">Join Chat</span>
      </div>
      <label for="userName" class="font-bold w-2/5">
        Username
      </label>
      <br />
      <input v-model="userName" type="text" class="w-60 w-full sm:w-3/4 py-3 text-center sm:text-left sm:pl-5 bg-white
        border border-solid border-black-20% box-border rounded-md font-nunito font-semibold text-career-dropdown text-black-50%">
      <br />
      <br />
      <button @click="updateUsername" class="px-6 py-3 mb-3 text-lg text-grey font-semibold bg-yellow-300 rounded-md sm:mb-0 sm:w-auto">
        Join Chat
      </button>
    </div>

    <!-- Chat section -->
    <div class="px-24 mt-3" v-else>
      <div class="text-3xl font-nunito font-extrabold pt-4 text-center text-gray-900 mb-7 mt-16">
        <span class="block xl:inline">Chat</span>
      </div>
      <div class="font-bold">Welcome {{ name }}!</div>
      <div class="rounded-lg">
        <div class="bg-white" style="overflow: auto">
          <div class="mb-3"  v-for="message in messages"
               :key="message">
            <div class="flex items-end">
              <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1">
                <div class="font-bold">{{ message.username }}</div>
                <div class="mt-0"><span class="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">{{ message.text }}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input v-model="showMessage" type="text" class="mt-2 w-60 w-full sm:w-3/4 py-3 text-center sm:text-left sm:pl-5 bg-white
        border border-solid border-black-20% box-border rounded-md font-nunito font-semibold text-career-dropdown text-black-50% mr-3">
      <button @click="sendMessage" class="px-6 py-3 mb-3 text-lg text-grey font-semibold bg-yellow-300 rounded-md sm:mb-0 sm:w-auto">
        Send
      </button>
    </div>
  </div>
</template>

<script>
import fire from "./fire";
export default {
  name: "App",
  data() {
    return {
      userName: "",
      name: null,
      showMessage: "",
      messages: []
    };
  },
  methods: {
    updateUsername() {
      this.name = this.userName;
      console.log(this.userName);
      this.userName = "";
    },
    sendMessage() {
      console.log("asdas")
      const message = {
        text: this.showMessage,
        username: this.name
      };
      fire
        .database()
        .ref("messages")
        .push(message);
      this.showMessage = "";
    }
  },
  mounted() {
    let viewMessage = this;
    const itemsRef = fire.database().ref("messages");
    itemsRef.on("value", snapshot => {
      let data = snapshot.val();
      let messages = [];
      Object.keys(data).forEach(key => {
        messages.push({
          id: key,
          username: data[key].username,
          text: data[key].text
        });
      });
      viewMessage.messages = messages;
    });
  }
};
</script>


