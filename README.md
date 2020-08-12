# Webhook Notifier

Webhook Notifier is a Discord Bot written in JavaScript with node.js and discord.js.

## Building and running

Use [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) to build and run it, using the following commands:

```bash
docker-compose build
```

```bash
docker-compose up
```

## Features

The bot listens to webhook events, and then DMs the owner if a webhook is added, edited or triggered. If a webhook is added or edited, it also posts a notification in the according channel.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[License](https://github.com/MoaufmKlo/webhook-notifier/blob/master/LICENSE)
