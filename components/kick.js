const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  ChatInputCommandInteraction,
} = require("discord.js");

module.exports = {
  developer: false,
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Kick a specific user")
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
    .addUserOption((options) =>
      options
        .setName("Kick")
        .setDescription("kick a specific target")
        .addUserOption((options) =>
          options.setName("target").setDescription("Select a user")
        )
        .addStringOption((options) =>
          options
            .setName("Reason")
            .setDescription("Reason for kicking the user?")
        )
    ),

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */

  execute(interaction, client) {
    const user = interaction.options.getMember("target");
    const member = interaction.options.getUser("target");
    const reason = interaction.options.getString("grund");
    interaction.reply({
      content: `:wave: You have kicked:  **${member.username}#${member.discriminator}** | Reason: ${reason}`,
      ephemeral: true,
    });
    setTimeout(() => {
      user.kick();
    }, 5000);
  },
};