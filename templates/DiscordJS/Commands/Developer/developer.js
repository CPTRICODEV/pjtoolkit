const {
  SlashCommandBuilder,
  CommandInteraction,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  developer: false, // if you have setup a developer guild and you want to check the command out in your developer guild then set this to true!.
  data: new SlashCommandBuilder()
    .setName("developer")
    .setDescription("Reply to you with Pong!")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator), // this will set the permissions of the command, remove it if you want everyone to use it, leave it if you want only administrators to use the command.

  /**
   *
   * @param { CommandInteraction } interaction
   */

  execute(interaction) {
    interaction.reply("This is a developer command with (MEMBER PERMISSIONS)");
  },
};
